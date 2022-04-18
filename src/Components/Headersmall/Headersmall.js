import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import cartContext from "../../Context/Cart/CartContext";
import { useContext } from "react";
import "../Headersmall/Headersmall.css"
import { useNavigate} from "react-router-dom";



const Headersmall = () => {
    const navigate= useNavigate()
    const {cartItems} =useContext(cartContext)
    let amount= 0
    cartItems.forEach((val)=>{
        
        
        amount+= val.quantity
       
   

    })
  return ( 
  
    <div className='header-main-div'>
        <div className='upper-header'>
        <div className='header-corners'>
            <div className='hamb-icon-small-header icon-smallheader'><GiHamburgerMenu/></div>
            <p>JUMIA</p>
        </div>

        <div  className='header-corners'>
            <div className='acc-icon-small-header icon-smallheader'><FaRegUser/></div>
            <div className='cart-and-number-smallheader'>
                {/* <div className='icon-smallheader'>
            <AiOutlineShoppingCart/>
            </div> */}
            <div onClick={()=>{navigate("/Cart")}} ><div className='icon-smallheader'><AiOutlineShoppingCart/> </div>
            
           {cartItems.length > 0 &&<div className='number-small-header'> {amount} </div> }</div>
                
                   
              
            </div>
        </div>

        </div>
        <div  className='lower-header'>
            <div className='icon-input-small-header'>
            <div className='search-icon-smallheader'>
                < BiSearchAlt2/>
                </div> 
         <input placeholder='Search products, brands and categories'/>
        
        </div>
        </div>
      
    </div>
  )
}

export default Headersmall
