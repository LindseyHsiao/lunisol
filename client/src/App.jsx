import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Story from './pages/Story'


function App() {

  return(
    <>
    <Header/>
    <Home/>
    <Shop />
    <Story />
    <Footer />
    </>
  )


  // return (
  //   <BrowserRouter>
  //     <Header />
  //     <Routes>

  //       <Route path="/" element={Home}/>
  //     </Routes>
  //   </BrowserRouter>
  // )
}

export default App
