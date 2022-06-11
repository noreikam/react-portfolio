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
      name: "foodio",
      display: "Foodio",
      liveURL: "https://noreikam.github.io/foodio/",
      gitURL: "https://github.com/noreikam/foodio/"
    },
    {
      name: "foodio",
      display: "Foodio",
      liveURL: "https://noreikam.github.io/foodio/",
      gitURL: "https://github.com/noreikam/foodio/"
    },
    {
      name: "foodio",
      display: "Foodio",
      liveURL: "https://noreikam.github.io/foodio/",
      gitURL: "https://github.com/noreikam/foodio/"
    },
    {
      name: "foodio",
      display: "Foodio",
      liveURL: "https://noreikam.github.io/foodio/",
      gitURL: "https://github.com/noreikam/foodio/"
    }
  ])

  return(
    <div className="flex-row centered">
      <h1>My Projects</h1>
      <div  className="flex-row" id="portfolio-container">
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