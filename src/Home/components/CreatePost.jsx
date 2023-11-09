import React, { useContext, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link, json } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { createPost } from "../../services/posts";
import { useMutation } from "react-query";
import { toast } from "sonner";

export const CreatePost = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const { state } = useContext(AuthContext);
  const { userInfo } = state;

  const { mutate } = useMutation({
    mutationKey: ["createPost"],
    mutationFn: (post) => createPost(post),
    onSuccess: () => {
      toast.success("Posted successfully");
    },
    onError: () => {
      toast.error("Posting failed");
    },
  });

  return (
    <>
      <div className="border p-3 mt-3 rounded-md flex bg-white ">
        <Link to={"/user"}>
          <img
            className="h-14 w-14 rounded-2xl mr-2"
            src={`public/${userInfo?.pfp ?? "default.png"}`}
            alt="profile"
          />
        </Link>
        <button
          className="border text-gray-400 hover:border-blue-600 rounded-md w-full text-left pl-2 hover:cursor-text"
          onClick={toggleModal}
        >
          Create post...
        </button>
      </div>
      <CreatePostModal
        isOpen={isOpen}
        toggleModal={toggleModal}
        userInfo={userInfo}
        mutate={mutate}
      />
    </>
  );
};

export const CreatePostModal = ({ isOpen, toggleModal, userInfo, mutate }) => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  if (!isOpen) {
    return null;
  }

  const handlePost = () => {
    toggleModal();
    const { title, content } = formData;
    const post = {
      userId: userInfo.userId,
      title: title.toString(),
      mainContent: content.toString(),
      media: "none",
      communityId: 1,
    };
    mutate(post);
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center backdrop-brightness-50">
      <div className="bg-white p-4 rounded shadow-xl flex flex-col w-full lg:w-[60vw] mx-10 z-40">
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center">
            <img
              src={`public/${userInfo.pfp}`}
              alt="profilePic"
              className="h-8 w-8 rounded-lg"
            />
            <span className="text-sm font-semibold ml-2">
              @{userInfo.userName}
            </span>
          </div>
          <button onClick={toggleModal}>
            <AiOutlineClose size={22} />
          </button>
        </div>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          className="rounded-sm border border-gray-300 p-2 mt-2"
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          value={formData.title}
        />
        <textarea
          placeholder="Abc..."
          className="rounded-sm border border-gray-300 p-2 mt-2"
          name="content"
          id="content"
          rows={10}
          onChange={(e) =>
            setFormData({ ...formData, content: e.target.value })
          }
          value={formData.content}
        />
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-2"
          onClick={handlePost}
        >
          Post
        </button>
      </div>
    </div>
  );
};
