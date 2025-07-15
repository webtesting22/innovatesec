import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeComponents from './Components/HomeComponents/HomeComponents'
import Navbar from './Components/Navigation/Navbar'
import OurStory from './Components/OurStory/OurStory'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomeComponents />} />
          <Route path='/our-story' element={<OurStory />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
