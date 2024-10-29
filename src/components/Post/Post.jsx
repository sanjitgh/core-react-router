import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title, body } = post;

  return (
    <div className="bg-slate-200 rounded p-5">
      <h3 className="font-bold">{title}</h3>
      <p className="text-gray-500">{body}</p>
      <Link to={`/post/${id}`} className="btn mt-5">
        Details
      </Link>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object,
};

export default Post;
