import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav">
      <div className="navLeft">
        <NavLink to="/" className={({ isActive }) => "navItem" + (isActive ? " active" : "")}>
          work
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => "navItem" + (isActive ? " active" : "")}>
          about
        </NavLink>
      </div>

      <div className="navCenter">aru</div>

      <div className="navRight">
        <a className="navButton" href="mailto:arukudass@gmail.com">contact</a>
      </div>
    </nav>
  );
}
