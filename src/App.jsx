import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
// import CarPlateDetection from "./pages/CarPlateDetection.jsx"
import Signup from './pages/Login'
import Login from './pages/Login.jsx'


function App() {
  const location = useLocation();
  const hideNavAndFooter = location.pathname==="/login";
  return (
    <div >
      {!hideNavAndFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path='/car-plate-detection' element={<CarPlateDetection/>}/> */}
        
      </Routes>
      {!hideNavAndFooter && <Footer />}
    </div>
  )
}

export default App
