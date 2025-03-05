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
          using modern front-end technologies. With a background in Computer
          Engineering, I focus on writing clean, efficient code that ensures
          seamless performance across devices. Whether optimizing functionality
          or enhancing user experience, I am dedicated to solving problems and
          bringing ideas to life through modern web development
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
            href="https://www.linkedin.com/in/christian-tannoury-68a88b237/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-linkedin-square"></i>
          </a>
          <a
            href="https://www.instagram.com/chris.f.tannoury/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-instagram-alt"></i>
          </a>
          <a
            href="https://www.facebook.com/tannoury.chris/"
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
