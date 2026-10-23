import { NavLink } from "react-router";
export default function NavBar() {
  return (
    <nav>
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/characters"> CHARACTERS</NavLink>
    </nav>
  );
}
