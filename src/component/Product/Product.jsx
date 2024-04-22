import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
// import start from '../../public/images/star.png';
// import pro_1 from '../../public/images/pro-1.png';

import './style.css'
import ProductCart from '../productCard/ProductCart';
import Sidebar from '../sidebar/Sidebar';

function Product() {

    const [productData, setProductData] = useState([])
    const [next, setNext] = useState(1)


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

    let image = "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg"

    return (
        <Container fluid>
            <Container>
                <Row className='align-items-start pt-3 pb-5 py-md-5 px-2 px-sm-0 mx-0'>
                    {/* ---------------- sidebar in product page --------- */}
                    <Col md={3} className='ps-lg-3 d-none d-lg-block' >
                        <Sidebar />
                    </Col>

                    <Col className='ps-lg-3'>
                        <Row className='mx-0' style={{ rowGap: "15px" }}>

                            {
                                productData.slice((next * 12) - 12, next * 12)?.map((item, index) => {
                                    return (
                                        <Col md={4} sm={6} className=' px-1'>
                                            <ProductCart product={item} keys={index} img={image} />
                                        </Col>
                                    )
                                })
                            }

                        </Row>
                        <Row className='mx-0 mt-4'>
                            <Col className='text-center'>
                                <Button className='px-3 btn btn-sm py-2 me-2' disabled={next === 1 && true} onClick={()=> setNext(next - 1)}>Prev</Button>
                                <Button className='px-3 btn btn-sm py-2' disabled={next * 12 < productData.length ? false : true} onClick={()=> setNext(next + 1)}>Next</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Product