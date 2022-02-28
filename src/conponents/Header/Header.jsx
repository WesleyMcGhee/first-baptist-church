import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <h1 className="logo">First Baptist Church</h1>
      <ul className="nav-bar">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Media
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Ministries
          </Link>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="https://www.youtube.com/channel/UCdw0N6s405ClFMnfK2luZ5g"
            target="/"
          >
            YouTube
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
