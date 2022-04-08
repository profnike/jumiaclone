import React from 'react'
import cartContext from '../../Context/Cart/CartContext';
import { useContext } from 'react';
import '../CartItem/CartItem.css'

const CartItem = ({item}) => {
  
    const{cartItems}=useContext(cartContext)
  return (
    <div className='container-cart-content'>
      <div className='upper-section-cart'>
                {/* <h5>Cart ( {cartItems.length} )
               </h5> */}
            </div>
            <div className='lower-section-cart'>
            <div className='lower-section-cart-imageamount'>
            <div className='lower-section-cart-imageamount-left'>
                <img src={item.image} alt=""/>
                {item.name}
            </div>
            <div>
                <div>{item.amount}</div>
                <div className='previous-amt-cart'>{item.previous}</div>
            </div>
            </div>
            <div className='lower-section-second'>
            <div>
                <h5>REMOVE</h5>
            </div>
            <div>
                <span>-</span>
                1
                <span>+</span>
            </div>
            </div>
            </div>

    </div>
  )
}

export default CartItem
