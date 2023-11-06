import { IoMdArrowBack } from "react-icons/io";
import { NavBar } from "../../Home/components/NavBar";
import { UserCard } from "../components/UserCard";
import { Post } from "../../Home/components/Post";
import { useQuery } from "react-query";
import { getPosts } from "../../services/posts";

export const UserPage = () => {
  const {
    data: posts,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: () => getPosts(),
  });

  return (
    <>
      <NavBar />
      <main className="flex flex-col h-full overflow-y-scroll">
        <UserCard />
        <div className="flex justify-center items-center">
          <div className="w-[45vw]">
            {posts?.map(
              (p) =>
                p.userId == 3 && (
                  <Post
                    key={p.postId}
                    postContent={p.mainContent}
                    title={p.title}
                    postOwner={p.userId}
                    postedAt={p.createdAt}
                  />
                )
            )}
          </div>
        </div>
      </main>
    </>
  );
};
