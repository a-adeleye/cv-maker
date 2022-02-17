import { Link } from "react-router-dom";

export default function FormNavigation(props) {
  return (
    <div className="formNavigation">
      <Link to={props.back} style={{textDecoration: "none"}}><button>BACK</button></Link>
      <Link to={props.next} style={{textDecoration: "none"}}><button className="next" onClick={props.onClick}>
      {props.text}
      </button>
      </Link>
    </div>
  );
}
