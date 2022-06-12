import React, { useState } from 'react';

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: ""});
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    if (event.target.name === "email") {
      if (!validateEmail(event.target.value)) {
        setErrorMessage("Please enter a valid email");
      } else {
        setErrorMessage("");
        setFormState({...formState, [event.target.name]: event.target.value });
      }
    }

    if (!event.target.value.length) {
      setErrorMessage(`${event.target.name} is required`);
    } else {
      setErrorMessage('');                
      setFormState({...formState, [event.target.name]: event.target.value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!errorMessage) {
      console.log("Form", formState);
    }
  }


  return(
    <div className="footer-space">
      <h1>Contact me</h1>      
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <p>Email me at <a href="mailto: noreikam1@gmail.com">noreikam1@gmail.com</a></p>
        </div>
        <div>
          <label htmlFor="name">Name:</label><br/>
          <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email address:</label><br/>
          <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="message">Message:</label><br/>
          <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Contact;