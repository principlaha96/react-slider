import React, { useEffect, useState } from 'react'
import "./Slider.css"
import Arrows from './Arrows';
import Sliderdata from './Sliderdata';
import Dots from './Dots';
import data from "../data"

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slidesLength = data.length - 1;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(currentSlide === slidesLength ? 0 : currentSlide + 1)
        }, 5000)
        return () => clearInterval(interval)
    }, [currentSlide, slidesLength])

   const nextSlide = () => {
    setCurrentSlide(currentSlide === slidesLength ? 0 : currentSlide + 1)   
}

const prevSlide = () => {
    setCurrentSlide(currentSlide < 1 ? slidesLength : currentSlide - 1)
}

return (
    <>
      <div className="slider">
        <div className="overlay"></div>
          <Sliderdata currentSlide={currentSlide} />
          <Arrows prevSlide={prevSlide} nextSlide={nextSlide} />
          <Dots currentSlide={currentSlide} onClick={(currentSlide) => setCurrentSlide(currentSlide)}/>
        </div>
    </>
)
}

export default Slider