export default function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a
          href="https://github.com/Chrissankov"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/christian-tannoury-68a88b237?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-linkedin-square"></i>
        </a>
        <a
          href="https://www.instagram.com/chris.f.tannoury?igsh=MTVzbTdremV6azF5Yg%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-instagram-alt"></i>
        </a>
        <a
          href="https://www.facebook.com/tannoury.chris?mibextid=LQQJ4d"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-facebook"></i>
        </a>
      </div>
      <ul className="list">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <p className="copyright">
        &copy; Christian Tannoury | All rights Reserved
      </p>
    </footer>
  );
}
