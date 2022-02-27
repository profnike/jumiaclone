import { FaRegUser } from "react-icons/fa";

import { FaChevronDown } from "react-icons/fa";
import { FiHelpCircle } from "react-icons/fi";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";


import "../Header/Header.css"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Header({children}){
  
    const [valobj,setValobj]=useState({styl:{top:"auto",backgroundColor:'white',maxWidth:"100%"}, valu:false})
   
  useEffect(()=>{
       
         window.addEventListener('scroll',func)
         function func(){
           
             if  (window.scrollY>5){
                    
                    setValobj({styl:{top:0,backgroundColor:'white',maxWidth:"100%"}, valu:true})
                    
             }
      
           
         }
        
  },[])
   
    window.addEventListener('scroll',funcy)
    function funcy(){
    if(window.scrollY<5 && valobj.valu===true )
       {
            setValobj({styl:{top:"auto",backgroundColor:'white',maxWidth:"100%"}, valu:false})
    
      }
    }

   
    return(
        <div className="header">
           <div className="upper-first">

           </div>
           <div className="sell-and-options">
           <div className="sell-on-jumia-inner">
              <Link to="/" className="link-sell"> 
              <div className="sell-on-jumia">
                 
                   <div className="star-div">
               <AiOutlineStar/>
               </div>
                   <p>Sell on Jumia</p>
                  
               </div>
               </Link>
               <div className="other-options">
                   <p>JUMIA</p>
                   <p>FOOD</p>
                   <p>PAY</p>
                   <p>PROMO</p>
                   <p>LOGISTICS</p>
               </div>
               </div>
           </div>
           <div className="jumia-various-options"  >
               <div className="jumia-various-options-inner"  >
                <h1>JUMIA</h1>
                <div className="search-input-div-home">
                <BiSearchAlt2/>
                <input  placeholder="Search products,brand and categories" type="search"/>
                </div>
                <button>SEARCH</button>
               <div className="options-and-icons"> <FaRegUser/><p>Account</p><FaChevronDown/></div>
               <div className="options-and-icons"><FiHelpCircle/><p>Help</p><FaChevronDown/></div>
               <div className="options-and-icons"><AiOutlineShoppingCart/><p>Cart</p></div>
               </div>
               </div>
               {children}
           
        </div>

    )


}
export default Header