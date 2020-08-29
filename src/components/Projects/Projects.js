import React from "react"

import "./Projects.scss"
import ProjectCard from "../Project_Card/ProjectCard"
import ProjectsList from "../../constant/ProjectsList"


const Projects = () => {
  return (
    <section className="projects">
      <h2 className="projects__heading">Projects</h2>
      <div className="row">
        {ProjectsList.map((i, ind) => (
          <ProjectCard item={i} key={ind} />
        ))}
      </div>
    </section>
  )
}

export default Projects
