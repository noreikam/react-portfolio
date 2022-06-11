import React from 'react';

function Resume() {
  return(
    <div>
      <h2>Resume</h2>
      <p>Download my <a href={require("../../assets/pdf/resume.pdf")} download>resume</a>.</p>
      <h3>Competencies</h3>
      <h4>Back End</h4>
      <ul>
        <li>MongoDB</li>
        <li>Mongoose</li>
        <li>SQL</li>
        <li>Sequelize</li>
        <li>Express.js</li>
        <li>Node.js</li>
      </ul>
      <h4>Front End</h4>
      <ul>
        <li>React</li>
        <li>Handlebars</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
    </div>
  )
}

export default Resume;