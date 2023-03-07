import React from 'react'
import data from "../data"

function Sliderdata({currentSlide}) {
  return (
    <>
    {data.map((slide, id) => (
        <div key={id} className={id === currentSlide ? "slides active" : "inactive"}>
            <img src={slide.image} alt={slide.title} />
            <div className="content">
                <div className="content_data">
                    <h1 className="title">{slide.title}</h1>
                    <p className="subtitle">{slide.subtitle}</p>
                </div>
            </div>
        </div>
    ))}
    </>
  )
}

export default Sliderdata