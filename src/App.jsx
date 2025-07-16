import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { notification } from 'antd'
import HomeComponents from './Components/HomeComponents/HomeComponents'
import Navbar from './Components/Navigation/Navbar'
import OurStory from './Components/OurStory/OurStory'
import { useGlobalAnimation } from './utils/useGlobalAnimation'
import About from './Components/AboutUs/About'
import NewsLetters from './Components/NewsLetter/NewsLetters'
import Footer from './Components/Footer/Footer'
import Services from './Components/Services/Services'
function App() {
  const [count, setCount] = useState(0)

  // Initialize global animations
  useGlobalAnimation()

  // Configure Ant Design notification
  const [api, contextHolder] = notification.useNotification();

  return (
    <>
      {contextHolder}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomeComponents />} />
          <Route path='/our-story' element={<OurStory />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/services' element={<Services />} />
        </Routes>
        <NewsLetters />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;
