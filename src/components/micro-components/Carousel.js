import React, { useEffect, useState } from 'react';

function Carousel(props) {
    let url = "http://127.0.0.1:8000/api/";
    const sliderObj = {
        get: "get/slider",
    }
    const [slider, setSlider] = useState([]);
    
    const fetchSlide = async (url) => {
        try {
            const res = await fetch(url + sliderObj.get);
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await res.json();
            console.log(data);
            setSlider(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchSlide(url);
    }, []);

    return (
        <div className='my-3'>
            <div
                id="carouselExampleDark"
                className="carousel carousel-light slide rounded mx-auto d-block align-items-center img-fluid mt-5"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner mx-auto rounded d-block">
                    {slider.map((slide, index) => (
                        <div
                            className={`carousel-item ${index === 0 ? 'active' : ''}`}
                            key={index}
                            data-bs-interval="10000"
                        >
                            <img
                                src={slide.img}
                                className="d-block w-100 cs"
                                alt="..."
                                style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                            />
                        </div>
                    ))}
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Carousel;
