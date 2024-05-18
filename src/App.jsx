import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero.jsx'
import About from './components/About/about.jsx'
import Servises from './components/Services/Services.jsx'
// import MyWork from './components/MyWork/MyWork.jsx'

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Hero /> */}
      <About />
      <Servises />
      {/* <MyWork /> */}
    </div>
  )
}

export default App