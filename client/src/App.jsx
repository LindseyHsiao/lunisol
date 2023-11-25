import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Story from './pages/Story'
import Contact from './pages/Contact'
import OurValues from './pages/OurValues'


function App() {

  // return(
  //   <>
  //   <Header/>
  //   <Home/>
  //   <Shop />
  //   <Story />
  //   <Footer />
  //   </>
  // )


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/shop" element={<Shop />}/>
        <Route path="/story" element={<Story />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/ourvalues" element={<OurValues />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
