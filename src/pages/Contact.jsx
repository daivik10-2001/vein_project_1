import React from 'react'
import './Contact.css'
import msgicon from '../assets/msg-icon.png'
import mailicon from '../assets/mail-icon.png'
import phoneicon from '../assets/phone-icon.png'
import locationicon from '../assets/location-icon.png'
import whitearrow from '../assets/white-arrow.png'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d53e3e1e-2568-4a8b-998b-57f045dd7475");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact-container'>
      <div className="contact">
        <div className="contact-col">
          <h3> send us a message <img src={msgicon} alt="" />
          </h3>
          <p>We welcome all inquiries, support requests, and collaboration opportunities. Please feel free to contact our team for any assistance or information. We are committed to providing prompt and professional responses to ensure your experience with us is seamless and efficient.</p>
          <ul>
            <li><img src={locationicon} alt="" /> Address: 421 422 | Floor 15 Cross Vp

Nagar, 1 Block Begur Bangalore South., Bangalore, Karnataka, India-560068</li>
            <li><img src={phoneicon} alt="" /> Phone: +91-7502993339</li>
            <li> <img src={mailicon} alt="" /> Email: Veinautomated@gmail.com</li>
          </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit} >
            <label>Your name</label>
            <input type="text" name='name' placeholder='Enter your name' required />
            <label>Your email</label>
            <input type="email" name='email' placeholder='Enter your email address' required />
            <label>write your messages </label>
            <textarea rows="6" name='message' placeholder='Enter your message' required />
            <button type='submit' className='btn3 dark-btn'>Send Message </button>

          </form>
          <span >{result} </span>
        </div>
      </div>
    </div>
  )
}

export default Contact
