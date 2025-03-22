import myImage from "../../images/image.jpg";

export default function Image() {
  return (
    <div className="image">
      <img src={myImage} alt="My Image" />
    </div>
  );
}
