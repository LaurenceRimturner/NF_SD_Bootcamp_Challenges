import "./styles.css";

import Header from "./Header";
import Navigation from "./Navigation";
import Link from "./Link";
import Logo from "./Logo";
import Avatar from "./Avatar";

export default function App() {
  return (
    <>
      <Header>
        <Logo />
        <Navigation>
          <Link className="navigation__link" href="#home">
            Home
          </Link>
          <Link className="navigation__link" href="#about">
            About
          </Link>
          <Link className="navigation__link" href="#impressum">
            Impressum
          </Link>
        </Navigation>
        <Avatar />
      </Header>

      <main>content goes here…</main>
    </>
  );
}
