import React from 'react'
import { Link } from 'react-router-dom'

const blogPosts = [
  {
    title: 'What is mental health?',
    date: 'January 15, 2025',
    excerpt: 'Mental health is about how people think, feel, and behave Mental health care...',
    img: 'assets/images/mental.jpg',
    link: 'https://www.medicalnewstoday.com/articles/154543',
  },
  {
    title: 'What to know about exercise ?',
    date: 'January 20, 2025',
    excerpt: 'Exercise involves physical activity and increasing the heart rate beyond rest...',
    img: 'assets/images/excercise.jpg',
    link: 'https://www.medicalnewstoday.com/articles/153390',
  },
  {
    title: 'What are the benefits of eating healthy?',
    date: 'January 25, 2025',
    excerpt: 'Following a healthy diet has many benefits, including building strong bones, p...',
    img: 'assets/images/food.jpg',
    link: 'https://www.medicalnewstoday.com/articles/322268',
  },
];

const HC = () => {
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
          <li><Link to="/contact">CONTACT</Link></li>
          
        </ul>
      </div>
      <i className="fa fa-bars" onclick="showMenu()" />
    </nav>
    <h1 className='text-4xl text-[#1cba86]'>Health Articles</h1>
  </section>
  {/*-------- Blog Page Content --------*/}
 <section>
 <div className="App">
      <header className="header-health">
        <nav className='nav-11'>
          <ul className="nav-links-11">
            <li><a href="#home">Mental Health</a></li>
            <li><a href="#about">Sleep Health</a></li>
            <li><a href="#contact">Food Health</a></li>
            <li><a href="#contact">Eye Health</a></li>
            <li><a href="#contact">Sexual Health</a></li>
          </ul>
        </nav>
      </header>

      <main className="main-content">
        <h1 className="page-title">Articles!</h1>
        <div className="blog-posts">
          {blogPosts.map((post, index) => (
            <div key={index} className="blog-post">
              <img src={post.img} alt={post.title} className="h-a" />
              <h2 className="post-title">{post.title}</h2>
              <p className="post-date">{post.date}</p>
              <p className="post-excerpt">{post.excerpt}</p>
              <a href={post.link}><button className="read-more-btn">Read More</button></a>
            </div>
          ))}
        </div>
      </main>
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

export default HC
