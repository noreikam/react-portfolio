import React from 'react';

function About() {
  return(
    <div className="footer-space">
      <h1>About Me</h1>
      <div className="flex-row">
        <section id="about-text">
          <h3>Professional</h3>
          <p>
            Hi there.  My name is Matt.  I'm a Full Stack Web Developer with a focus on back end technologies.  Always looking for more information, I recently completed the UConn Full Stack Web Developer Boot Camp, and am seeking my first opportunity in the industry.  I currently work as a delivery driver and have past experience in IT as a Business Analyst.  
          </p>
          <h3>Personal</h3>
          <p>
            Some may say 35 is too old to be a Lego fanatic, but I strongly disagree.  I am a rabid Celtics fan and a semi-retired non-professional golfer.  I'm a better cook than many but probably not as good as I imagine myself to be.  Clever, funny shows are what I watch in my down time.
          </p>
          <h3> Want to know more?</h3>
          <p>Check out my work under Portfolio, my qualifications under Resume, or reach out to me directly in the Contact tab.</p>
        </section>
        <div id="photo-me">
          <img src={require("../../assets/images/me.jpg")} alt="Matt Noreika"/>
        </div>
      </div>
      
    </div>
  )
}

export default About;