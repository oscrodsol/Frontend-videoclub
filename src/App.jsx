import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import List from './Containers/List/List'
import Genero from "./Containers/Genero/Genero"
import Home from './Containers/Home/Home'
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import Register from "./Containers/User/Register/Register"
import Login from "./Containers/User/Login/Login"
import Profile from "./Containers/Profile/Profile"

function App() {

  return (
    <div className="App">
      <BrowserRouter>
            <Header/>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/movies" element={<List/>}/>
                  <Route path="/register" element={<Register/>}/>
                  <Route path="/genero" element={<Genero/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/profile" element={<Profile/>}/>
              </Routes>
            <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
