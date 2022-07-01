import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import List from './Containers/List/List'
import Contact from "./Containers/Contact/Contact"
import Home from './Containers/Home/Home'
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import Register from "./Containers/Register/Register"

function App() {

  return (
    <div className="App">
      <BrowserRouter>
            <Header/>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/movies" element={<List/>}/>
                  <Route path="/register" element={<Register/>}/>
                  <Route path="/contact" element={<Contact/>}/>
              </Routes>
            <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
