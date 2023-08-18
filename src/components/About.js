import React from 'react'
import about from '../objects/about.json'
function About(props) {
  return (
    <div id="about">
      {
        about.map(about => {
          return (
            <div className="">
              <h1 className="text-center display-1 fw-bold pt-5">About Rheem</h1>
              <div className="text-center mt-5">
                <img src={require('./../assests/gifs/about us.gif')} className="rounded img-fluid w-75" alt=""/>
              </div>
              <div className="row row-cols-1 row-cols-md-2 g-2 mt-5 ms-2 me-0 pb-5">
                <img src={about.img} className="w-50" alt='about'/>
                  <div>
                    <p className="mt-5 fs-6 text-black-50 lh-base fst-italic fw-semibold">{about.text}</p>
                    <a href="index.html"> <button id='aboutBtn' className="btn btn-dark btn-outline-warning  text-white  mt-3">Go to Parchase</button></a>
                  </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
export default About

