import React from 'react'
import PropTypes from 'prop-types'
import Carousel from './micro-components/Carousel'

function Home(props) {
  return (
    <div>
      <div className='text-center'>
        <img src={require('./../assests/gifs/home.gif')} alt="" className='rounded img-fluid w-75 '/>
        <Carousel></Carousel>
      </div>
    </div>
  )
}

Home.propTypes = {

}

export default Home

