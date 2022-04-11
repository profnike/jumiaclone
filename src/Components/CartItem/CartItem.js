import React from 'react'
import cartContext from '../../Context/Cart/CartContext';
import { useContext } from 'react';
import '../CartItem/CartItem.css'
import Itembutton from '../Itembutton/Itembutton';
import { AiTwotoneDelete } from "react-icons/ai";


const CartItem = ({item}) => {
  
    const{cartItems}=useContext(cartContext)
    let value={}
    value=cartItems.find((valu)=>{
     return(
      valu.id===item.id
     )
     })
  return (
    <div className='container-cart-content'>
      <div>
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
            <div className='remove-from-cart-div'>
              <AiTwotoneDelete/>
                <h5 className='remove-from-cart'>REMOVE</h5>
            </div>
            <div className='button-div-cartitem'>
            <Itembutton val={value}/>
            </div>
            </div>
            </div>
            </div>
            
    </div>
  )
}

export default CartItem
