import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContent } from '../context/AppContext'
import Navbar from '../components/Navbar'
import { toast } from 'react-toastify'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Home = () => {

    const {userData, backendUrl, setUserData, setIsLoggedin} = useContext(AppContent)
    const navigate = useNavigate()

    const  sendVerificationOtp = async()=>{
      try {
        axios.defaults.withCredentials = true

        const {data} = await axios.post(backendUrl + '/api/auth/send-verify-otp')

        if(data.success){
          navigate('/email-verify')
          toast.success(data.message)
        }else{
          toast.error(data.message)
        }

      } catch (error) {
        toast.error(error.message)
      }
    }
    
    const logout = async()=>{
      try {
        axios.defaults.withCredentials = true
        const {data} = await axios.post(backendUrl + '/api/auth/logout')
        data.success && setIsLoggedin(false)
        data.success && setUserData(false)
        navigate('/')

      } catch (error) {
        toast.error(error.message)
      }
    }


  return (
   <div >
    <Navbar />
  {/* <div id="preloader" /> */}
  <section className="header">
    <nav className="nav-bar">
      {/* <a href="/"><img src="assets/images/logo.png" /></a> */}
      {/* <div className="inputBox_container">
        <svg className="search_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" alt="search icon">
          <path d="M46.599 46.599a4.498 4.498 0 0 1-6.363 0l-7.941-7.941C29.028 40.749 25.167 42 21 42 9.402 42 0 32.598 0 21S9.402 0 21 0s21 9.402 21 21c0 4.167-1.251 8.028-3.342 11.295l7.941 7.941a4.498 4.498 0 0 1 0 6.363zM21 6C12.717 6 6 12.714 6 21s6.717 15 15 15c8.286 0 15-6.714 15-15S29.286 6 21 6z">
          </path>
        </svg>
        <input className="inputBox" id="inputBox" type="text" placeholder="Search For Products" />
      </div> */}
      <div className="nav-links" id="navLinks">  
        <i className="fa fa-close" onclick="hideMenu()" />
        <ul className="list">
          {/* <li><Link to="/"></Link>HOME</li> */}
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
      {userData ? <div className='-mr-10 w-10 h-10 flex justify-center items-center rounded-full bg-black text-white relative group cursor-pointer transition-all'>
            {userData.name[0].toUpperCase()}
            <div className='p:left absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-20'>
                <ul className='list-none m-0 p-2 bg-gray-100 text-bg'>
                    <li  className='py-1 px-2 hover:bg-gray-200 cursor-pointer pr-20'>Profile</li>
                    {!userData.isAccountVerified && 
                    <li onClick={sendVerificationOtp} className='py-1 px-2 hover:bg-gray-200 cursor-pointer'>Verify Email</li>}
                    <li onClick={logout} className='py-1 px-2 hover:bg-gray-200 cursor-pointer pr-20'>Logout</li>
                </ul>
            </div>
        </div>
            : <button onClick={()=>navigate('/login')} className='buttons'>Sign up</button>}
    </nav>
    
    <div className="text-box">
      <h1>PRABHU PHARMACY BIDAR</h1>
      <h2>Trust Built Over Generations</h2>
      <p>Believe That The Greatest gift you can give to your family and the world is <b style={{color: 'rgb(245, 118, 139)'}}>"THE HEALTHY YOU"</b></p>
      <a href="/contact" className="hero-btn">Visit Us to Know More</a>
    </div>
  </section>
  {/*-------- course ---------*/}
  <section className="course">
    <h1>Healthcare Categories We Offer</h1>
    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    <div className="row">
      <div className="course-col">
        <h3>Allopathic</h3>
        <p>Allopathic medicine, also known as allopathy, is a term used to describe modern or mainstream medicine.t is a system of medical practice that emphasizes diagnosing and treating disease using conventional.</p>
      </div>
      <div className="course-col">
        <h3>Ayurvedic</h3>
        <p>Ayurvedic medicine is a traditional Indian system of healthcare that dates back over 3,000 years. It is based on the concept of “tridosa” or the three fundamental energies (Vata, Pitta, and Kapha) that govern the human body and mind.</p>
      </div>
      <div className="course-col">
        <h3>Homeopathic</h3>
        <p>Homeopathy is a medical system that was developed in Germany more than 200 years ago. It is based on two unconventional theories.Homeopathic remedies are made from natural substances.</p>
      </div>
    </div>
  </section>
  {/*-------- campus --------*/}
  <section className="campus">
    <h1>Our Branches</h1>
    <div className="row">
      <div className="campus-col">
        <img src="assets/images/pbidar.jpg" />
        <div className="layer">
          <h3>BIDAR</h3>
        </div>
      </div>
      <div className="campus-col">
        <img src="assets/images/pbhalki.jpg" />
        <div className="layer">
          <h3>BHALKI</h3>
        </div>
      </div>
      <div className="campus-col">
        <img src="assets/images/washington.png" />
        <div className="layer">
          <h3>HUMNABAD</h3>
        </div>
      </div>
    </div>
  </section>
  {/*-------- Facilities --------*/}
  <section className="facility">
    <h1>Branches in Bidar</h1>
    <div className="row">
      <a href="https://maps.app.goo.gl/z3dQ9FBUSp2g33UQ8" className="facility-col"><div>
          <i className="fa-solid fa-home" style={{color: '#f0768b', fontSize: 23}} /><br /><br />
          <h3>Bidar</h3>
          <p>SH 122, Beside Hari Dosa <br />Family Restuarant, <br />Vidynagar, Mailoor Cross, <br />Bidar, Karnataka - 585401</p>
        </div></a>
      <a href="https://maps.app.goo.gl/ArGrC5AdTAZpJ7LcA?g_st=aw" className="facility-col"><div>
          <i className="fa-solid fa-home" style={{color: '#f0768b', fontSize: 23}} /><br /><br />
          <h3>Bidar</h3>
          <p>Government Hospital, <br />Khadi Bhandar Complex, <br />Opposite to Udgir Road,<br /> Bidar, Karnataka - 585401</p>
        </div></a>
      <a href="https://maps.app.goo.gl/NSq4FzvrhvZCsEd46?g_st=aw" className="facility-col"><div>
          <i className="fa-solid fa-home" style={{color: '#f0768b', fontSize: 23}} /><br /><br />
          <h3>Bidar</h3>
          <p>Prabhu Medical, <br />Shastrinagar, Mailoor Road,<br /> Near By Bilal Masjid, Mailoor Bidar, <br />Bidar, Karnataka - 585403</p>
        </div></a>
    </div>
  </section>
  {/*-------- testimonials --------*/}
  <section className="testimonials">
    <h1>What Our Customer Says</h1>
    <div className="row">
      <div className="testimonial-col">
        <img src="assets/images/user1.png" />
        <div className="star"> 
          <p>Professional staff and polite in nature. Got few rare medicines from here. Expectations can be kept high. Overall a 5-star rating place.</p>
          <h3>Dineshsingh Souda</h3>
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
        </div>
      </div>
      <div className="testimonial-col">
        <img src="assets/images/user2.png" />
        <div className="star">
          <p>This pharmacy huge  you can find all type of medicine and skin care products here. yesterday I have travelled more then 10 pharmacy for my medicine but I can't find anywhere today I finally found right pharmacy and I got my medicines 😌
          </p>
          <h3>Anil Jadhav</h3>
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
        </div>
      </div>
    </div>
  </section>
  {/*---- Call To Action ----*/}
  <section className="cta">
    <h1>Laughter is the Best Medicine, but <br />We've Got the Second Best</h1>
    <a href="https://www.instagram.com/prabhupharmacybidar?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="hero-btn">CONTACT US</a>
  </section>    
  {/*------ footer --------*/}
  <section className="footer">
    <h4>About Us</h4>
    <p> We provide Ayurvedic cough medicine wholesaler providing pharmaceutical distribution <br />services with expertise in generic and allopathic medicines.</p>
    <div className="icons">
      <a href="assets/#"><i className="fa fa-facebook" /></a>
      <a href="#"><i className="fa fa-twitter" /></a>
      <a href="https://www.instagram.com/prabhupharmacybidar?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><i className="fa fa-instagram" /></a>
      <a href="#"><i className="fa fa-linkedin" /></a>
    </div>
    <a className="footer-link"><p>made with <i className="fa fa-heart-o" /> by Trimurti's</p></a>
    <p className="dev">Contact Developers <br /> <a href="https://chat.whatsapp.com/G7UpL0CO5l40k2gSdq1fSz"><i className="fa fa-whatsapp" /></a><a href="assets/https://t.me/trimurtiswebdeveloperz"><i className="fa fa-telegram" /></a> </p>
  </section>
</div>
  
  
  )
}
  

export default Home


