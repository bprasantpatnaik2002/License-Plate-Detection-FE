import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'


function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/video' element={<VideoPlayer />} />
        
      </Routes>
      <Footer />
    </div>
  )
}

export default App
