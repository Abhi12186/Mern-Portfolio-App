import React from "react";
import "./About.css";


const About = () => {
  return (
    <>
    
      <div className="about" id="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img src="Abhi.png" alt="profile_pic"></img>
          </div>
          <div className="col-md-6 about-content">
            <h1>About me</h1>
            <p>
              I am a passionate and dedicated MERN Stack Developer with a strong
              foundation in full-stack web development. I hold a Master of
              Computer Applications (MCA) degree from Madhav Institute of
              Technology and Science (MITS), Gwalior, and a Bachelor's degree in
              Computer Applications (BCA) from Government Science College,
              Gwalior. With a deep interest in building efficient, scalable, and
              user-friendly web applications, I specialize in working with
              MongoDB, Express.js, React.js, and Node.js. I enjoy turning
              complex problems into clean, maintainable solutions and am always
              eager to learn new technologies to stay ahead in the ever-evolving
              tech landscape.
            </p>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default About;
