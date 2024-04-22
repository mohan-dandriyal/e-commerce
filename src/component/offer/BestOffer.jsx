
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col, Container, Image, Row } from 'react-bootstrap'
import ProductCart from '../productCard/ProductCart';

import './style.css'

export default function BestOffer() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 4,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
              }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                }
              },
              {
                breakpoint: 580,
                settings: {
                  slidesToShow: 1,
                }
              },
          ]
    };

    const [productData, setProductData] = useState([])


    useEffect(() => {
        featchData()
    }, [])

    const featchData = async () => {
        try {
            let responce = await fetch('http://localhost:4000/product', {
                method: "GET"
            })
            responce = await responce.json()
            setProductData(responce)
            console.log(responce);
        } catch (error) {
            console.log(error);
        }
    }

    let image = "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-03.jpg"

    return (
        <Container fluid className='mt-5 px-2 px-sm-0' >
            <Container>
                <Row className='mx-0'>
                    <Col className='d-flex'>
                        <div className='border-rounded  me-2' style={{ backgroundColor: "#db4444", width: '10px', height: "100%", borderRadius: '2px' }}></div>
                        <span className='fw-bold' style={{ color: "#db4444", fontStyle: "italic" }}>Today’s</span>
                    </Col>
                </Row>

                <Row className='mx-0 mt-3 py-2'>
                    <Col className='col-6'>
                        <h4 className='fw-bold' style={{ fontStyle: "italic" }}>Flash Sales</h4>
                    </Col>
                </Row>
                <Row className='py-2 mx-auto'>
                    <Col className='offer'>
                        <Slider {...settings} >
                            {
                                productData.map((item, index) => {
                                    return (
                                        <Col className='h-100 d-flex p-1 position-relative'>
                                            <ProductCart product={item} keys={index} fontSize={17} img={image} />
                                        </Col>
                                    )
                                })
                            }
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}
