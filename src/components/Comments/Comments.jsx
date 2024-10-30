import { useLoaderData } from "react-router-dom";
import Comment from "../Comment/Comment";

const Comments = () => {
  const comments = useLoaderData();
  return (
    <div className="container mx-auto py-10">
      <h1 className="font-bold text-xl mb-5">All Commtents: {comments.length}</h1>

      <div className="grid gap-5">
        {comments.map((comment) => (
          <Comment key={comments.id} comment={comment}></Comment>
        ))}
      </div>
    </div>
  );
};

export default Comments;
