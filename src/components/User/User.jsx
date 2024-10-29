import PropTypes from "prop-types";

const User = ({ user }) => {
  const { name, email, phone, website } = user;
  return (
    <div className="bg-slate-200 p-5 rounded">
      <h3>Name: {name}</h3>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
      <p>Website: {website}</p>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object,
};
export default User;
