import { Link } from "react-router-dom";
import typeOne from "./typeOne.jpg";
import typeTwo from "./typeOne.jpg";
import typeThree from "./typeOne.jpg";

export default function Templates() {
  return (
    <section className="templates">
    <p className="templates--title ">Choose a template</p>
      <div className="templates-container">
        <Link to="/">
          <div className="template">
            <p className="template--title">Type One</p>
            <img src={typeOne} alt="" />
          </div>
        </Link>
        <div className="template">
          <Link to="/">
            {" "}
            <p className="template--title">Type Two</p>
          </Link>
          <img src={typeTwo} alt="" />
        </div>
        <div className="template">
          <Link to="/">
            {" "}
            <p className="template--title">Type Three</p>
          </Link>
          <img src={typeThree} alt="" />
        </div>
      </div>
    </section>
  );
}
