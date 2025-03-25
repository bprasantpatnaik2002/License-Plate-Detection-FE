import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
<<<<<<< HEAD
// import CarPlateDetection from "./pages/CarPlateDetection.jsx"
import Signup from './pages/Login'
import Login from './pages/Login.jsx'
=======
import Signup from './pages/Login'
import Login from './pages/Login'
>>>>>>> 49aeb7ffafc5f38afb71e2dfbf1d0dc9bb682180


function App() {
  const location = useLocation();
<<<<<<< HEAD
  const hideNavAndFooter = location.pathname==="/login";
=======
  const hideNavAndFooter = location.pathname === "/login";
>>>>>>> 49aeb7ffafc5f38afb71e2dfbf1d0dc9bb682180
  return (
    <div >
      {!hideNavAndFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
<<<<<<< HEAD
        <Route path="/login" element={<Login/>} />
        
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path='/car-plate-detection' element={<CarPlateDetection/>}/> */}
        
=======
        <Route path="/login" element={<Login Signup />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

>>>>>>> 49aeb7ffafc5f38afb71e2dfbf1d0dc9bb682180
      </Routes>
      {!hideNavAndFooter && <Footer />}
    </div>
  )
}

export default App