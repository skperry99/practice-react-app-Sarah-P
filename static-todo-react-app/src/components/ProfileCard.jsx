export default function ProfileCard(props) {
  return (
    <div className="profileCard">
      <p> Name: {props.name} </p>
      <p> Age: {props.age} </p>
      <p> Bio: {props.bio} </p>
    </div>
  );
}
