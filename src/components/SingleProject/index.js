import React from 'react';

function SingleProject(props) {
const { project } = props;

  return (
    <card className="project-container">
      <h2>{project.display}</h2>
      <a href={project.liveURL} target="_blank" rel="noreferrer">View live project</a><br/>
      <a href={project.gitURL} target="_blank" rel="noreferrer">View repository on GitHub</a>
      <img src={require(`../../assets/images/${project.name}.png`)} alt={project.display} />
    </card>
  )
}

export default SingleProject;