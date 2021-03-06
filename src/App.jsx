import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import List from './Containers/List/List'
import TopRated from "./Containers/TopRated/TopRated"
import Home from './Containers/Home/Home'
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import Register from "./Containers/User/Register/Register"
import Login from "./Containers/User/Login/Login"
import Profile from "./Containers/Profile/Profile"
import Admin from "./Containers/Admin/Admin"
import FiltrarAlquilerId from "./Containers/Admin/FiltrarAlquilerId/FiltrarAlquilerId"

function App() {

  return (
    <div className="App">
      <BrowserRouter>
            <Header/>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/movies" element={<List/>}/>
                  <Route path="/register" element={<Register/>}/>
                  <Route path="/toprated" element={<TopRated/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/profile" element={<Profile/>}/>
                  <Route path="/admin" element={<Admin/>}/>
                  <Route path="/filtraralquilerId" element={<FiltrarAlquilerId/>}/>
              </Routes>
            <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
