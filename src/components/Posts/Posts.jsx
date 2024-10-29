import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
  const posts = useLoaderData();
  return (
    <div className="container mx-auto py-10">
      <h1>All Post: {posts.length}</h1>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
        {posts.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default Posts;
