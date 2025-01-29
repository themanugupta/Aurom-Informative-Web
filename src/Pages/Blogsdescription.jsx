import React, { useEffect } from 'react'
import Header from '../Components/Home/Header'
import Blogsdesc from '../Components/Blogsdesc/Blogsdesc'
import Firstrecharge from '../Components/Home/Firstrecharge'
import Footer from '../Components/Home/Footer'

function Blogsdescription() {
   useEffect(() => {
          const handleScrollToTop = () => {
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top with smooth animation
        };
        handleScrollToTop()
        
      
        }, [])
  return (
    <div>
        
        <Header/>
        <Blogsdesc/>
        <Firstrecharge/>
        <Footer/>
    </div>
  )
}

export default Blogsdescription