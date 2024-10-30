import {useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
const Comment = ({ comment }) => {
  const { id, name, email, body } = comment;
  const navigate = useNavigate();
  const handelDetails = () => {
    navigate(`/comment/${id}`);
  };
  return (
    <div className="bg-gray-200 rounded p-5">
      <div>
        <h3 className="text-lg font-bold">Name: {name}</h3>
        <p className="text-gray-600">Email: {email}</p>
        <p className="text-gray-600">Description: {body}</p>
      </div>
      <div>
        <button onClick={handelDetails} className="btn mt-5">
          More Details
        </button>
      </div>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.object,
};
export default Comment;
