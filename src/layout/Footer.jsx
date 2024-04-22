
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa6";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import './style.css'


export default function Footer() {
    return (
        <Container fluid className='bg-dark py-5 ' style={{ minHeight: "200px" }}>
            <Container>
                <Row className='mx-0 px-2 px-sm-0 text-light row-gap-4'>
                    <Col md={3} >
                        <div className="logo fs-1 fw-bold" style={{ fontStyle: "italic" }}>
                            R<span style={{ color: "#DB4444" }}>V</span>
                        </div>
                        <p className='mt-4' style={{fontStyle : "italic"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos at sequi fuga ab dolore reprehenderit?</p>
                        <ul className='fs-4 mt-4 pt-2 social-icon d-flex gap-4'>
                            <li><RiFacebookFill /></li>
                            <li><FaTwitter /></li>
                            <li><FaLinkedinIn /></li>
                            <li><AiOutlineInstagram /></li>
                        </ul>
                    </Col>

                    <Col md={3} className='ps-lg-4' >
                        <h4 className='pb-3' style={{borderBottom :"2px solid white", width : "fit-content", fontStyle : "italic"}}>Support </h4>
                        <p className='text-decoration-none text-light mt-4'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                        <p> <a href="" className='text-decoration-none text-light'>exclusive@gmail.com</a></p>
                        <p><a href="" className='text-decoration-none text-light'>+88015-88888-9999</a></p>
                    </Col>

                    <Col md={3} className='ps-md-5' >
                        <h4  className='pb-3' style={{borderBottom :"2px solid white", width : "fit-content", fontStyle : "italic"}}>Account</h4>
                        <ul className='mt-4 ps-0 d-flex flex-column gap-3'>
                            <li> <Link className='text-decoration-none text-light'>My Account</Link></li>
                            <li> <Link to='/silngIn' className='text-decoration-none text-light'>Login</Link> / <Link to='/silngUp' className='text-decoration-none text-light'>Ragister</Link></li>
                            <li> <Link to='/cart' className='text-decoration-none text-light'>Cart</Link></li>
                            <li> <Link to='/wishlist' className='text-decoration-none text-light'>Wishlist</Link></li>
                            <li> <Link to='/' className='text-decoration-none text-light'>Shop</Link></li>
                        </ul>
                    </Col>

                    <Col md={3} className='ps-md-5 '>
                        <h4  className='pb-3' style={{borderBottom :"2px solid white", width : "fit-content", fontStyle : "italic"}}>Quick Link</h4>
                        <ul className='mt-4 ps-0 d-flex flex-column gap-3'>
                            <li> <Link className='text-decoration-none text-light'>Privacy Policy</Link></li>
                            <li> <Link className='text-decoration-none text-light'>Terms Of Use</Link></li>
                            <li> <Link className='text-decoration-none text-light'>FAQ</Link></li>
                            <li> <Link className='text-decoration-none text-light'>Contact</Link></li>
                        </ul>
                    </Col>

                  

                    {/* <Col md={3} >
                        <h4>Social Media</h4>
                        <ul className='fs-3 d-flex gap-4'>
                            <li><RiFacebookFill /></li>
                            <li><FaTwitter /></li>
                            <li><FaLinkedinIn /></li>
                            <li><AiOutlineInstagram /></li>
                        </ul>
                    </Col> */}

                </Row>
            </Container>

            <Row className='mx-0 mt-5 pt-5' style={{borderTop :"1px solid #c6c6c69c"}}>
                <Col>
                    <p className='text-center' style={{fontStyle : "italic", color : "#c6c6c69c"}}>&#169; Copyright Rimel 2022. All right reserved</p>
                </Col>
            </Row>
        </Container>
    )
}
