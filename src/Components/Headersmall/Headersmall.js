import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import '../Headersmall/Headersmall.css'


const Headersmall = () => {
  return ( 
  
    <div className='header-main-div'>
        <div className='upper-header'>
        <div className='header-corners'>
            <div className='hamb-icon-small-header icon-smallheader'><GiHamburgerMenu/></div>
            <h5>JUMIA</h5>
        </div>

        <div  className='header-corners'>
            <div className='acc-icon-small-header icon-smallheader'><FaRegUser/></div>
            <div className='cart-and-number-smallheader'>
                <div className='icon-smallheader'>
            <AiOutlineShoppingCart/>
            </div>
            <div className='number-small-header'>1</div>
            </div>
        </div>

        </div>
        <div  className='lower-header'>
            <div className='icon-input-small-header'>
            <div className='search-icon-smallheader'>
                < BiSearchAlt2/>
                </div> 
         <input placeholder='Search'/>
        
        </div>
        </div>
      
    </div>
  )
}

export default Headersmall
