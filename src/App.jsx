import { useState } from 'react'

import './App.css'
import HomePage from './Pages/HomePage'
import OurListeners from './Pages/OurListeners'
import OurBlogs from './Pages/OurBlogs'
import Listenersdescription from './Pages/Listenersdescription'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Listenerdesc from './Components/Listnerdesc.jsx/Listenerdesc'
import ScrollToTop from './Components/Scrolltotop/Scrolltotop'
import Blogsdescription from './Pages/Blogsdescription'
import BecomeListener from './Pages/BecomeListener'




function App() {


  return (
  
    <BrowserRouter>
       {/* <ScrollToTop/> */}
    <Routes>
    <Route path="/" element={<HomePage/>} />
    {/* <Route path='' */}
  

    
   
<Route path='/OurListeners' element={<OurListeners/>} />
<Route path='/OurBlogs' element={<OurBlogs/>} />
<Route path='/:Ourlistener' element={<Listenersdescription/>} />
<Route path='/Blogsdesc' element={<Blogsdescription/>} />
<Route path='/BecomeListener' element={<BecomeListener/>} />
   {/* <OurListeners/> */}
  {/* <OurBlogs/> */}
  {/* <Listenersdescription/> */}
  </Routes>
  </BrowserRouter>

  )
}

export default App
