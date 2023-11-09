import React, { useContext, useEffect, useState } from "react";
import { HomeLayout } from "./layout/HomeLayout";
import { CreatePost } from "../components/CreatePost";
import { getPosts } from "../../services/posts";
import { useMutation, useQuery } from "react-query";
import { Post } from "../components/Post";
import { getUserById } from "../../services/users";
import { AuthContext } from "../../context/AuthContext";

export const HomePage = () => {
  const userInfo = localStorage.getItem("userInfo");

  const { handleAddInfo, state } = useContext(AuthContext);
  const { user } = state;

  const { mutate, isPending } = useMutation({
    mutationKey: ["userInfo"],
    mutationFn: (id) => getUserById(id),
    onSuccess: (data) => {
      handleAddInfo(data);
    },
    onError: () => {
      toast.error("Failed to get user info");
    },
  });

  useEffect(() => {
    if (!userInfo) {
      mutate(user.userID);
    }
  }, []);

  const { data: posts } = useQuery({
    queryKey: ["posts"],
    queryFn: () => getPosts(),
  });

  return (
    <HomeLayout>
      <main className="w-[90vw] lg:w-[60vw]">
        <CreatePost />
        {posts?.map((p, i) => (
          <Post
            key={i}
            postContent={p.mainContent}
            postOwner={p.userId}
            postedAt={p.createdAt}
            title={p.title}
            postId={p.postId}
          />
        ))}
      </main>
    </HomeLayout>
  );
};
