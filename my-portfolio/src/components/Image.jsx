import myImage from "../../images/imagee.jpg";

export default function Image() {
  return (
    <div className="image">
      <img src={myImage} alt="My Image" />
    </div>
  );
}
