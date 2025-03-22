export default function Service(props) {
  return (
    <div className="service--box">
      <div className="service--info">
        <i className={props.icon}></i>
        <h4>{props.title}</h4>
        <p>{props.paragraph}</p>
      </div>
    </div>
  );
}
