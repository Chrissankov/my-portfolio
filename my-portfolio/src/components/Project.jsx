export default function Project(props) {
  return (
    <div className="project--card">
      <img src={`../../images/${props.image}.png`} alt={props.alt} />
      <h3>{props.title}</h3>
      <p>{props.paragraph}</p>
      <a href="#contact" className="button">
        Review Project
      </a>
    </div>
  );
}
