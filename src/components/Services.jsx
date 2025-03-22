import Service from "./Service";

export default function Services() {
  return (
    <section className="services" id="services">
      <h2 className="services--title">Services</h2>
      <div className="services--container">
        <Service
          icon="bx bx-code"
          title="Front-End"
          paragraph="I specialize in building responsive, high-performance websites using HTML, CSS, JavaScript, and React.js. My expertise extends to Next.js for server-side rendering, Tailwind CSS for advanced styling, and WordPress for dynamic content delivery."
        />
        <Service
          icon="bx bx-server"
          title="Back-End"
          paragraph="I create scalable and efficient back-end systems using the MERN stack (MongoDB, Express, React, Node.js) and MySQL. I focus on developing robust APIs and ensuring seamless communication between the front-end and back-end."
        />
        <Service
          icon="bx bx-microchip"
          title="Embedded Systems"
          paragraph="I combine hardware and software skills through projects involving Arduino, Raspberry Pi, and VEX IQ. I also teach robotics and programming concepts, focusing on embedded systems and practical applications in education."
        />
      </div>
    </section>
  );
}
