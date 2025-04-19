import React from 'react'
import { Link } from 'react-router-dom'

const HV = () => {
  return (
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
          <li><Link to="/contact">CONTACT</Link></li>
          
        </ul>
    </div>

    
    <i className="fa fa-bars" onclick="showMenu()" />
  </nav>
  <h1 className='text-4xl text-[#1cba86]'>Health Videos</h1>
 </section>
 
<section class="HV">
<a href="https://medlineplus.gov/ency/videos/mov/200079_eng.mp4" ><div class="card"> <p class="text-above">BLOOD PRESSURE</p><img src="assets/images/BP.jpeg" alt="" class='img'/></div></a>
<a href="https://medlineplus.gov/ency/videos/mov/200031_eng.mp4"><div class="card"><p class="text-above">KIDNEY STONES</p><img src="assets/images/kidney.jpg" alt="" class='img'/></div></a>
<a href="https://medlineplus.gov/ency/videos/mov/200081_eng.mp4"><div class="card"><p class="text-above">Cardiovascular System</p><img src="assets/images/heart.jpg" alt="" class='img'/></div></a>
<a href="https://medlineplus.gov/ency/videos/mov/200094_eng.mp4"><div class="card"><p class="text-above">ALLERGIES</p><img src="assets/images/allergy.jpg" alt="" class='img'/></div></a>
<a href="https://medlineplus.gov/ency/videos/mov/200095_eng.mp4"><div class="card"><p class="text-above">IMMUNE RESPONSE</p><img src="assets/images/immune.jpg" alt="" class='img'/></div></a>
<a href="https://medlineplus.gov/ency/videos/mov/200044_eng.mp4"><div class="card"><p class="text-above">LARYNX CANCER</p><img src="assets/images/cancer.jpg" alt="" class='img'/></div></a>
<a href="https://medlineplus.gov/ency/videos/mov/200071_eng.mp4"><div class="card"><p class="text-above">STROKE</p><img src="assets/images/stroke.jpeg" alt="" class='img'/></div></a>
<a href="https://medlineplus.gov/ency/videos/mov/200101_eng.mp4"><div class="card"><p class="text-above">SWEATING</p><img src="assets/images/s.jpg" alt="" class='img'/></div></a>
<a href="https://medlineplus.gov/ency/videos/mov/200100_eng.mp4"><div class="card"><p class="text-above">SUNLIGHT EFFECT ON SKIN</p><img src="assets/images/sun.jpeg" alt="" class='img'/></div></a>
<a href="https://medlineplus.gov/ency/videos/mov/200021_eng.mp4"><div class="card"><p class="text-above">COUGHING</p><img src="assets/images/cough.jpg" alt="" class='img'/></div></a>
<a href="https://medlineplus.gov/ency/videos/mov/200011_eng.mp4"><div class="card"><p class="text-above">NERVE CONDUCTION</p><img src="assets/images/nerve.jpg" alt="" class='img'/></div></a>

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
    

    
  )
}

export default HV
