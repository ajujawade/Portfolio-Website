import React from "react";
import project from "./data/projects.json";

const Projects = () => {
  const projectImages = {
    1: "assets/projects/todo.png",
    2: "assets/projects/qrcode.png",
    3: "assets/projects/otp.png",
    4: "assets/projects/weather.png",
    5: "assets/projects/portfolio.png",
  };

  return (
    <div className="container projects my-3" id="projects">
      <h1>PROJECTS</h1>
      <div className="row d-flex justify-content-center align-content-center">
        {project.map((data) => (
          <div
            key={data.key}
            className="my-4 col-sm-6 col-md-4 col-lg-3 mx-4"
          >
            <div
              className="card bg-dark text-light"
              style={{
                width: "18rem",
                border: "1px solid yellow",
                boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
              }}
              data-aos="flip-right"
              data-aos-duration="1000"
            >
              <div className="img d-flex justify-content-center align-content-center p-3">
                <img
                  src={projectImages[data.key]}
                  className="card-img-top"
                  alt={data.title}
                  style={{
                    width: "250px",
                    height: "200px",
                    border: "2px solid yellow",
                    borderRadius: "10px",
                  }}
                />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.description}</p>
                <a href={data.source} className="btn btn-warning">
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
