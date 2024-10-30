import PropTypes from "prop-types";
import {useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title, body } = post;
  const navigate = useNavigate();
  const handelDetails = () =>{
    navigate(`/post/${id}`)
  }
  return (
    <div onClick={handelDetails} className="bg-slate-200 rounded p-5 cursor-pointer">
      <h3 className="font-bold">{title}</h3>
      <p className="text-gray-500">{body}</p>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object,
};

export default Post;
