import React from "react";
import "../App.css";

import projectsImage from "../assets/projects-img.png";

const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <h1 className="projects-title">Projects</h1>

      <div className="projects-img-container">
        <img
          className="projects-image"
          src={projectsImage}
          alt="ProjectsImage"
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
