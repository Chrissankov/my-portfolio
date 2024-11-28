import Project from "./Project";
export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="projects--title">Projects</h2>
      <div className="projects--container">
        <Project
          // image="project1"
          // alt="Project 1"
          title="Dessert Menu with Order Confirmation Modal"
          paragraph="A responsive React app that functions as a dessert menu, allowing users to add items to the cart, adjust quantities, and confirm their order. Upon confirmation, a modal displays the order details for a smooth and interactive checkout experience."
          url="https://thunderous-douhua-fa2755.netlify.app/"
        />
        <Project
          // image="project2"
          // alt="Project 2"
          title="Millionaire Quiz Trivia"
          paragraph="A React-based trivia game featuring 15 questions, each with 4 answer choices, one correct. Players have 30 seconds per question, and a virtual $ prize is awarded for each win, adding excitement and a sense of achievement to the experience."
          url="https://statuesque-lily-2dc79a.netlify.app/"
        />
        <Project
          // image="project3"
          // alt="Project 3"
          title="Advice Generator App"
          paragraph="A React app where clicking the die generates a random piece of advice or quote in the center of the screen, providing a fun and interactive way to receive new insights."
          url="https://peppy-souffle-61761c.netlify.app/"
        />
        <Project
          // image="project4"
          // alt="Project 4"
          title="Social Media Management Bento Dashboard"
          paragraph="A static React dashboard that displays social media management insights, including content creation and scheduling, follower growth, and optimized post timings, all presented in a Bento-style layout."
          url="https://iridescent-llama-381f58.netlify.app/"
        />
        {/* <Project
          image="project5"
          alt="Project 5"
          title="Project 5"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          imperdiet lectus leo, id egestas sem aliquet in. Nunc tristique
          dignissim odio, pellentesque volutpat diam scelerisque sed.
          Pellentesque ac dui at metus tincidunt pulvinar vel vel augue."
        />
        <Project
          image="project6"
          alt="Project 6"
          title="Project 6"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          imperdiet lectus leo, id egestas sem aliquet in. Nunc tristique
          dignissim odio, pellentesque volutpat diam scelerisque sed.
          Pellentesque ac dui at metus tincidunt pulvinar vel vel augue."
        /> */}
      </div>
    </section>
  );
}
