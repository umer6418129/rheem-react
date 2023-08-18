import React from 'react'
import Carousel from './micro-components/Carousel'
import BLog from './Blog'
import About from './About'


function Home(props) {
  return (
    <div className='mt-3'>
        <img src={require('./../assests/gifs/home.gif')} alt="" className='rounded mx-auto d-block img-fluid w-75 ' />
      <div>
        <Carousel></Carousel>
        <BLog></BLog>
        <About></About>
      </div>
    </div>
  )
}
export default Home

