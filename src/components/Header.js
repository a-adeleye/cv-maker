import { NavLink } from "react-router-dom"

export default function Header() {
    return(
        <header>
            <NavLink to="/templates" className={(navData) => (navData.isActive ? "active" : 'link')}>Templates</NavLink>
            <NavLink to="/generaldetails" className={(navData) => (navData.isActive ? "active" : 'link')}>General details</NavLink>
            <NavLink to="/profile" className={(navData) => (navData.isActive ? "active" : 'link')}>Profile</NavLink>
            <NavLink to="/education" className={(navData) => (navData.isActive ? "active" : 'link')}>Education</NavLink>
            <NavLink to="/experience" className={(navData) => (navData.isActive ? "active" : 'link')}>Experience</NavLink>
            <NavLink to="/skills" className={(navData) => (navData.isActive ? "active" : 'link')}>Skills</NavLink>
            <NavLink to="/preview" className={(navData) => (navData.isActive ? "active" : 'link')}>Preiew</NavLink>
        </header>
    )
}