import { FaRegUser } from "react-icons/fa";

import { FaChevronDown } from "react-icons/fa";
import { FiHelpCircle } from "react-icons/fi";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import cartContext from "../../Context/Cart/CartContext";
import { useContext } from "react";
import "../Header/Header.css"
import { Link,useNavigate} from "react-router-dom";

import { useEffect, useState } from "react";


function Header({children}){
    // const{addlocalstorage}=useContext(cartContext)
    
    const navigate= useNavigate()
    const {cartItems} =useContext(cartContext)
    const [valobj,setValobj]=useState({styl:{top:"auto",backgroundColor:'white',maxWidth:"100%"}, valu:false})
   
    let amount= 0
    cartItems.forEach((val)=>{
        
        
        amount+= val.quantity
       
   

    })
    // setQty(amount)
    // console.log(amount)
    // let cart = JSON.parse(localStorage.getItem('cart'));
  useEffect(()=>{
    // let cart = JSON.parse(localStorage.getItem('cart'));
    // if(cart!==null){
    //     cart.map((val,ind)=>{
    //         // addlocalstorage(val)
    //     })
        
    //     // cartItems=cart
    //     console.log(cartItems)
    //     console.log(cart)
    // }
    // else{}
        //  window.addEventListener('scroll',func)
        //  function func(){
           
        //      if  (window.scrollY>5){
                    
        //             setValobj({styl:{top:0,backgroundColor:'white',maxWidth:"100%"}, valu:true})
                    
        //      }
      
           
        //  }
        
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
           {/* <div className="upper-first">

           </div> */}
           <div className="sell-and-options">
           <div className="sell-on-jumia-inner">
              <Link to="/" className="link-sell"> 
              <div className="sell-on-jumia">
                 
                   <div className="star-div">
               <AiOutlineStar/>
               </div>
                   <span>Sell on Jumia</span>
                  
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
                <h1 onClick={(()=>{navigate("/")})} className="home-jumia-onclick">JUMIA</h1>
                <div className="search-input-div-home">
                <BiSearchAlt2/>
                <input  placeholder="Search products,brand and categories" type="search"/>
                </div>
                <button>SEARCH</button>
               <div className="options-and-icons"> <FaRegUser/><span>Account</span><FaChevronDown/></div>
               <div className="options-and-icons"><FiHelpCircle/><span>Help</span><FaChevronDown/></div>
               <div className="options-and-icons icon-cart-items-amount" onClick={()=>{navigate("/Cart")}}><div className="cart-image-div-header"><AiOutlineShoppingCart/></div><div>{cartItems.length > 0 && (<div className="item-count">
                   {amount }
                   
                   </div> ) }</div> <div className="cart-text">Cart</div></div>
               </div>
               </div>
               {children}
           
        </div>

    )


}
export default Header