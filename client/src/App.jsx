import React, { lazy } from 'react'
import Nav from './components/Nav'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const Services = lazy(()=>import('./pages/Services'))
const AboutUs=lazy(()=>import('./pagees/AboutUs'))
const Home=lazy(()=>import('./pages/Home'))
const Categories =lazy(()=>import('./pages/Categories'))
const Questions =lazy(()=>import('./pages/Questions'))
const PartnerWithUs =lazy(()=>import('./pages/PartnerWithUs'))
const Register = lazy(()=>import('./pages/Register'))
const SearchPage = lazy(()=>import('./pages/SearchPage'))
const App = () => {
  return (
    <>
    <Router>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/categories" element={<Categories/>}/>
      <Route path="/questions" element={<Questions/>}/>
      <Route path="/partner-with-us" element={<PartnerWithUs/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/search-page" element={<SearchPage/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/profile" element={<Profile/>}/>
    </Routes>
    </Router>
    </>
  )
}

export default App