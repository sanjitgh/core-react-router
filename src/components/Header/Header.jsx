import { Link } from "react-router-dom";
import "./Header.css"
const Header = () => {
  return (
    <div>
      <h2>Navbar</h2>
      <nav className="flex gap-5">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
    </div>
  );
};

export default Header;
