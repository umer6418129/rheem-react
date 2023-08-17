import React from 'react'
import PropTypes from 'prop-types'

function Carousel(props) {
    return (
        <div className='my-3'>
            <div id="carouselExampleDark"
                className=" carousel carousel-dark slide rounded mx-auto d-block align-items-center img-fluid mt-5"
                data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3"
                        aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4"
                        aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5"
                        aria-label="Slide 6"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="6"
                        aria-label="Slide 7"></button>
                </div>
                <div className="carousel-inner  mx-auto rounded d-block">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src={require('../../assests/carousel-banners/main.banner (2).png')} className="d-block w-100 cs " alt="..."/>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={require('../../assests/carousel-banners/central air.png')} className="d-block w-100 cs rounded mx-auto img-fluid" alt='carousel'/>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <img src={require('../../assests/carousel-banners/ductless banner.png')} className="d-block w-100 cs rounded mx-auto d-block img-fluid" alt='carousel'/>
                    </div>
                    <div className="carousel-item" data-bs-interval="4000">
                        <img src={require('../../assests/carousel-banners/hybrid.png')} className="d-block w-100 cs rounded mx-auto d-block img-fluid" alt='carousel'/>
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <img src={require('../../assests/carousel-banners/floor mounted.png')} className="d-block w-100 cs rounded mx-auto d-block img-fluid" alt='carousel'/>

                    </div>
                    <div className="carousel-item" data-bs-interval="6000">
                        <img src={require('../../assests/carousel-banners/casset ac.png')} className="d-block w-100 cs rounded mx-auto d-block img-fluid" alt='carousel'/>

                    </div>
                    <div className="carousel-item" data-bs-interval="7000">
                        <img src={require('../../assests/carousel-banners/portable.png')} className="d-block w-100 cs rounded mx-auto d-block img-fluid" alt='carousel'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

Carousel.propTypes = {

}

export default Carousel

