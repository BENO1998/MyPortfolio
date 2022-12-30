import React from "react";
import "./Portfolio.css";
import * as SiIcons from "react-icons/si";
import ecommerce from "../../Images/ecommerce.png";
import bookmyshow from "../../Images/bookmyshow.png";
import school from "../../Images/school.png";

function Portfolio() {
  return (
    <div id="portfolio">
      <h1 className="logo-text">My Recent Works</h1>
      <div className="allProjects">
        <div className="card" data-aos="zoom-in-up">
          <img src={ecommerce} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">Ecommerce</h5>
          </div>
          <div className="card-img-overlay">
            <div className="img-title">Ecommerce</div>
            <div className="img-description">
              <p>
              I have created a simple responsive ecommerce website using reactJS
              </p>
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <p className="codeLinks text-center pt-3">
                   <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/BENO1998/ecommerce"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>
               
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://lighthearted-phoenix-cc6c2b.netlify.app/"
                  >
                  Live-Website <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card" data-aos="zoom-in-up">
          <img src={bookmyshow} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">Book My Show</h5>
          </div>
          <div className="card-img-overlay">
            <div className="img-title">Book My Show</div>
            <div className="img-description">
              <p>
              A responsive website where user can register and login to reach movie ticket booking page. 
              I have used MERN stack to make this project.
              </p>
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <i className="fab fa-node node"></i> &nbsp;
                <SiIcons.SiMongodb className="mongodb" /> &nbsp;
                <p className="codeLinks text-center pt-3">
                   <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/BENO1998/guvi-hackathon2-frontend"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/BENO1998/guvi-hackathon2-backend"
                  >
                    Backend <i className="fab fa-github"></i>
                  </a>
                
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://guvi-hackathon2-benosujith.netlify.app/"
                  >
                    Live-Website <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card" data-aos="zoom-in-up">
          <img src={school} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">Student Results</h5>
          </div>
          <div className="card-img-overlay">
            <div className="img-title">Student Results</div>
            <div className="img-description">
              <p>
              In this website employee can register and wait for admin approval to login and manage student profile and student's exam results.  
              I have used MERN stack to make this project.
              </p>
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <i className="fab fa-node node"></i> &nbsp;
                <SiIcons.SiMongodb className="mongodb" /> &nbsp;
                <p className="codeLinks text-center pt-3">
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/BENO1998/crm-frontend"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/BENO1998/crm-backend"
                  >
                    Backend <i className="fab fa-github"></i>
                  </a>
               
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://crm-schoolresults-2808c4.netlify.app/"
                  >
                   Live-Website <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
