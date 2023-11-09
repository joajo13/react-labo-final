import React, { useContext, useState } from "react";
import { HomeLayout } from "./layout/HomeLayout";
import { CreatePost } from "../components/CreatePost";
import { getPosts } from "../../services/posts";
import { useQuery } from "react-query";
import { Post } from "../components/Post";
import { getUserById } from "../../services/users";
import { AuthContext } from "../../context/AuthContext";

export const HomePage = () => {
  const { state } = useContext(AuthContext);
  const { user } = state;

  const { data: userFetch } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUserById(user.userID),
  });

  localStorage.setItem("userInfo", JSON.stringify(userFetch));

  const { data: posts } = useQuery({
    queryKey: ["posts"],
    queryFn: () => getPosts(),
  });

  return (
    <HomeLayout>
      <main className="w-[90vw] lg:w-[60vw]">
        <CreatePost userInfo={userFetch} />
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
