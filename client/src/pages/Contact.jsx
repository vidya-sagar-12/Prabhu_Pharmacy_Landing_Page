import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const Contact = () => {

  const [values, setValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: '' 
  })

  const handlerSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "5aaf473a-3ca0-404f-85c2-fc1d360ecc9a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message Sent Successfully!",
        icon: "success"
      });
    }
  };

  return (
    <div>
   <div>
  <section className="sub-header">
    <nav>
    <a href='/'><img src="assets/images/logo.png" alt="" className='w-28 sm:w-32'/></a>
      <div className="nav-links" id="navLinks">  
        <i className="fa fa-close" onclick="hideMenu()" />
        <ul className="list">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          {/* <li><Link to="/gallery">GALLERY</Link></li> */}
          <li><Link to="/health-corner">HEALTH CORNER</Link>
                      <ul className="dropdown">
                        <li><Link to="/health-corner">HEALTH ARTICLES</Link></li>
                        <li><Link to="/health-videos">HEALTH VIDEOS</Link></li>
                        <li><Link to="/covid-19">COVID-19 AWARENESS</Link></li>
                        <li><Link to="/cancer">ABOUT CANCERS</Link></li>
                
            </ul>
          </li>
          {/* <li><Link to="/contact"></Link>CONTACT</li> */}
          
        </ul>
      </div>
      <i className="fa fa-bars" onclick="showMenu()" />
    </nav>
    <h1>Contact Us</h1>
  </section>
  {/*----- Contact Us -----*/}
  <section className="location">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.2332269267!2d77.51586801488016!3d17.903475232014284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcec6e01d171f9d%3A0xcfbc3974682835fe!2sPrabhu%20Pharmacy!5e0!3m2!1sen!2sin!4v1732791681463!5m2!1sen!2sin" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
  </section>
  <section className="contact-us">
    <div className="row">
      <div className="contact-col">
        <div>
          <i className="fa fa-home" />
          <span>
            <h5>Mailoor Cross, Beside Hari Dosa Center</h5>
            <p>Bidar, Karnataka, India</p>
          </span>
        </div>
        <div>
          <i className="fa fa-phone" />
          <span>
            <h5> 088800 99962</h5>
            <p>All the day 7:30 Am to 12:00 Pm</p>
          </span>
        </div>
        <div>
          <i className="fa fa-envelope-o" />
          <span>
            <h5>prabhupharmacy77@gmail.com</h5>
            <p>Email us your query</p>
          </span>
        </div>
      </div>
      <div className="contact-col">
        <form onSubmit={handlerSubmit}>
          <label htmlFor="name">Full Name</label>
          <input type="text" name="name" placeholder="Enter your name" onChange={(e) => handleChanges(e)} required/>

          <label htmlFor="email">Email Id</label>
          <input type="email" name="email" placeholder="Enter email address" onChange={(e) => handleChanges(e)} required />

          <label htmlFor="subject">Subject</label>
          <input type="text" name="subject" placeholder="Enter your subject" onChange={(e) => handleChanges(e)} required />

          <label htmlFor="message">Description</label>
          <textarea rows={8} name="message" placeholder="Message" onChange={(e) => handleChanges(e)} required defaultValue={""} />
          <button type="submit" className="hero-btn red-btn">Send Message</button>
        </form> 
      </div>
    </div>
  </section>
  {/*------ footer --------*/}
  <section className="footer">
    <h4>About Us</h4>
    <p>We provide Ayurvedic cough medicine wholesaler providing pharmaceutical distribution<br/>
    services with expertise in generic and allopathic medicines.</p>
    <div className="icons">
      <i className="fa fa-facebook" />
      <i className="fa fa-twitter" />
      <a href="https://www.instagram.com/prabhupharmacybidar?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><i className="fa fa-instagram" /></a>
      <i className="fa fa-linkedin" />
    </div>
    <p>made with <i className="fa fa-heart-o" /> by Trimurti's</p>
    <p className="dev">Contact Developers <br /> <a href="https://chat.whatsapp.com/G7UpL0CO5l40k2gSdq1fSz"><i className="fa fa-whatsapp" /></a><a href="assets/https://t.me/trimurtiswebdeveloperz"><i className="fa fa-telegram" /></a> </p>
  </section>
</div>

    </div>
  )
}

export default Contact
