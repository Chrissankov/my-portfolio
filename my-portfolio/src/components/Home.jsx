import Image from "./Image";

export default function Home() {
  const emailAdress = "tannourychris@gmail.com";
  return (
    <section id="home" className="home">
      <div className="home--content">
        <h1>
          Hi, It's <span>Christian</span>
        </h1>
        <h3>
          I'm a <span>Front-End Developer</span>
        </h3>
        <p>
          I specialize in building responsive, fast, and user-friendly websites
          using HTML, CSS, JavaScript, and React. With a background in computer
          and communications engineering, I bring a deep technical understanding
          to my development process, allowing me to create clean, efficient code
          that delivers smooth and intuitive user experiences across devices.
          Whether it's optimizing performance or ensuring seamless
          functionality, I'm dedicated to solving problems and bringing ideas to
          life through modern web development.
        </p>
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
        <div className="home--buttons">
          <a href={`mailto:${emailAdress}`} className="button">
            Hire
          </a>
          <a href="#contact" className="button">
            Contact
          </a>
        </div>
      </div>
      <Image />
    </section>
  );
}
