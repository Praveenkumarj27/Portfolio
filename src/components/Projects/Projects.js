import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
function Projects() {
  return (
    <>
      <svg
        height="100%"
        width="100%"
        id="svg"
        viewBox="0 0 1440 150"
        xmlns="http://www.w3.org/2000/svg"
        class="transition duration-300 ease-in-out delay-150"
      >
      </svg>
      <div className="ProjectWrapper" id="projects">
        <div className="Container">
          <div className="SectionTitle">Projects</div>
          <div className="Credentials">
           <h3><u>Credentials</u></h3>
            <div><b>User:</b> Email: user@mail.com | Password: User@123</div>
            <div><b>Admin:</b> Email: admin@mail.com | Password: Admin@123</div>
          </div>
          <ProjectCard />
        </div>
      </div>
    </>
  );
}

export default Projects;
