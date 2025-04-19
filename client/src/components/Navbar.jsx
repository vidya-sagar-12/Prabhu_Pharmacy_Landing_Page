import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { AppContent } from '../context/AppContext'

const Navbar = () => {

    const navigate = useNavigate();
    const {userData} = useContext(AppContent);

  return (
    <div className='w-full flex justify-between items-center p-4 sm:p-6 sm:px-50 top-0'>
      <a href='/'><img src="assets/images/logo.png" alt="" className='w-28 sm:w-32'/></a>
      <h1 className='flex items-center gap-2 text-xl sm:text-4xl font-medium mb-2 '>W E L C O M E - {userData ? userData.name.toUpperCase() : " "}!
        </h1>
        
        {userData ? 
        <div>
            
        </div>
        :   <button onClick={()=>navigate('/login')} className='flex items-center gap-2 border border-gray-500 rounded-full px-6 py-2 text-gray-800 hover:bg-green-400 transition-all'>
        Login<img src={assets.arrow_icon} alt=""/></button>
    }
      
    </div>
  )
}

export default Navbar
