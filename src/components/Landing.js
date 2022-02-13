import { Link } from "react-router-dom"

export default function Landing() {
    return(
        <section className="landing-page">
            <p className="landing-page--title">Choose from three template options.</p>
            <p className="landing-page--text">Transform your Resume appearance with Interview-Winning templates fast and easy.</p>
            <Link to="templates" style={{textDecoration: "none"}}> <button className="landing-page--button">CREATE RESUME</button></Link>
        </section>
    )
}