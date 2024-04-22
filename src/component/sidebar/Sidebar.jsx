

import React from 'react'
import { Col, FormGroup, Row, Checkbox, Form, InputGroup } from 'react-bootstrap'

export default function Sidebar() {
    return (
        <Row className='px-3'>
            <Col className='col-12'>
                <p className='fw-semibold fs-5'>Category</p>
                <ul className='pb-5 mb-5' style={{ borderBottom: "1px solid #e1e1e1" }}>
                    <li className='d-flex flex-column gap-4'>
                        <FormGroup className='d-flex gap-4'>
                            <input type="checkbox" id='all' className="form-check-input border" />
                            <Form.Label htmlFor="all">All New Arrivals</Form.Label>
                        </FormGroup>

                        <FormGroup className='d-flex gap-4'>
                            <input type="checkbox" id='all' className="form-check-input border" />
                            <Form.Label htmlFor="all">Tees</Form.Label>
                        </FormGroup>

                        <FormGroup className='d-flex gap-4'>
                            <input type="checkbox" id='all' className="form-check-input border" />
                            <Form.Label htmlFor="all">Crewnecks</Form.Label>
                        </FormGroup>

                        <FormGroup className='d-flex gap-4'>
                            <input type="checkbox" id='all' className="form-check-input border" />
                            <Form.Label htmlFor="all">Sweatshirts</Form.Label>
                        </FormGroup>

                        <FormGroup className='d-flex gap-4'>
                            <input type="checkbox" id='all' className="form-check-input border" />
                            <Form.Label htmlFor="all">Pants & Shorts</Form.Label>
                        </FormGroup>
                    </li>
                </ul>
            </Col>

            <Col className=''>
                <p className='fw-semibold fs-5'>Sizes</p>
                <ul className='pb-4' style={{ borderBottom: "1px solid #e1e1e1" }}>
                    <li className='d-flex flex-column gap-4'>
                        <FormGroup className='d-flex gap-4'>
                            <input type="checkbox" id='all' className="form-check-input border" />
                            <Form.Label htmlFor="all">XS</Form.Label>
                        </FormGroup>

                        <FormGroup className='d-flex gap-4'>
                            <input type="checkbox" id='all' className="form-check-input border" />
                            <Form.Label htmlFor="all">X</Form.Label>
                        </FormGroup>

                        <FormGroup className='d-flex gap-4'>
                            <input type="checkbox" id='all' className="form-check-input border" />
                            <Form.Label htmlFor="all">M</Form.Label>
                        </FormGroup>

                        <FormGroup className='d-flex gap-4'>
                            <input type="checkbox" id='all' className="form-check-input border" />
                            <Form.Label htmlFor="all">XL</Form.Label>
                        </FormGroup>

                        <FormGroup className='d-flex gap-4'>
                            <input type="checkbox" id='all' className="form-check-input border" />
                            <Form.Label htmlFor="all">2XL</Form.Label>
                        </FormGroup>
                    </li>
                </ul>
            </Col>
        </Row>
    )
}
