import React from 'react'
import { Link } from 'react-router-dom'
import CountUp from 'react-countup'

const About = () => {
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
                  {/* <li><Link to="/about">ABOUT</Link></li> */}
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
    <h1 className='text-5xl'>About Us</h1>
  </section>

  <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-3xl  text-[#F0768B] mb-8">Our Impact</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Number of Customers */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl text-gray-600 mb-4">Number of Customers</h2>
            <p className="text-4xl text-[#1cba86]"><CountUp start={0} end={5000} duration={2} delay={0}/>+</p>
            <p className="text-gray-600 text-sm mt-2">Monthly Satisfied customers who trust our services.</p>
          </div>
          
          {/* Number of Tablets */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl text-gray-600 mb-4">Number of Products Available</h2>
            <p className="text-4xl text-[#1cba86]"><CountUp start={0} end={12000} duration={2} delay={0}/>+</p>
            <p className="text-gray-600 text-sm mt-2">Products delivered to customers for better health.</p>
          </div>

            {/* Total Customers  */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl text-gray-600 mb-4">Total number of Bills Gernerated till now</h2>
            <p className="text-4xl text-[#1cba86]"><CountUp start={0} end={900000} duration={2} delay={0}/>+</p>
            <p className="text-gray-600 text-sm mt-2">Customers paid the GST taxes.</p>
          </div>
        </div>
      </div>
    </div>

      
        
  
  <div className="bg-gray-50 text-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <p className="text-2xl text-[#F0768B]">
            Learn more about our story, mission, and values.
          </p>
        </div>

        {/* Company Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-2xl  text-[#1cba86]">
              Our Mission
            </h2>
            <p className="text-gray-700 text-1xl">
              Established in 1984, our pharmacy's mission is to provide top-quality
              healthcare products and services with a focus on improving the well-being
              of our community. We strive to make medication more accessible, affordable,
              and effective for everyone.
            </p>
            <p className="text-gray-700 text-1xl">
              Our vision is to bridge the gap between trusted medication and compassionate
              healthcare by offering expert advice, pharmaceutical care, and high-quality
              over-the-counter products.
            </p>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-2xl  text-[#1cba86]">
              Founder: Mr.Prabhakar Mailapur
            </h2>
            <p className="text-gray-700 text-1xl">
              Mr. Prabhakar Mailapur, the founder of our pharmacy, is a licensed pharmacist with over
              15 years of experience in the healthcare industry. He holds a Diploma in Pharmacy. 
              He started this pharmacy with the goal of making high-quality medication and health products 
              available to those who need them the most, while providing personalized and professional care.
            </p>
            <p className="text-gray-700 text-1xl">
              Mr. Mailapur is deeply committed to community health and works closely with local
              health organizations to ensure that everyone has access to the medications they
              need for a healthier life.
            </p>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl  text-[#1cba86]">
            Our Journey
          </h2>
          <ul className="mt-6 space-y-4">
            <li className="flex items-center space-x-4">
              <span className="text-[#1cba86] text-2xl">2010</span>
              <p className="text-gray-700 text-1xl">Founded by Mr. with a vision to make healthcare accessible to all.</p>
            </li>
            <li className="flex items-center space-x-4">
              <span className="text-[#1cba86] text-2xl">2013</span>
              <p className="text-gray-700 text-1xl">Expanded services to include online prescriptions and consultations.</p>
            </li>
            <li className="flex items-center space-x-4">
              <span className="text-[#1cba86] text-2xl">2018</span>
              <p className="text-gray-700 text-1xl">Opened a second location to cater to growing customer demand.</p>
            </li>
            <li className="flex items-center space-x-4">
              <span className="text-[#1cba86] text-2xl">2025</span>
              <p className="text-gray-700 text-1xl">Continued expansion with new services like home delivery of medications.</p>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="space-y-6">
            <h2 className="text-2xl  text-[#1cba86]">
              Our Services
            </h2>
            <p className="text-gray-700 text-1xl">
              Established in 2010, our pharmacy’s mission is to provide top-quality
              healthcare products and services with a focus on improving the well-being
              of our community. We strive to make medication more accessible, affordable,
              and effective for everyone.
            </p>
            <p className="text-gray-700 text-1xl">
              Our vision is to bridge the gap between trusted medication and compassionate
              healthcare by offering expert advice, pharmaceutical care, and high-quality
              over-the-counter products.
            </p>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-2xl  text-[#1cba86]">
              Charities
            </h2>
            <p className="text-gray-700 text-1xl">
              Dr. John Doe, the founder of our pharmacy, is a licensed pharmacist with over
              15 years of experience in the healthcare industry. He started this pharmacy
              with the goal of making high-quality medication and health products available
              to those who need them the most, while providing personalized and professional care.
            </p>
            <p className="text-gray-700 text-1xl">
              Dr. Doe is deeply committed to community health and works closely with local
              health organizations to ensure that everyone has access to the medications they
              need for a healthier life.
            </p>
          </div>
        </div>

      </div>
      {/* Our Services  */}
      

    </div>
</div>


 
</div>
  )
}

export default About
