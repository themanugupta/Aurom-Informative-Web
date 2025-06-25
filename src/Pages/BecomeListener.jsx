import React, { useEffect } from 'react'
import Header from '../Components/Home/Header'
import Firstrecharge from '../Components/Home/Firstrecharge'
import Footer from '../Components/Home/Footer'
import BecomeListeners from '../Components/BecomeListener/BecomeListeners'
// import BecomeListeners from '../Components/BecomeListener/BecomeListeners'
// import Sharereview from '../Components/Home/Sharereview'

function BecomeListener() {


    useEffect(() => {
            const handleScrollToTop = () => {
              console
              window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top with smooth animation
          };
          handleScrollToTop()
          
        
          }, [])
  return (
    <div>
        <Header/>
      
      <BecomeListeners/>
       
        <Footer/>
    </div>
  )
}

export default BecomeListener