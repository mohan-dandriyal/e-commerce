
import React from 'react'
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap'
import formImage from '../public/formImage/fromImage.png'
import google from '../public/formImage/google.png'
import { Link } from 'react-router-dom'
import './style.css';


function Login() {
    return (
        <Container fluid className='d-flex align-items-center overflow-hidden' style={{ height: "100vh" }}>
            <Row className='w-100 mx-0 px-2 px-sm-0'>
                <Col lg={7} md={6} className='d-none d-md-block'><Image src={formImage} className='h-100' /></Col>
                <Col lg={5} md={6} className='d-flex flex-column justify-content-center p-xl-5'>
                    <Row>
                        <Col className='px-sm-5 px-3  mb-3'>
                            <h2>Log in to Exclusive</h2>
                            <p>Enter your details below</p>
                        </Col>
                        <Form className='d-flex flex-column px-sm-5 px-3 gap-4 gap-md-5'>

                            <Form.Group>
                                <Form.Control placeholder='Email or Phone Number' className='py-2' />
                            </Form.Group>

                            <Form.Group>
                                <Form.Control placeholder='Password' className='py-2 mb-4' />
                                <Link to='/forgot_password' className='text-decoration-none fw-semibold' style={{fontStyle : "italic"}}>Forget Password?</Link>
                            </Form.Group>

                            <Form.Group >
                                <Button className='mb-4 mt-4 mt-md-0 col-12 py-2'>Log In</Button> <br />
                                <Button className=' col-12 py-2 google-btn d-flex align-items-center justify-content-center gap-4'><Image src={google} /> Sign up with Google</Button>
                            </Form.Group>

                            <Row>
                                <Col className='text-center'>
                                    <p className='m-0'>Already have account? <Link to='/ragister'>Ragister </Link></p>
                                </Col>
                            </Row>
                        </Form>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Login