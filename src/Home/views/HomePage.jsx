import React, { useState } from "react";
import { HomeLayout } from "./layout/HomeLayout";
import { CreatePost } from "../components/CreatePost";
import { getPosts } from "../../services/posts";
import { useQuery } from "react-query";
import { Post } from "../components/Post";

export const HomePage = () => {
  const {
    data: posts,
    isLoading,
    isError,
  } = useQuery({
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
