import React from "react";
import "./About.css";
import Me from "../../Images/man.jpg";
import { InfoContainer } from "./AboutElements";
function About() {
  return (
    <>
      <InfoContainer lightBg={false} id="about">
        <h1 className="logo-text text-center py-md-5 py-xs-5">About Me</h1>
        <div className="row">
          <div
            className="col-md-5 col-sm-12 mb-3  aboutImg"
            data-aos="fade-right"
          >
            <img src={Me} alt="my profile" />
          </div>
          <div className="col-md-6 col-sm-12" data-aos="fade-left">
            <p>
            I'm BENO SUJITH E, <br/>
            I am a professional and passionate programmer in my daily life. <br/>
            A quick learner with a self-learning attitude. <br/>
            I love to learn and explore new technologies and am Passionate about Problem Solving. <br/>
            Love almost all the stacks of Software Engineering.<br/>
            I'm excited to be at the deployment phase of my new career as a web developer. 
            
            </p>

            <a
              className="btn btn-sm btn-primary mt-3"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1HFMlY1MTfV2Wtx_gaFC7fwaWzIpVFZzR/view?usp=share_link"
              target="_blank"
              download
            >
              My Resume <i className="fad fa-link"></i>
            </a>
          </div>
        </div>
      </InfoContainer>
    </>
  );
}

export default About;
