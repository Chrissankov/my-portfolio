import Project from "./Project";

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="projects--title">Projects</h2>
      <div className="projects--container">
        <Project
          // image="project5"
          // alt="Project 5"
          title="Kesh Malik Website"
          paragraph="A freelance project for a board games and coffee shop in Kaa El Rim, Zahle. Built using React (Vite) and Tailwind CSS, the website allows users to explore games, view the menu, check events, and connect via social media."
          url="#"
        />
        <Project
          // image="project2"
          // alt="Project 2"
          title="Millionaire Quiz Trivia"
          paragraph="A React-based trivia game featuring 15 questions with 4 answer choices each. Players have 30 seconds per question, and virtual money is awarded for each correct answer, adding excitement and a sense of achievement."
          url="https://statuesque-lily-2dc79a.netlify.app/"
        />
        <Project
          // image="project1"
          // alt="Project 1"
          title="Dessert Menu with Order Confirmation Modal"
          paragraph="A responsive React app serving as a dessert menu, allowing users to add items to their cart, adjust quantities, and confirm the order. After confirmation, a modal appears with order details for a smooth, interactive checkout experience."
          url="https://thunderous-douhua-fa2755.netlify.app/"
        />
        <Project
          // image="project3"
          // alt="Project 3"
          title="Nike Website Clone"
          paragraph="A fully responsive Nike website clone built using React and Tailwind CSS. This project features modern UI design, component-based architecture, and optimized styling with Tailwind CSS, ensuring a sleek, responsive user experience."
          url="https://heartfelt-kangaroo-0701c6.netlify.app/"
        />
        <Project
          // image="project4"
          // alt="Project 4"
          title="Car Hub Web App"
          paragraph="Car Hub is a modern, user-friendly web app for exploring cars. Users can search by manufacturer, model, fuel type, and year, with detailed info, images, and the option to call or email for inquiries. Built with Next.js, Tailwind CSS, and APIs for a responsive experience."
          url="https://animated-scone-b42513.netlify.app/"
        />
      </div>
    </section>
  );
}
