import { NavLink } from "react-router-dom";
import "./Header.css"
const Header = () => {
  return (
    <div className="container mx-auto flex justify-between py-5">
      <h2>Navbar</h2>
      <nav className="flex gap-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/comments">Comments</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </nav>
    </div>
  );
};

export default Header;
