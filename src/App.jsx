
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Header from './assets/components/Header'
// import { Route, Routes } from 'react-router-dom'
import About from './assets/components/About'
import Home from './assets/components/Home'
import Features from './assets/components/Features'
import Reviews from './assets/components/Reviews'
import Contact from './assets/components/Contact'
import Screenshots from './assets/components/Screens'
import Explore from './assets/components/Explore'




export default function App() {
  return (
    <>
      {/* <Routes>
      <Route path="/" element={<Header />} />
      <Route path='/about' element={<About/>}/>
    </Routes> */}
      <Header />
      <Home />
      <About />
      <Features/>
      <Screenshots/>
      <Explore/>
      <Reviews/>
      <Contact/>
    </>
  )
}


