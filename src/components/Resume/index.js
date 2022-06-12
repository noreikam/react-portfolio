import React from 'react';

function Resume() {
  return(
    <div id="resume-container" className="footer-space">
      <h1>Resume</h1>
      <div>
        <p>Download my <a href={require("../../assets/pdf/resume.pdf")} download>resume</a>.</p>
      </div>
      
      <div><h3>Competencies</h3></div>
      <div>
        <h4>Back End</h4>
        <ul>
          <li>MongoDB</li>
          <li>Mongoose</li>
          <li>SQL</li>
          <li>Sequelize</li>
          <li>Express.js</li>
          <li>Node.js</li>
        </ul>
      </div>
      <div>
        <h4>Front End</h4>
        <ul>
          <li>React</li>
          <li>Handlebars</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
        </div>
    </div>
  )
}

export default Resume;