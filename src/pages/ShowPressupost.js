import ShowPressupostItem from "../components/ShowPressupostItem"

const ShowPressupost = (props) => {
  return (
    <div>
      {props.arrPressupost.map((pressupost) => (
        <ShowPressupostItem key={"_" + Math.random().toString(36).substr(2, 9)} pressupost={pressupost}></ShowPressupostItem>
      ))}
    </div>
  );
}

export default ShowPressupost;

