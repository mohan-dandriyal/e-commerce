import React from 'react'
import Header from './Header'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import ViewProduct from '../component/viewProduct/ViewProduct'
import AddToCart from '../component/addToCart/AddToCart'
import Footer from './Footer'

export default function Wrapper() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/shop" element={<Home />} />
                <Route path="/view_product" element={<ViewProduct />} />
                <Route path="/cart" element={<AddToCart />} />
                <Route path="/wishlist" element={"Wishlist"} />
            </Routes>
            <Footer />
        </>
    )
}
