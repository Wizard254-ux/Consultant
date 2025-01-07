import { useState } from 'react'
import './index.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { AuthProvider } from './Auth/Authprovider'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Gallery from './Pages/Gallery'
import Services from './Pages/Services'
import LoadingSpinner from './Components/LoadingSpinner'
import AboutPage from './Pages/About'
function App() {
  const [isSideBar,displaySideBar]=useState(false)


  return (
    <BrowserRouter>
    <AuthProvider>
      <LoadingSpinner/>
      <Routes>
        <Route path='/'  element={<Home isSideBar={isSideBar} displaySideBar={displaySideBar}/>}/>
        <Route path='/Services' element={<Services isSideBar={isSideBar} displaySideBar={displaySideBar}/> }/>
        <Route path='/Gallery' element={<Gallery isSideBar={isSideBar} displaySideBar={displaySideBar}/>}/>
        <Route path='/Contact' element={<Contact isSideBar={isSideBar} displaySideBar={displaySideBar}/>}/>
        <Route path='/About' element={<AboutPage isSideBar={isSideBar} displaySideBar={displaySideBar}/>}/>
      </Routes>
    </AuthProvider>
    </BrowserRouter>
  )
}

export default App
