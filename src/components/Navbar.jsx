import { Link, useLocation } from 'react-router-dom';
import "./Navbar.css";
import {
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const navigationItems = [
  { path: '/', icon: faInfoCircle, label: 'Acerca' },
];

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        {navigationItems.map((item) => (
          <li
            key={item.path}
            className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
          >
            <Link to={item.path} className="nav-link">
              <FontAwesomeIcon icon={item.icon} className="nav-icon" />
              <span className="nav-label">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
