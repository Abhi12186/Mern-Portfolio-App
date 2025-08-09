import React from 'react'
import "./Menus.css";
import { Zoom } from 'react-awesome-reveal';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-scroll';
import { FcBusinessContact, FcHome } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { FcBiotech } from "react-icons/fc";
import { FcReadingEbook } from "react-icons/fc";
import { FcVideoProjector } from "react-icons/fc";
import { FcVoicePresentation } from "react-icons/fc";
import { FcContacts } from "react-icons/fc";

const Menus = ({toggle}) => {
  return (
    <> 
    {toggle ? (
        <>
        <Zoom>
           <div className="navbar-profile-pic">
        <img src="/Abhi.png" alt="profile pic" />
      </div>
        </Zoom>

    <Fade left>
    <div className="nav-items">
        <div className="nav-item">
            <div className="nav-link">
              <Link to="home" spy={true} smooth={true} offset={-100} duration={100} >
                <FcHome />
                 Home
              </Link>
              
          </div>

        <div className="nav-link">
          <Link to="about" spy={true} smooth={true} offset={-100} duration={100}>
          <FcAbout />
            About
            </Link>
          
          </div>

          <div className="nav-link">
            <Link to="education" spy={true} smooth={true} offset={-100} duration={100}>
            <FcReadingEbook />
            Education
            </Link>
            
          </div>


          <div className="nav-link">
            <Link to="techstack" spy={true} smooth={true} offset={-100} duration={100}>
            <FcBiotech />
            Tech Stack
            </Link>
          </div>

          <div className="nav-link">
            <Link to="projects" spy={true} smooth={true} offset={-100} duration={100}>
            <FcVideoProjector />
            Projects
            </Link>
          </div>

          <div className="nav-link">
            <Link to="contact" spy={true} smooth={true} offset={-100} duration={100}>
            <FcContacts />
            Contact
            </Link>
          </div>
        </div>
    </div>
    </Fade>
        </>
    ) : (
        <>
        <div className="nav-items">
        <div className="nav-item">
            <div className="nav-link">
              <Link to="home" spy={true} smooth={true} offset={-100} duration={100} >
              <FcHome />
              </Link>
              
          </div>

        <div className="nav-link">
           <Link to="about" spy={true} smooth={true} offset={-100} duration={100}>
          <FcAbout />
          </Link>
          </div>

        <div className="nav-link">
          <Link to="education" spy={true} smooth={true} offset={-100} duration={100}>
            <FcReadingEbook />
           
            </Link>       
          </div>

          <div className="nav-link">
              <Link to="techstack" spy={true} smooth={true} offset={-100} duration={100}>
            <FcBiotech />
            
            </Link>
          </div>


          <div className="nav-link">
            <Link to="projects" spy={true} smooth={true} offset={-100} duration={100}>
            <FcVideoProjector />
            Projects
            </Link>
          </div>

          <div className="nav-link">
              <Link to="contact" spy={true} smooth={true} offset={-100} duration={100}>
            <FcContacts />
            Contact
            </Link>
          </div>
        </div>
    </div>
    
        </>
    )}
    
    </>
  );
};

export default Menus;
