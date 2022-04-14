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
    let total=0
    let totals=0
    cartItems.forEach((val)=>{
        
        
        amount+= val.quantity
      
   

    })
    cartItems.forEach((val)=>{
        
        let qty=val.quantity
        total+= (val.amount*qty)
         totals=total.toFixed(2);
       

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
            
            {cartItems.map((item,ind)=>{
                return(
                    <CartItem key={ind} item={item}/>
                )

            })
            
        }
        </div>
        <div className='cart-inner-content-right'>
        <h5 className='cart-summary-head'>CART SUMMARY</h5>
        <div className='cart-summary-body'>
            <h5>Subtotal</h5>
            <h2>GHC {totals}</h2>
        </div>
       
        <button onClick={(()=>{navigate("/customer/account/login")})}>CHECKOUT GHC {totals}</button>
        </div>
        </div>)
        }
    

        </Header>
        <Footer/>
    </div>
  )
}

export default Cart

