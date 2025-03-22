import Image from "./Image";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about--content">
        <h2>
          About <span>Me</span>
        </h2>
        <p>
          I am a passionate Front-End Developer who loves creating intuitive and
          engaging web experiences. My expertise lies in crafting responsive and
          accessible websites using core web technologies and related frameworks
          and libraries. I enjoy solving complex challenges through creative
          coding and continuously learning the latest web technologies. Whether
          working independently or in a team, I strive to deliver high-quality
          solutions that elevate user experience and meet project goals.
        </p>
        <a href="#services" className="button">
          Read More
        </a>
      </div>
    </section>
  );
}
