
import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import star from '../../public/images/star.png'

import './style.css';

export default function ViewProduct() {
    return (
        <Container fluid className='px-2 my-4 px-sm-0' >
            <Container className=' view_product '>
                <Row className='mx-0 align-items-center' >
                    <Col md={5} >
                        <Row className='gap-2 mx-0'>
                            <Col md={2}>
                                <Button className='mb-2'>
                                    <Col md={12} >
                                        <Image src="https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg" className='w-100' />
                                    </Col>
                                </Button>

                                <Button className='mb-2'>
                                    <Col md={12} >
                                        <Image src="https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg" className='w-100' />
                                    </Col>
                                </Button>

                                <Button className='mb-2'>
                                    <Col md={12} >
                                        <Image src="https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg" className='w-100' />
                                    </Col>
                                </Button>

                                <Button className='mb-1'>
                                    <Col md={12} >
                                        <Image src="https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg" className='w-100' />
                                    </Col>
                                </Button>

                            </Col>
                            <Col className='card-image'>
                                <Image src="https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg" className='w-100' />
                            </Col>
                        </Row>
                    </Col>
                    <Col className='mt-3 mt-md-0  ps-4 ps-md-3'>
                        <Col className='product_detals  px-4 px-sm-3'>
                            <p className='fw-semibold fs-3'>HAVIT HV-G92 Gamepad</p>
                            <p className='fw-semibold' style={{ fontStyle: "italic" }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium perferendis a, vero totam qui eveniet nam quo accusantium at veniam nulla, impedit blanditiis repellendus beatae. Nisi id amet deserunt quis!</p>
                            <Image src={star} className='mt-1 mb-3' />
                            <p className='product_price fw-semibold pt-1' style={{ fontStyle: "italic" }}>
                                <span style={{ color: "#DB4444 " }}> &#8377;300</span> / <del>&#8377;900</del>
                            </p>

                            <Col>
                                <Button className='btn bnt-dark me-3 px-5 py-2 first-btn' style={{backgroundColor : "#DB4444"}}>Shop Now</Button>
                                <Button className='btn px-5 py-2 primary-btn'>Add To Cart</Button>
                            </Col>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}
