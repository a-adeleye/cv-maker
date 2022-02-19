import { Link } from "react-router-dom";

export default function FormNavigation(props) {
  return (
    <div className="formNavigation">
      <button onClick={props.onClick}>BACK</button>
      <button className="next" onClick={props.onClick}>
        NEXT
      </button>
    </div>
  );
}
