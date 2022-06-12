import { React, useState } from 'react';
import SingleProject from '../SingleProject';

function Portfolio() {
  const [projects] = useState([
    {
      name: "go-fish",
      display: "Go Fish",
      liveURL: "https://go-fish-project-two.herokuapp.com/",
      gitURL: "https://github.com/noreikam/go-fish"
    },
    {
      name: "foodio",
      display: "Foodio",
      liveURL: "https://noreikam.github.io/foodio/",
      gitURL: "https://github.com/noreikam/foodio/"
    },
    {
      name: "social-network-api",
      display: "Social Network API",
      liveURL: "https://www.youtube.com/watch?v=G5NnqyM8p9M",
      gitURL: "https://github.com/noreikam/social-network/"
    },
    {
      name: "workday-scheduler",
      display: "Work Day Scheduler",
      liveURL: "https://noreikam.github.io/workday/",
      gitURL: "https://github.com/noreikam/workday/"
    },
    {
      name: "team-generator",
      display: "Team Generator",
      liveURL: "https://noreikam.github.io/team-generator/",
      gitURL: "https://github.com/noreikam/team-generator"
    },
    {
      name: "e-commerce-ORM",
      display: "E-Commerce ORM",
      liveURL: "https://www.youtube.com/watch?v=Rs159fKk0L4",
      gitURL: "https://github.com/noreikam/e-commerce"
    },
    {
      name: "password-generator",
      display: "Password Generator",
      liveURL: "https://noreikam.github.io/password-generator/",
      gitURL: "https://github.com/noreikam/password-generator/"
    }
  ])

  return(
    <div className="flex-row footer-space">
      <h1>Portfolio</h1>
      <div  className="flex-row container">
        {projects.map((project) => (
          <SingleProject 
            project={project}
            key={project.name}
            />
        ))}
      </div>
    </div>
  )
}

export default Portfolio;