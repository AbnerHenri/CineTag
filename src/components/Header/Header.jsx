import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <header className="cabecalho">
      <Link to={"./"}>
        <img src="/assets/logo.png" alt="Logo" />
      </Link>

      <nav>
        <Link to={"./home"} className="link">
          Home
        </Link>
        <Link to={"./"} className="link">
          Favoritos
        </Link>
      </nav>
    </header>
  );
};
