

import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import './style.css';

export default function AddToCart() {
    return (
        <Container fluid>
            <Container className='px-2 px-sm-0 mt-4 addtoCart '>
                <Row className='mx-0'>
                    <Col>
                        <p className='fs-4 fw-bold pb-3 mb-3' style={{ fontStyle: "italic", borderBottom: "1px solid #ebebeb" }} >Shopping Cart</p>
                        {/* <p className='fs-4 fw-bold pb-3 mb-3' style={{ fontStyle: "italic", borderBottom: "1px solid #ebebeb" }} >Your Amazon Cart is empty.</p> */}
                    </Col>
                </Row>
                <Row className='mx-0 align-items-center bg-light mt-4' >
                    <Col md={2}>
                        <Button>
                            <Image src="https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg" className='w-100' />
                        </Button>
                    </Col>
                    <Col>
                        <Col className=' ps-5'>
                            <p className='fw-semibold fs-5'>Motorola E13 4G (Aurora Green, 8GB RAM, 128GB Storage) | Upto 1TB MicroSD Expandable | 6.5 Inch IPS LCD Display with 60Hz Refresh Rate | UNISOC T606 Proce…
                            </p>
                            <p className='fw-semibold' style={{ fontSize: "14px", fontStyle: "italic", color: "green" }}>In stock</p>
                            <p className='product_price fw-semibold pt-1' style={{ fontStyle: "italic" }}>
                                Price :   <span style={{ color: "#DB4444 " }}> &#8377;300</span>
                            </p>

                            <select className='p-1 px-2 fw-semibold rounded'>
                                <option value="1">Oty : 1</option>
                                <option value="1">Oty : 1</option>
                            </select>
                        </Col>
                    </Col>
                </Row>

                <Row className='mx-0 align-items-center bg-light mt-4' >
                    <Col md={2}>
                        <Button>
                            <Image src="https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg" className='w-100' />
                        </Button>
                    </Col>
                    <Col>
                        <Col className=' ps-5'>
                            <p className='fw-semibold fs-5'>Motorola E13 4G (Aurora Green, 8GB RAM, 128GB Storage) | Upto 1TB MicroSD Expandable | 6.5 Inch IPS LCD Display with 60Hz Refresh Rate | UNISOC T606 Proce…
                            </p>
                            <p className='fw-semibold' style={{ fontSize: "14px", fontStyle: "italic", color: "green" }}>In stock</p>
                            <p className='product_price fw-semibold pt-1' style={{ fontStyle: "italic" }}>
                                Price :   <span style={{ color: "#DB4444 " }}> &#8377;300</span>
                            </p>

                            <select className='p-1 px-2 fw-semibold rounded'>
                                <option value="1">Oty : 1</option>
                                <option value="1">Oty : 1</option>
                            </select>
                        </Col>
                    </Col>
                </Row>

                <Row className='mx-0 align-items-center bg-light mt-4' >
                    <Col md={2}>
                        <Button>
                            <Image src="https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg" className='w-100' />
                        </Button>
                    </Col>
                    <Col>
                        <Col className=' ps-5'>
                            <p className='fw-semibold fs-5'>Motorola E13 4G (Aurora Green, 8GB RAM, 128GB Storage) | Upto 1TB MicroSD Expandable | 6.5 Inch IPS LCD Display with 60Hz Refresh Rate | UNISOC T606 Proce…
                            </p>
                            <p className='fw-semibold' style={{ fontSize: "14px", fontStyle: "italic", color: "green" }}>In stock</p>
                            <p className='product_price fw-semibold pt-1' style={{ fontStyle: "italic" }}>
                                Price :   <span style={{ color: "#DB4444 " }}> &#8377;300</span>
                            </p>

                            <select className='p-1 px-2 fw-semibold rounded'>
                                <option value="1">Oty : 1</option>
                                <option value="1">Oty : 1</option>
                            </select>
                        </Col>
                    </Col>
                </Row>  <Row className='mx-0 align-items-center bg-light mt-4 ' >
                    <Col md={2}>
                        <Button>
                            <Image src="https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg" className='w-100' />
                        </Button>
                    </Col>
                    <Col>
                        <Col className=' ps-5'>
                            <p className='fw-semibold fs-5'>Motorola E13 4G (Aurora Green, 8GB RAM, 128GB Storage) | Upto 1TB MicroSD Expandable | 6.5 Inch IPS LCD Display with 60Hz Refresh Rate | UNISOC T606 Proce…
                            </p>
                            <p className='fw-semibold' style={{ fontSize: "14px", fontStyle: "italic", color: "green" }}>In stock</p>
                            <p className='product_price fw-semibold pt-1' style={{ fontStyle: "italic" }}>
                                Price :   <span style={{ color: "#DB4444 " }}> &#8377;300</span>
                            </p>

                            <select className='p-1 px-2 fw-semibold rounded'>
                                <option value="1">Oty : 1</option>
                                <option value="1">Oty : 1</option>
                            </select>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}
