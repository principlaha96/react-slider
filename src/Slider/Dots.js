import React from 'react'
import data from "../data"

function Dots({currentSlide, onClick}) {
  return (
    <div className='dots'>
        {data.map ((_dot, id) => (
            <span key="id" className={currentSlide === id? 'dot active' : 'dot'} onClick={() => onClick(id)} />
        ))}
    </div>
  )
}

export default Dots