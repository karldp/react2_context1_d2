import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/"> Home </Link> <p>🏕️</p> <Link to="/favoritos"> Favoritos </Link>
    </nav>
  );
};
export default Navbar;
