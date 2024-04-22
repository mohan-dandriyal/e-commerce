import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col, Container } from 'react-bootstrap';
import { Image } from 'react-bootstrap';

import './style.css';

export default function MySlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true
  };

  return (
    <Container fluid style={{ overflow: "hidden", }} >
      <Slider {...settings} >
        <Col className='h-100position-relative bg-primary'>
          <Image src="https://img.freepik.com/premium-photo/clothes-row-clothes-autumn-fall-season-clothespin_198568-1046.jpg?w=1380" className='w-100' />
          <Container >
            <Col className=' d-none d-lg-block slider-content'>
              <h2>New Faction</h2>
              <p className='col-md-6 fw-semibold mt-4' style={{fontStyle : "italic"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos voluptas laborum ipsa distinctio quibusdam delectus.</p>
            </Col>
          </Container>
        </Col>

        <Col className='h-100position-relative bg-primary'>
          <Image src="https://img.freepik.com/premium-photo/clothes-row-clothes-autumn-fall-season-clothespin_198568-1046.jpg?w=1380" className='w-100' />
          <Container >
            <Col className='d-none d-lg-block slider-content'>
              <h2>New Faction</h2>
              <p className='col-md-6 fw-semibold mt-4' style={{fontStyle : "italic"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos voluptas laborum ipsa distinctio quibusdam delectus.</p>
            </Col>
          </Container>
        </Col>

          <Col className='h-100position-relative bg-primary'>
          <Image src="https://img.freepik.com/premium-photo/clothes-row-clothes-autumn-fall-season-clothespin_198568-1046.jpg?w=1380" className='w-100' />
          <Container >
            <Col className='d-none d-lg-block slider-content'>
              <h2>New Faction</h2>
              <p className='col-md-6 fw-semibold mt-4' style={{fontStyle : "italic"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos voluptas laborum ipsa distinctio quibusdam delectus.</p>
            </Col>
          </Container>
        </Col>

         <Col className='h-100position-relative bg-primary'>
          <Image src="https://img.freepik.com/premium-photo/clothes-row-clothes-autumn-fall-season-clothespin_198568-1046.jpg?w=1380" className='w-100' />
          <Container >
            <Col className='d-none d-lg-block slider-content'>
              <h2>New Faction</h2>
              <p className='col-md-6 fw-semibold mt-4' style={{fontStyle : "italic"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos voluptas laborum ipsa distinctio quibusdam delectus.</p>
            </Col>
          </Container>
        </Col>
        
      </Slider>
    </Container>
  );
}
