// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Add from "./Add"
import Home from "./Home"
import Nav from "./Nav"
import './App.css'

const App = () => {
  return(
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/add" element={<Add/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App