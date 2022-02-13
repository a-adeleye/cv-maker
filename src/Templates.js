import { Link } from "react-router-dom";
import typeOne from "./t1.jpg";
import typeTwo from "./t2.jpg";
import typeThree from "./t3.jpg";

export default function Templates() {
  const style = { color: "#ffffff", fontWeight: "bold", fontSize: "1.5em" };
  return (
    <section className="templates">
      <p className="templates--title ">Choose a template</p>
      <div className="templates-container">
        <Link to="/resumeform" style={style}>
          <div className="template">
            <p className="template--title">Type One</p>
            <img src={typeOne} alt="" />
          </div>
        </Link>
        <Link to="/resumeform" style={style}>
          <div className="template">
            <p className="template--title">Type Two</p>
            <img src={typeTwo} alt="" />
          </div>
        </Link>
        <Link to="/resumeform" style={style}>
          <div className="template">
            <p className="template--title">Type Three</p>

            <img src={typeThree} alt="" />
          </div>
        </Link>
      </div>
    </section>
  );
}
