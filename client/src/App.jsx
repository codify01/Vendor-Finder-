import React, { lazy, Suspense } from 'react'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom';
const NotFound = lazy(()=>import('./components/404'))
const Services = lazy(()=>import('./pages/Services'))
const AboutUs=lazy(()=>import('./pages/AboutUs'))
const Home=lazy(()=>import('./pages/Home'))
const Categories =lazy(()=>import('./pages/Categories'))
const Questions =lazy(()=>import('./pages/Questions'))
const PartnerWithUs =lazy(()=>import('./pages/PartnerWithUs'))
const Register = lazy(()=>import('./pages/Register'))
const SearchPage = lazy(()=>import('./pages/SearchPage'))
const Profile = lazy(()=>import('./pages/Profile'))
const App = () => {
  return (
    <>
    
    <Nav/>
    <Routes>
      <Route path='/' element={<Suspense><Home/></Suspense>}/>
      <Route path="/about-us" element={<Suspense><AboutUs /></Suspense>} />
      <Route path="/categories" element={<Suspense><Categories/></Suspense>}/>
      <Route path="/questions" element={<Suspense><Questions/></Suspense>}/>
      <Route path="/partner-with-us" element={<Suspense><PartnerWithUs/></Suspense>}/>
      <Route path="/register" element={<Suspense><Register/></Suspense>}/>
      <Route path="/search-page" element={<Suspense><SearchPage/></Suspense>}/>
      <Route path="/services" element={<Suspense><Services/></Suspense>}/>
      <Route path="/profile" element={<Suspense><Profile/></Suspense>}/>
      <Route path='*' element={<Suspense><NotFound/></Suspense>}/>
    </Routes>
    </>
    
  )
}

export default App