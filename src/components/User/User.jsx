import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  const {id, name, email, phone, website } = user;
  return (
    <div className="bg-slate-200 p-5 rounded ">
      <h3>Name: {name}</h3>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
      <p>Website: {website}</p>
      <Link to={`/user/${id}`} className="btn mt-5">Show Details</Link>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object,
};
export default User;
