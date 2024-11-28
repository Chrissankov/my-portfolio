import Image from "./Image";

export default function About() {
  return (
    <section id="about" className="about">
      <Image />
      <div className="about--content">
        <h2>
          About <span>Me</span>
        </h2>
        <p>
          I am a passionate front-end developer with a background in computer
          engineering. With strong expertise in both hardware and software, I
          bring a unique perspective to front-end development. My focus is on
          creating responsive, user-friendly websites using technologies like
          HTML, CSS, JavaScript, and React. I love solving complex problems
          through creative coding, and I'm always excited to learn and implement
          the latest web development trends. Whether working on solo projects or
          in a team, I am committed to delivering high-quality results that meet
          client needs and enhance user experience.
        </p>
        <a href="#services" className="button">
          Read More
        </a>
      </div>
    </section>
  );
}
