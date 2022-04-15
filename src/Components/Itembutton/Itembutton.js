import React, { useContext } from 'react'
import '../Itembutton/Itembutton.css'
import cartContext from "../../Context/Cart/CartContext";

const Itembutton = ({val}) => {
  const{addToCart}=useContext(cartContext)
  const{reduceItem}=useContext(cartContext)
   
    
    function addfunc(){
      addToCart(val);
      // localStorage.setItem("cart", JSON.stringify(cartItems))

    }
    
  return (
    
    <div className="item-present-in-cart">
                                    <p onClick={()=>reduceItem(val)} className="color-orange" >-</p>
                                    <p>{val.quantity}</p>
                                    
                                    <p onClick={ addfunc} className="color-orange">+</p>
                                </div>
  )
}

export default Itembutton
