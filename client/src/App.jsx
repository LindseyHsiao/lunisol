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
import Cart from './pages/Cart'
import ProductEntryForm from './pages/ProductEntryForm'
import Success from './pages/Success'
import Checkout from './pages/Checkout'

import { Provider , useSelector} from 'react-redux'
import store from './utils/store'
import { useState, useEffect } from 'react'
// import SpatulaApp from './pages/SpatulaApp'



function App() {

const [totalQuant, setTotalQuant] = useState(0)



  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header totalQuant={totalQuant} setTotalQuant={setTotalQuant} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/story" element={<Story />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ourvalues" element={<OurValues />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<Cart totalQuant={totalQuant} setTotalQuant={setTotalQuant}  />} />
          <Route path="/productentryform" element={<ProductEntryForm />} />
          <Route path="/success" element={<Success />} />
          <Route path="/checkout" element={<Checkout />} />
          {/* <Route path="/SpatulaApp" element={<SpatulaApp />} /> */}

        </Routes>
        <Footer />
      </Provider>
    </BrowserRouter>
  )
}

export default App
