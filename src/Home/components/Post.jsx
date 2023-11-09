import { useContext, useEffect, useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { PiShareFatDuotone } from "react-icons/pi";
import { useMutation, useQuery } from "react-query";
import { createComment, getComments } from "../../services/comments";
import { Comment } from "./Comment";
import { MdFullscreenExit } from "react-icons/md";
import { getUserById } from "../../services/users";
import { toast } from "sonner";
import { AuthContext } from "../../context/AuthContext";

export const Post = ({ postContent, postOwner, postedAt, title, postId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [postOwnerInfo, setPostOwnerInfo] = useState({});

  const toggleMenu = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const { mutate, isPending } = useMutation({
    mutationKey: ["userInfo"],
    mutationFn: (id) => getUserById(id),
    onSuccess: ({ userName, pfp }) => {
      setPostOwnerInfo({ userName, pfp });
    },
    onError: () => {
      toast.error("Failed to get user info");
    },
  });

  useEffect(() => {
    mutate(postOwner);
  }, []);

  return (
    <div>
      <div className="border bg-white rounded-lg overflow-hidden p-2 mt-2 w-full">
        <div className="flex space-x-3 items-center text-sm text-gray-500">
          <img
            src={`/public/${postOwnerInfo.pfp}`}
            alt="ProfilePostPic"
            className="h-6 w-6 rounded-md"
          />
          <span>•</span>
          <a className="hover:underline" href="">
            {postOwnerInfo.userName}
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
          pfp={postOwnerInfo.pfp}
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
  pfp,
}) => {
  const { data: comments } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () => getComments(postId),
  });

  const [comment, setComment] = useState("");
  const { state } = useContext(AuthContext);
  const { userInfo } = state;

  const { mutate } = useMutation({
    mutationKey: ["createComment"],
    mutationFn: (data) => createComment(data),
    onSuccess: () => {
      toast.success("Posted successfully");
    },
    onError: () => {
      toast.error("Posting failed");
    },
  });

  const handlePostComment = () => {
    const createdComment = {
      postId,
      userId: userInfo.userId,
      mainContent: comment,
      media: "none",
    };
    mutate(createdComment);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-brightness-50 z-50">
      <div className="bg-white rounded-xl h-[40vw] w-[40vw] shadow-2xl p-6 overflow-auto relative">
        <div className="flex space-x-3 items-center text-sm text-gray-500 ">
          <img
            src={`/public/${pfp}`}
            alt="ProfilePostPic"
            className="h-6 w-6 rounded-md"
          />
          <span>•</span>
          <a className="hover:underline" href="">
            {userInfo.userName}
          </a>
          <span>/</span>
          <a className="hover:underline" href="">
            {postedAt}
          </a>
        </div>
        <button className="absolute top-0 right-0 m-2" onClick={toggleMenu}>
          <MdFullscreenExit size={26} className="fill-orange-500" />
        </button>
        <h1 className="text-lg font-semibold">{title}</h1>
        <p>{postContent}</p>
        <hr className="mt-4" />
        <div className="flex justify-between">
          <textarea
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="border rounded-lg p-2 w-full mr-2 my-2 resize-none"
            placeholder="Comment"
            rows={1}
          />
          <button
            onClick={handlePostComment}
            className="bg-orange-500 rounded-lg text-white hover:bg-orange-700 my-2 text-sm px-2"
          >
            Post
          </button>
        </div>
        <hr />
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
