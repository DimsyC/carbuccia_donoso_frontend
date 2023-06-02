import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar({ currentPath, routes }) {
  return (
    <nav>
      <ul>
        {routes.map((route) => {
          if (route.path === "/")  return null;

          return (
            <li key={route.path} className={currentPath === route.path ? "active" : ""}>
              <Link to={route.path}>{route.label}</Link>
            </li>
          );
        })}
         <div className="underline"></div>
      </ul>
    </nav>
  );
}

export default Navbar;
