import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import { MdShoppingCart } from "react-icons/md";

import './Cart.css'
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const navigate=useNavigate
  return (
    <div className='cart-container'>
        <Header>
    <div className='cart-inner'>
        <div className='cart-image-wrapper'>
        <MdShoppingCart/>
        </div>
        <h5>Your cart is empty! </h5>
        <p>Browse our categories and discover our best deals!</p>
        <button onClick={()=>{navigate("/")}}>START SHOPPING</button>
    </div>

        </Header>
        <Footer/>
    </div>
  )
}

export default Cart

