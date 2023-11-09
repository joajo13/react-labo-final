import { NavBar } from "../../Home/components/NavBar";
import { UserCard } from "../components/UserCard";
import { Post } from "../../Home/components/Post";
import { useQuery } from "react-query";
import { getPosts } from "../../services/posts";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

export const UserPage = () => {
  const { data: posts } = useQuery({
    queryKey: ["posts"],
    queryFn: () => getPosts(),
  });

  const { state } = useContext(AuthContext);
  const { userInfo } = state;

  return (
    <>
      <NavBar />
      <main className="flex flex-col h-full overflow-y-scroll">
        <UserCard />
        <div className="flex justify-center items-center">
          <div className="w-[45vw]">
            {posts?.map(
              (p) =>
                p.userId == userInfo?.userId && (
                  <Post
                    key={p.postId}
                    postContent={p.mainContent}
                    title={p.title}
                    postOwner={p.userId}
                    postedAt={p.createdAt}
                    postId={p.postId}
                  />
                )
            )}
          </div>
        </div>
      </main>
    </>
  );
};
