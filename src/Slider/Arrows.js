import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function Arrows({prevSlide, nextSlide}) {
  return (
    <>
    <ArrowBackIosIcon className="prev" onClick={prevSlide} />
    <ArrowForwardIosIcon className='next' onClick={nextSlide} />
    </>
  )
}
export default Arrows