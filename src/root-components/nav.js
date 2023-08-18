import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

function nav(props) {
    return (
        <div>
                <nav className="navbar navbar-expand-lg bg-warning">
                    <div className="container-fluid">
                        <img src={require('./../assests/logo.png')} className="w-25 h-50" alt=""/>
                            <button className="navbar-toggler ms-5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarText">
                                <ul className=" navbar-nav ms-5 ps-5 me-auto mb-2 mb-lg-0 ">
                                    <li className="nav-item  fw-bold ms-4"><Link to="/home" className="nav-link">HOME</Link></li>
                                    <li className="nav-item fw-bold ms-4"><Link to="/store" className="nav-link">STORE</Link></li>
                                    <li className="nav-item fw-bold ms-4"><Link to="/gallery" className="nav-link">GALLERY</Link></li>
                                    <li className="nav-item fw-bold ms-4"><Link to="/blog" className="nav-link">BLOG</Link></li>
                                    <li className="nav-item fw-bold ms-4"><Link to="/about" className="nav-link">ABOUT</Link></li>
                                    <li className="nav-item fw-bold ms-4"><Link to="/contact" className="nav-link">CONTACT</Link></li>
                                </ul>
                                <div className="d-flex ms-5 ps-5">
                                    <a href="faq.html" className="nav-link"> <button id="faq" type="submit" className="btn nav-item btn-dark btn-md  btn-outline-light border-dark ">FAQ'S</button></a>
                                    <a href="login.html" className="nav-link ms-3">
                                        <button className=" bi bi-person btn btn-dark btn-md btn-outline-light border-dark nav-item"></button>
                                    </a>
                                </div>
                            </div>
                    </div>
                </nav>
        </div>
    )
}

nav.propTypes = {

}

export default nav

