import Service from "./Service";

export default function Services() {
  return (
    <section className="services" id="services">
      <h2 className="services--title">Services</h2>
      <div className="services--container">
        <Service
          icon="bx bx-code"
          title="Front-End"
          paragraph="I specialize in creating responsive, high-performance websites using HTML, CSS, JavaScript, and React.js. I also leverage Next.js for server-side rendering, Tailwind CSS for styling, and WordPress for dynamic content management."
        />
        <Service
          icon="bx bx-server"
          title="Back-End"
          paragraph="I develop scalable and efficient back-end solutions using the MERN stack (MongoDB, Express, React, Node.js) and MySQL. My work focuses on building robust APIs and ensuring seamless integration between front-end and back-end systems."
        />
        <Service
          icon="bx bx-git-branch"
          title="Version Control"
          paragraph="I manage code efficiently with Git and GitHub, ensuring smooth collaboration, maintaining version history, and facilitating team coordination to streamline the development process."
        />
      </div>
    </section>
  );
}
