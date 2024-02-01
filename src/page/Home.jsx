import React from 'react'
import Products from '../component/Products'

const Home = () => {
  return (
    <div>
      <div className="heading" style={{display:"flex", alignItems:"center", justifyContent:"center", marginTop:"20px", marginBottom:"20px"}}>WelCome!, To Redux Toolkit Store</div>
      <Products/>
    </div>
  )
}

export default Home
