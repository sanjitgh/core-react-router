import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const { id, title, body } = post;
  return (
    <div className="container mx-auto bg-slate-200 p-5 my-10">
      <h1>{id}</h1>
      <h3 className="font-bold text-xl">{title}</h3>
      <p>{body}</p>
    </div>
  );
};

export default PostDetails;
