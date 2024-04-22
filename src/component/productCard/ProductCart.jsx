
import React from 'react'
import { Col, Button, Image } from 'react-bootstrap'

import start from '../../public/images/star.png';
import { useNavigate } from 'react-router-dom';
// import pro_1 from '../../public/images/pro-1.png';

export default function ProductCart ({product, keys, fontSize, img}) {

  const navigate = useNavigate()
  return (
    <Col key={keys}>
      <Button className='w-100 text-start bg-none border-none' onClick={() => navigate('/view_product')}>
        <Col className='card '>
          <Col className='product-image d-flex align-items-center justify-content-center'>
            <Image src={img} />
          </Col>
          <Col className='card-body'>
            <p className='product_name fw-bold  mb-2 ps-3 pt-3' style={{fontSize  : fontSize}}>{product.productName}</p>
            <p className='product_price fw-semibold ps-3 pt-1' style={{ fontStyle: "italic" }}>
              <span style={{ color: "#DB4444 " }}> &#8377;{product.productDisPrice}</span> / <del>&#8377;{product.productPrice}</del>
              <Image src={start} className='mt-1' />
            </p>
          </Col>
        </Col>
      </Button>
    </Col>
  )
}
