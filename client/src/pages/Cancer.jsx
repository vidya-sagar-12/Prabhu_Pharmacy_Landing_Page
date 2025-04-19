import React from 'react'
import { Link } from 'react-router-dom'

const Cancer = () => {
  return (
    <div>
      <section className="cancer">
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
  <h1>All About Cancers</h1>
</section>
<main>
 <div class="container0">
      <section class="section3">
        <h2>What is Cancer?</h2>
        <img src="assets/images/can.jpg" alt="What is Cancer" class="section-image2"/>
        <p>Cancer is a broad term for a large group of diseases that occur when abnormal cells divide without control. These cells can invade nearby tissues and spread to other parts of the body. There are many types of cancer, but they all begin when normal cells start to grow uncontrollably.</p>
      </section>

      <section class="section3">
        <h2>Common Types of Cancer</h2>
        <img src="assets/images/type.png" alt="Common Types of Cancer" class="section-image2"/>
        <ul>
          <li><strong>Breast Cancer</strong> – Cancer that forms in the cells of the breasts.</li>
          <li><strong>Lung Cancer</strong> – Cancer that begins in the lungs, often linked to smoking.</li>
          <li><strong>Prostate Cancer</strong> – Cancer that affects the prostate gland in men.</li>
          <li><strong>Skin Cancer</strong> – Cancer that develops in the skin cells, often caused by excessive sun exposure.</li>
          <li><strong>Leukemia</strong> – Cancer of the blood-forming tissues, often affecting the bone marrow and blood.</li>
        </ul>
      </section>

      <section class="section3">
        <h2>Symptoms of Cancer</h2>
        <img src="assets/images/cer.png" alt="Cancer Symptoms" class="section-image2"/>
        <p>The symptoms of cancer vary depending on the type and location of the cancer, but common signs include:</p>
        <ul>
          <li>Unexplained weight loss</li>
          <li>Fatigue and weakness</li>
          <li>Pain that doesn't go away</li>
          <li>Changes in the skin, such as yellowing, darkening, or redness</li>
          <li>Changes in bowel or bladder habits</li>
          <li>Lumps or unusual growths</li>
        </ul>
      </section>

      <section class="section3">
        <h2>Prevention of Cancer</h2>
        <img src="assets/images/pre.jpg"  alt="Cancer Prevention" class="section-image2"/>
        <p>While not all cancers can be prevented, there are several lifestyle changes that can reduce the risk of developing cancer:</p>
        <ul>
          <li>Avoid tobacco and limit alcohol consumption.</li>
          <li>Eat a healthy diet rich in fruits, vegetables, and whole grains.</li>
          <li>Exercise regularly to maintain a healthy weight.</li>
          <li>Protect your skin from excessive sun exposure by wearing sunscreen and protective clothing.</li>
          <li>Get regular screenings, especially for high-risk cancers such as breast, colon, and prostate cancers.</li>
        </ul>
      </section>

      <section class="section3">
        <h2>Treatment Options for Cancer</h2>
        <img src="assets/images/tret.png" alt="Cancer Treatment" class="section-image2"/>
        <p>Cancer treatment depends on the type, location, and stage of cancer, as well as the patient's overall health. Common treatments include:</p>
        <ul>
          <li><strong>Surgery</strong> – Removing the tumor or cancerous tissue from the body.</li>
          <li><strong>Radiation therapy</strong> – Using high-energy radiation to kill or shrink cancer cells.</li>
          <li><strong>Chemotherapy</strong> – Using drugs to kill cancer cells or stop them from growing.</li>
          <li><strong>Immunotherapy</strong> – Using the body’s immune system to fight cancer.</li>
          <li><strong>Targeted therapy</strong> – Targeting specific genes or proteins that contribute to cancer growth.</li>
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
    </main>

    </div>
  )
}

export default Cancer
