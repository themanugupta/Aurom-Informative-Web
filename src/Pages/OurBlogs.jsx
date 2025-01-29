import React, { useEffect } from 'react'
import Header from '../Components/Home/Header'
import Ourblogs from '../Components/Blogs/Ourblogs'
import Firstrecharge from '../Components/Home/Firstrecharge'
import Footer from '../Components/Home/Footer'
import Sharereview from '../Components/Home/Sharereview'

function OurBlogs() {
   useEffect(() => {
          const handleScrollToTop = () => {
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top with smooth animation
        };
        handleScrollToTop()
        
      
        }, [])
  return (
    <div>
        <Header/>
         <Ourblogs/>
         <Firstrecharge/>
         <Sharereview/>
         <Footer/>
          

    </div>
  )
}

export default OurBlogs