import React from 'react';

function About() {
  return(
    <div className="flex-row about-container">
      <section className="about-text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis fuga molestiae temporibus voluptates dolore a consequuntur, nihil, perspiciatis ipsa est tempora ipsum, facere id libero? Molestias ab adipisci cumque quisquam modi pariatur. Ducimus vero doloremque facilis dignissimos maxime porro alias aspernatur esse nisi, facere eum quos dolorum quasi, unde accusantium laboriosam nobis at repellat laborum fugiat ipsum obcaecati iusto? Repellendus vel molestiae perspiciatis pariatur, consequatur sequi deleniti beatae odit alias repudiandae! Rerum, dignissimos nulla! Eligendi accusamus facere ipsum iste nihil nam repudiandae, impedit autem rerum quis vel dolorum? Ab ipsam modi architecto impedit totam facere praesentium, vitae natus aut cum.
      </section>
      <div className="photo-me">
        <img src={require("../../images/me.jpg")} alt="Matt Noreika"/>
      </div>
    </div>
  )
}

export default About;