import Logo from "../Assets/bus-logo.png";
import Nav from "./Nav";
import HeroText from "./Hero-text";
import "./Header.css";

const Header = () => {
  return (
    <section className="hero-section">
      <header>
        <div className="logo">
          <img className="img-logo" src={Logo} alt="Logo"></img>
          <h1 className="logo-txt">
            <a href="#sample">Himalayan Express Bus Service</a>
          </h1>
        </div>
        <Nav />
      </header>
      <HeroText />
    </section>
  );
};

export default Header;
