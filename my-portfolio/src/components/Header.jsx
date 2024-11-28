import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const phoneNumber = "+961 76 572 615";

  function handleClick() {
    setIsMenuOpen((prevState) => !prevState);
  }

  return (
    <header className="header">
      <a href="#home" className="header--logo">
        Christian <span>Tannoury</span>
      </a>

      <i
        onClick={handleClick}
        className={isMenuOpen ? "bx bx-x" : "bx bx-menu"}
        id="menu-icon"
      ></i>

      <nav className={`header--nav ${isMenuOpen ? "active" : ""}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <a href={`tel:${phoneNumber}`} className="header--button">
        Call Me
      </a>
    </header>
  );
}
