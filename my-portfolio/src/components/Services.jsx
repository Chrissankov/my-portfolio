import Service from "./Service";
export default function Services() {
  return (
    <section className="services" id="services">
      <h2 className="services--title">Services</h2>
      <div className="services--container">
        <Service
          icon="bx bx-hard-hat"
          title="Hardware Expertise"
          paragraph="I possess a strong background in hardware and communications principles, backed by hands-on experience in various engineering projects. My work demonstrates the ability to integrate technology solutions that enhance functionality and user experience."
        />
        <Service
          icon="bx bx-code"
          title="Front-End Development"
          paragraph="I specialize in building clean, responsive, and efficient websites using HTML, CSS, JavaScript, and React. I focus on creating intuitive, accessible interfaces that work seamlessly across all devices, starting with designs optimized for mobile screens. Additionally, I prioritize performance optimization to ensure fast load times and smooth user experiences."
        />
        <Service
          icon="bx bx-git-branch"
          title="Version Control"
          paragraph="I ensure smooth collaboration and maintain high code quality using Git and GitHub for version control, enabling effective project management and fostering teamwork. This approach facilitates seamless collaboration across teams and helps streamline the development process."
        />
      </div>
    </section>
  );
}
