import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeComponents from './Components/HomeComponents/HomeComponents'
import Navbar from './Components/Navigation/Navbar'
import OurStory from './Components/OurStory/OurStory'
import { useGlobalAnimation } from './utils/useGlobalAnimation'
import About from './Components/AboutUs/About'
function App() {
  const [count, setCount] = useState(0)

  // Initialize global animations
  useGlobalAnimation()

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomeComponents />} />
          <Route path='/our-story' element={<OurStory />} />
          <Route path='/about-us' element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
