import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Story from './pages/Story'
import Contact from './pages/Contact'
import OurValues from './pages/OurValues'
import SingleProduct from './pages/SingleProduct'
import Login from './pages/Login'
import SignUp from './pages/SignUp'


function App() {


  return (
    <BrowserRouter>
      <Header />
     
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/shop" element={<Shop />}/>
        <Route path="/story" element={<Story />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/ourvalues" element={<OurValues />}/>
        <Route path="/singleproduct" element={<SingleProduct />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
