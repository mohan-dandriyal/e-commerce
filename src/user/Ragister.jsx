
import React from 'react'
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap'
import formImage from '../public/formImage/fromImage.png'
import google from '../public/formImage/google.png'
import { Link } from 'react-router-dom'
import './style.css';


function Ragister() {
    return (
        <Container fluid className='d-flex align-items-center overflow-hidden' style={{ height: "100vh" }}>
            <Row className='w-100'>
                <Col lg={7} md={6} className='d-none d-md-block'><Image src={formImage} className='h-100' /></Col>
                <Col lg={5} md={6} className='d-flex flex-column justify-content-center p-xl-5'>
                    <Row>
                        <Col className='px-sm-5 px-3  mb-3'>
                            <h2>Create an account</h2>
                            <p>Enter your details below</p>
                        </Col>
                        <Form className='d-flex flex-column px-sm-5 px-3 gap-4 gap-md-5'>
                            <Form.Group>
                                <Form.Control placeholder='Name' className='py-2' />
                            </Form.Group>

                            <Form.Group>
                                <Form.Control placeholder='Email or Phone Number' className='py-2' />
                            </Form.Group>

                            <Form.Group>
                                <Form.Control placeholder='password' className='py-2' />
                            </Form.Group>

                            <Form.Group>
                                <Form.Control placeholder='password' className='py-2' />
                            </Form.Group>

                            <Form.Group >
                                <Button className='mb-4 mt-4 mt-md-1 col-12 py-2'>Create Account</Button> <br />
                                <Button className=' col-12 py-2 google-btn d-flex align-items-center justify-content-center gap-4'><Image src={google} /> Sign up with Google</Button>
                            </Form.Group>

                            <Row>
                                <Col className='text-center'>
                                    <p className='m-0'>Already have account? <Link to="/login">Log in</Link></p>
                                </Col>
                            </Row>
                        </Form>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Ragister