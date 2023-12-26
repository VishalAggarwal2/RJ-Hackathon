import React from 'react'
import NavBar from './Components/NavBar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Main from './Components/Main';
import Home from './Components/Home';
const App = () => {
  return (
    <div style={{background:"black",minHeight:"100vh", color:"white"}}>
<NavBar></NavBar>
<Routes>
<Route path='/home' element={<Home></Home>} />
<Route path='/main' element={<Main></Main>}/>
<Route path='/contactus'/></Routes>
    </div>
  )
}

export default App
