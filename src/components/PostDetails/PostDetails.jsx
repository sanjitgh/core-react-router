import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
  const {postId} = useParams();
  const post = useLoaderData();
  const { id, title, body } = post;
  const navigate = useNavigate();
  const handelDetails = () =>{
    navigate(-1);
  }
  return (
    <div className="container mx-auto bg-slate-200 p-5 my-10">
      <h1>{id}</h1>
      <h3 className="font-bold text-xl">{title}</h3>
      <p>{body}</p>
      <button onClick={handelDetails} className="btn mt-5">Go Back</button>
    </div>
  );
};

export default PostDetails;
