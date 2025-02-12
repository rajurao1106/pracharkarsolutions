import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './pages/About'
import UnderConstruction from './components/UnderConstruction'

export default function App() {
  return (
    <div>
      <Router>
        {/* <Navbar/> */}
        <Routes>
          <Route path='/' element={<UnderConstruction/>}/>
          {/* <Route path='/about' element={<About/>}/> */}
        </Routes>
        {/* <Footer/> */}
      </Router>
    </div>
  )
}
