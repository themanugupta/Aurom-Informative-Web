import React from 'react'
import Header from '../Components/Home/Header'
import Firstrecharge from '../Components/Home/Firstrecharge'
import Footer from '../Components/Home/Footer'
import BecomeListeners from '../Components/BecomeListener/BecomeListeners'
// import BecomeListeners from '../Components/BecomeListener/BecomeListeners'
// import Sharereview from '../Components/Home/Sharereview'

function BecomeListener() {
  return (
    <div>
        <Header/>
      {/* <BecomeListeners/> */}
      <BecomeListeners/>
        {/* <Firstrecharge/> */}
        <Footer/>
    </div>
  )
}

export default BecomeListener