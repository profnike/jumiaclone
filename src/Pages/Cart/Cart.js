import React, { useContext } from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

import { MdShoppingCart } from "react-icons/md";
import cartContext from '../../Context/Cart/CartContext';
import CartItem from '../../Components/CartItem/CartItem';
import './Cart.css'
import { useNavigate } from 'react-router-dom';


const Cart = () => {
    
    
    const navigate=useNavigate()
    const{cartItems}=useContext(cartContext)
    let amount= 0
    cartItems.map((val)=>{
        
        
        amount+= val.quantity
       console.log(amount)
   

    })
  return (
    <div className='cart-container'>
        <Header>
    
        { cartItems.length === 0 ?
        (
            <div className='cart-inner'>
            <div className='cart-image-wrapper'>
        <MdShoppingCart/>
        </div>
        <h5>Your cart is empty! </h5>
        <p>Browse our categories and discover our best deals!</p>
        <button onClick={()=>{navigate("/")}}>START SHOPPING</button>
        </div>):
        (<div className='cart-inner-content'>
            <div className='cart-inner-content-left'>
            <h5 className='header'>Cart ( {amount} )</h5>
            
            {cartItems.map((item)=>{
                return(
                    <CartItem key={cartItems.id} item={item}/>
                )

            })
            
        }
        </div>
        <div className='cart-inner-content-right'>

        </div>
        </div>)
        }
    

        </Header>
        <Footer/>
    </div>
  )
}

export default Cart

