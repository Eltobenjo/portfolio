import React from 'react'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faHome,
  faUser,
  faCog,
  faHammer,
} from "@fortawesome/free-solid-svg-icons";
import {Link,NavLink} from 'react-router-dom' 

const Navbar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo">
        EB<span className="name">Elton Benjamin</span>
      </Link>

      <nav>
        <NavLink className="nav-icon" id="home" to="/">
          <span className="icon-name">HOME</span>
          <FontAwesomeIcon icon={faHome} color="#4d4d4e"></FontAwesomeIcon>
        </NavLink>
        <NavLink className="nav-icon" id="about" to="/about">
          <span className="icon-name">ABOUT</span>
          <FontAwesomeIcon icon={faUser} color="#4d4d4e"></FontAwesomeIcon>
        </NavLink>
        <NavLink className="nav-icon" id="skills" to="/skills">
          <span className="icon-name">SKILLS</span>
          <FontAwesomeIcon icon={faCog} color="#4d4d4e"></FontAwesomeIcon>
        </NavLink>

        <NavLink className="nav-icon" id="projects" to="/projects">
          <span className="icon-name">PROJECTS</span>
          <FontAwesomeIcon icon={faHammer} color="#4d4d4e"></FontAwesomeIcon>
        </NavLink>

        <NavLink className="nav-icon" id="contact" to="/contact">
          <span className="icon-name">CONTACT</span>
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"></FontAwesomeIcon>
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar