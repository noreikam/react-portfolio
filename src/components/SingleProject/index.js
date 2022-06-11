import React from 'react';

function SingleProject(props) {
const { project } = props;

  return (
    <card className="project-container">
      <h2>{project.display}</h2>
      <a href={project.liveURL}>Live project</a><br/>
      <a href={project.gitURL}>View repository on GitHub</a>
      <img src={require(`../../images/${project.name}.png`)} alt={project.display} />
    </card>
  )
}

export default SingleProject;