import { useLoaderData, useNavigate } from "react-router-dom";

const CommentDetails = () => {
  const comment = useLoaderData();
  const { id, name, email, body } = comment;
  const navigate = useNavigate();
  const handelDetails = () => {
    navigate(-1);
  };
  return (
    <div className="container mx-auto py-10">
      <div className="p-5 bg-gray-200 rounded">
        <h3 className="text-xl font-bold">{id}</h3>
        <p className="text-gray-800 text-lg">Name: {name}</p>
        <p className="text-gray-800 text-lg">Email: {email}</p>
        <p className="text-gray-800 text-lg">Description: {body}</p>
        <button onClick={handelDetails} className="btn mt-5">Go Back</button>
      </div>
    </div>
  );
};

export default CommentDetails;
