import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="container mx-auto flex justify-between py-5">
      <h2>Navbar</h2>
      <nav className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/comments">Comments</Link>
        <Link to="/users">Users</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
    </div>
  );
};

export default Header;
