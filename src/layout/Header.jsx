import React, { useState } from 'react'
import './style.css'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

import { FaCartShopping, FaHeart } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { MdCancel } from "react-icons/md";

import { Link } from 'react-router-dom';


function Header() {

    const [toggleMenu, setToggle] = useState(false)

    return (
        <Container fluid className='main bg-light  d-flex flex-column  justify-content-between'>
            <Container className='mt-2 pt-1'>
                <Row className='mx-0  px-2 px-sm-0 justify-content-between align-items-center'>

                    <Col className='col-md-3 col-4 d-flex gap-3 align-items-center'>
                        <Col className='col-2 d-md-none d-block'>
                            <HiOutlineMenuAlt2 style={{ color: '#DB4444' }} className='fs-2' onClick={() => setToggle(true)} />
                        </Col>
                        <Col className='fw-bold fs-3 d-none d-md-block'>Exclusive</Col>
                        <Col className='col-3 fw-bold fs-3 d-md-none' style={{ fontStyle: "italic", fontFamily: 'math' }}>R<span style={{ color: '#DB4444 ' }}>V</span></Col>
                    </Col>

                    <Col className='col-md-4 d-none d-lg-block'>
                        <Form>
                            <Col className='position-relative overflow-hidden' style={{ height: "40px" }}>
                                <Form.Control placeholder='Search items..' className='search-box h-100 px-3' />
                                <Col className='position-absolute search-btn top-50 translate-middle d-flex align-items-center h-100' style={{ right: '-18px' }}>
                                    <Button className='fs-3 bg-none p-1'> <IoMdSearch /> </Button>
                                </Col>
                            </Col>
                        </Form>
                    </Col>

                    <Col className='text-end col-md-5 col-8'>
                        <ul className='ps-0 h-100 mb-0 d-flex gap-4 fs-4  align-items-center justify-content-end' >
                            <li className='position-relative'>
                               <Link to="/cart" className='text-dark text-decoration-none'> <FaCartShopping /></Link>
                                <Col className='position-absolute count-number d-flex justify-content-center rounded-circle text-light' >10</Col>
                            </li>
                            <li className='ms-4 position-relative'>
                                <Link to='/wishlist' className='text-dark text-decoration-none'><FaHeart /></Link>
                                <Col className='position-absolute count-number d-flex justify-content-center rounded-circle text-light' >10</Col>
                            </li>
                            <li className='ms-3 btn btn-sm text-light px-2 py-2 d-flex gap-2' style={{ backgroundColor: "#db4444" }}>
                                <Link to='/ragister' className='text-decoration-none text-light fw-semibold' style={{ fontSize: "14px", fontStyle: "italic" }}>Sing up</Link>
                                <span className='d-none d-sm-block'> / </span>
                                <Link  to='/login' className='text-decoration-none text-light fw-semibold d-none d-sm-block' style={{ fontSize: "14px", fontStyle: "italic" }}> Sing In</Link></li>
                        </ul>
                    </Col>
                </Row>
            </Container>

            <Container className='bg-dark py-2' fluid>
                <Container >
                    <Col className='d-block px-2 px-sm-0 d-lg-none col-12 mx-auto'>
                        <Form>
                            <Col className='position-relative overflow-hidden' style={{ height: "40px" }}>
                                <Form.Control placeholder='Search items..' className='search-box h-100 px-3' />
                                <Col className='position-absolute search-btn top-50 translate-middle d-flex align-items-center h-100' style={{ right: '-18px' }}>
                                    <Button className='fs-3 bg-none p-1'> <IoMdSearch /> </Button>
                                </Col>
                            </Col>
                        </Form>
                    </Col>

                    <ul className='m-0 nav-list py-2' style={{ transform: toggleMenu ? 'translate(0%)' : 'translate(-100%)' }}>
                        <li><MdCancel onClick={() => setToggle(false)} /> </li>
                        <li><Link to='/shop' className='text-decoration-none nav-item text-light'>Home</Link></li>
                        <li><Link to='/shop' className='text-decoration-none nav-item text-light'>Home</Link></li>
                        <li><Link to='/shop' className='text-decoration-none nav-item text-light'>Home</Link></li>
                        <li><Link to='/shop' className='text-decoration-none nav-item text-light'>Home</Link></li>
                        <li><Link to='/shop' className='text-decoration-none nav-item text-light'>Home</Link></li>
                    </ul>
                </Container>
            </Container>
        </Container>
    )
}

export default Header