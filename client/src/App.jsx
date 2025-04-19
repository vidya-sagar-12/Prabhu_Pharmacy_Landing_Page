import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import EmailVerify from './pages/EmailVerify'
import ResetPassword from './pages/ResetPassword'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import About from './pages/About'
import HC from './pages/HC'
import HV from './pages/HV'
import C19 from './pages/C19'
import Cancer from './pages/Cancer'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'



const App = () => {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/email-verify' element={<EmailVerify/>}/>
        <Route path='/reset-password' element={<ResetPassword/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/health-corner' element={<HC/>}/>
        <Route path='/health-videos' element={<HV/>}/>
        <Route path='/covid-19' element={<C19/>}/>
        <Route path='/cancer' element={<Cancer/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
      </Routes>
    </div>
  )
}
export default App;
