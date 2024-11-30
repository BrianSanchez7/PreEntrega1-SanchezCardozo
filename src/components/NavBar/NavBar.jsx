import "./Navbar.css";
import { CartWidget } from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar-container">
      <div className="brand">
        <img src="https://i.ibb.co/2qSTjgf/mapatech-2.webp" alt="Logo" />
      </div>
      <ul className="categorias">
        <li className="nav-item">Notebooks</li>
        <li className="nav-item">PC Armada</li>
        <li className="nav-item">Componentes</li>
        <li className="nav-item">Perifericos</li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
