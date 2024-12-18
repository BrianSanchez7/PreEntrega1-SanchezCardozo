import "./Navbar.css";
import { CartWidget } from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar-container">

      <Link to="/" className="brand">
        <img src="https://i.ibb.co/2qSTjgf/mapatech-2.webp" alt="Logo" />
      </Link>

      <ul className="categorias">
        <Link to="/category/notebooks" className="nav-item">Notebooks</Link>
        <Link to="/category/pc" className="nav-item">PC Armada</Link>
        <Link to="/category/componentes" className="nav-item">Componentes</Link>
        <Link to="/category/perifericos" className="nav-item">Perifericos</Link>
      </ul>
      
      <CartWidget />
    </nav>
  );
};

export default NavBar;
