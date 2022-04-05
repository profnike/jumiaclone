import React from 'react'
import jumiacenter from '../../Asset/jumia-home-one.jpg'
import jumiacenter2 from '../../Asset/jumiacenter2.png'
import jumiacenter3 from '../../Asset/jumiacenter3.png'
import jumiacenter4 from '../../Asset/jumiacenter4.png'
import jumiacenter5 from '../../Asset/jumiacenter5.png'
import Carousel from 'react-bootstrap/Carousel'
import '../Carousel/Carousel.css'

function Carousell(){

    return(
        <div className='carousel-div'>
            <Carousel  fade>
  <Carousel.Item   interval={2000}>
    <img
      className="d-block w-100"
      src={jumiacenter}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={jumiacenter2}
      alt="Second slide"
    />
   
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={jumiacenter3}
      alt="Third slide"
    />
   
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={jumiacenter4}
      alt="Third slide"
    />
    
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={jumiacenter5}
      alt="Third slide"
    />
    
  </Carousel.Item>
</Carousel>

        </div>
    )
}
export default Carousell