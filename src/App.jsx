import { BrowserRouter,Routes ,Route } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Body from './components/Body'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import AboutUs from './components/AboutUs'

function App() {

  return (
    <>
    <BrowserRouter basename='/'>
    <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Body></Body>}>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/aboutus' element={<AboutUs></AboutUs>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>

        </Route>

      </Routes>
      <Footer></Footer>
    </BrowserRouter>
      

    </>
  )
}

export default App
