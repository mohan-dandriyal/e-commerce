
import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function ForgetPassword() {

    let [status, setStatus] = useState(0)

    const sendOtp = () => {

        setStatus(1)
    }

    const hendleOtp = () => {
        setStatus(2)
    }

    const hendlePass = () => {
        setStatus(0)
    }


    return (
        <Container className=' py-md-5 my-md-5  px-2 px-sm-0 d-flex align-items-center' fluid >

            <Container>
                <Row>
                    <h2 className='text-center mb-5' style={{ fontStyle: "italic" }}>Forgat Password</h2>
                    <Col md={6} className='mx-auto visibility-hidden mb-5 '>
                        <Row>
                            <Col className={`bg-${status >= 0  && "primary"} `} style={{ height: "8px" }}></Col>
                            <Col className={`bg-${status >= 1  && "primary"} `} style={{ height: "8px" }}></Col>
                            <Col className={`bg-${status >= 2  && "primary"} `} style={{ height: "8px" }}></Col>
                        </Row>
                    </Col>
                </Row>

                {
                    status === 0 || status > 2 ?
                        <Row className='mx-0'>
                            <Col md={6} className='mx-auto'>
                                <Form className='d-flex flex-column gap-5'>
                                    <Form.Group>
                                        <Form.Control placeholder='Enter Email Id / Contact No' className='px-3 py-2' />
                                    </Form.Group>
                                    <Form.Group>
                                        <Button className='w-100 py-2 mb-3' onClick={sendOtp}>verfy email / contact</Button>
                                        <p className='fw-semibold text-center pt-4' style={{ fontStyle: "italic" }}>Go To <Link to='/login' className='text-decoration-none' >Sing Up Hear</Link></p>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                        : status === 1 ?
                            <Row className='mx-0'>
                                <Col md={6} className='mx-auto'>
                                    <Form className='d-flex flex-column gap-5'>
                                        <Form.Group>
                                            <Form.Control placeholder='Enter Otp' className='px-3 py-2' />
                                        </Form.Group>
                                        <Form.Group>
                                            <Button className='w-100 py-2 mb-3' onClick={hendleOtp}>verfy Otp</Button>
                                            <p className='fw-semibold text-center pt-4' style={{ fontStyle: "italic" }}>Go To <Link to='/login' className='text-decoration-none' >Sing Up Hear</Link></p>
                                        </Form.Group>
                                    </Form>
                                </Col>
                            </Row>
                            : status === 2 &&
                            <Row className='mx-0'>
                                <Col md={6} className='mx-auto'>
                                    <Form className='d-flex flex-column gap-5'>
                                        <Form.Group>
                                            <Form.Control placeholder='New Password' className='px-3 py-2' />
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Control placeholder='Conform Password' className='px-3 py-2' />
                                        </Form.Group>
                                        <Form.Group>
                                            <Button className='w-100 py-2 mb-3' onClick={hendlePass}>Create A New Password</Button>
                                            <p className='fw-semibold text-center pt-4' style={{ fontStyle: "italic" }}>Go To <Link to='/login' className='text-decoration-none' >Sing In Hear</Link></p>
                                        </Form.Group>
                                    </Form>
                                </Col>
                            </Row>

                }




            </Container>
        </Container>
    )
}
