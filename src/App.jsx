import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Body from './components/Body'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import AboutUs from './components/AboutUs'
import Process from './components/Process'
import Shipping from './components/Shipping'
import BackToTop from './components/BackToTop'
import CustomizationForm from './components/CustomizationForm'
import CustomizeBtn from './components/CustomizeBtn'
import ScrollToTop from './components/ScrollToTop'
import Customize from './components/Customize'

function App() {

  return (
    <>
      <BrowserRouter basename='/'>
        <ScrollToTop></ScrollToTop>
        <Navbar></Navbar>
        <BackToTop></BackToTop>
        <CustomizeBtn show={true}></CustomizeBtn>
        <Routes>
          <Route path='/' element={<Body></Body>}>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/aboutus' element={<AboutUs></AboutUs>}></Route>
            <Route path='/process' element={<Process></Process>}></Route>
            <Route path='/contact' element={<Contact></Contact>}></Route>
            <Route path='/customization' element={<Customize></Customize>}></Route>
            <Route path='/shipping' element={<Shipping></Shipping>}></Route>

          </Route>

        </Routes>
        <Footer></Footer>
      </BrowserRouter>


    </>
  )
}

export default App
