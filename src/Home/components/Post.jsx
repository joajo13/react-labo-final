import React, { useContext, useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { PiShareFatDuotone } from "react-icons/pi";
import { useQuery } from "react-query";
import { getComments } from "../../helpers/comments";
import { Comment } from "./Comment";
import { MdFullscreenExit } from "react-icons/md";
import { AuthContext } from "../../context/AuthContext";

export const Post = ({ postContent, postOwner, postedAt, title, postId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { state } = useContext(AuthContext);
  const { user } = state;

  const toggleMenu = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const deletePost = () => {};

  return (
    <div>
      <div className="border bg-white rounded-lg overflow-hidden p-2 mt-2 w-full">
        <div className="flex space-x-3 items-center text-sm text-gray-500">
          <img
            src="https://i.imgur.com/9LcmFac.jpeg"
            alt="ProfilePostPic"
            className="h-6 w-6 rounded-md"
          />
          <span>•</span>
          <a className="hover:underline" href="">
            {postOwner}
          </a>
          <span>/</span>
          <a className="hover:underline" href="">
            {postedAt}
          </a>
        </div>
        <h1 className="text-lg font-semibold">{title}</h1>
        <p>{postContent}</p>
        <div className="flex space-x-2 text-sm text-gray-500 mt-2">
          <button className="hover:bg-gray-200 rounded-md px-2 flex gap-1 items-center">
            Like <AiOutlineLike />
          </button>
          <button
            className="hover:bg-gray-200 rounded-md px-2 flex gap-1 items-center"
            onClick={toggleMenu}
          >
            Comments
            <BiCommentDetail />
          </button>
          <button className="hover:bg-gray-200 rounded-md px-2 flex gap-1 items-center">
            Share
            <PiShareFatDuotone />
          </button>
        </div>
      </div>
      {isOpen ? (
        <PostModal
          postContent={postContent}
          postOwner={postOwner}
          postedAt={postedAt}
          title={title}
          // comments={comments || []}
          postId={postId}
          toggleMenu={toggleMenu}
        />
      ) : null}
    </div>
  );
};

export const PostModal = ({
  postContent,
  postOwner,
  postedAt,
  title,
  postId,
  toggleMenu,
}) => {
  const { data: comments } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () => getComments(postId),
  });
  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-brightness-50 z-50">
      <div className="bg-white rounded-xl h-[40vw] w-[40vw] shadow-2xl p-6 overflow-auto relative">
        <div className="flex space-x-3 items-center text-sm text-gray-500 ">
          <img
            src="https://i.imgur.com/9LcmFac.jpeg"
            alt="ProfilePostPic"
            className="h-6 w-6 rounded-md"
          />
          <span>•</span>
          <a className="hover:underline" href="">
            {postOwner}
          </a>
          <span>/</span>
          <a className="hover:underline" href="">
            {postedAt}
          </a>
        </div>
        <button className="absolute top-0 right-0 m-2" onClick={toggleMenu}>
          <MdFullscreenExit size={26} color="orange" />
        </button>
        <h1 className="text-lg font-semibold">{title}</h1>
        <p>{postContent}</p>
        <hr className="mt-4" />
        <div className="">
          <h1 className="text-md font-semibold mt-2">Comments</h1>
          {Array.isArray(comments) &&
            comments.map((c) =>
              c.postId === postId ? (
                <Comment
                  key={c.commentId}
                  commentOwner={c.userId}
                  postedAt={c.createdAt}
                  commentContent={c.mainContent}
                />
              ) : null
            )}
        </div>
      </div>
    </div>
  );
};
