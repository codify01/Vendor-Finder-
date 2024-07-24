import React from 'react'
import Nav from './components/Nav'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs';
const App = () => {
  return (
    <>
    <Router>
    <Nav/>
    <Routes>
    <Route path="/" element={<AboutUs />} />

    </Routes>
    </Router>
    </>
  )
}

export default App