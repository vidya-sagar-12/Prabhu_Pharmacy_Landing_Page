import React from 'react'
import { Link } from 'react-router-dom'

const C19 = () => {
  return (
    <div>
      <section className="covid">
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
          <li><Link to="/contact">CONTACT</Link></li>
          
        </ul>
    </div>
    <i className="fa fa-bars" onclick="showMenu()" />
  </nav>
  <h1>Covid-19 Awareness</h1>
</section>
<section>
<div class="container1">
      <section class="section1">
        <h2>What is COVID-19?</h2>
      <a href="https://youtu.be/sHP0UIdZyI4">  <img src="assets/images/vaccine.jpg"  alt="COVID-19 Virus" class="section-image1"/></a>
        <p>COVID-19 is a disease caused by the coronavirus, SARS-CoV-2. It primarily spreads through respiratory droplets when an infected person coughs, sneezes, or talks.</p>
      </section>

      <section class="section1">
        <h2>Symptoms of COVID-19</h2>
     <a href="https://youtu.be/OTrzXPTM0IE">   <img src="assets/images/symtoms.jpg"  alt="COVID-19 Symptoms" class="section-image1"/></a>
        <ul>
          <li>Fever or chills</li>
          <li>Cough</li>
          <li>Shortness of breath or difficulty breathing</li>
          <li>Fatigue</li>
          <li>Loss of taste or smell</li>
          <li>Muscle or body aches</li>
          <li>Sore throat</li>
        </ul>
      </section>

      <section class="section1">
        <h2>Preventive Measures</h2>
       <a href="https://youtu.be/xmYMUly7qiE"> <img src="assets/images/prevention.jpg"  alt="Preventive Measures" class="section-image1"/></a>
        <p>To help prevent the spread of COVID-19, please follow these guidelines:</p>
        <ul>
          <li>Wear a mask in crowded or indoor places.</li>
          <li>Wash your hands frequently with soap and water for at least 20 seconds.</li>
          <li>Maintain physical distance of at least 6 feet from others.</li>
          <li>Avoid large gatherings and stay at home if you feel unwell.</li>
          <li>Disinfect frequently touched surfaces regularly.</li>
        </ul>
      </section>

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
  
</section>

    </div>
    
  )
}

export default C19
