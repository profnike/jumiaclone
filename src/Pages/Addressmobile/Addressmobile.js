import React,{ useEffect,useRef} from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import cartContext from '../../Context/Cart/CartContext';
import {BsXLg } from "react-icons/bs";

import '../Addressmobile/Addressmobile.css'

const Addressmobile = () => {
    // const{cartItems}=useContext(cartContext)
    // const[address, setAddress]=useState(true)
    // const[payment, setPayment]=useState(false)
    // const[delivery, setDelivery]=useState(false)
    // const[feeval, setFeeval]=useState(false)
    // const[addcolor, setaddcolor]=useState({})
    // const[localfee,setLocalfee]=useState("N.A.")
    // const[totalfee,settotalfee]=useState("N.A.")
    // const[pick, setPick]=useState(false)
    // const[home, setHome]=useState(false)
    // const[deliverycolor, setdeliverycolor]=useState({})
    const[first, setFirst]=useState("")
    const[last, setLast]=useState("")
    const[add, setAdd]=useState("")
    const[phone, setPhone]=useState("")
    const[state, setState]=useState("")
    const[city, setCity]=useState("")
    // const[addret,setAddret]=useState(false)
    // const[users,setUsers]=useState(false)
    const user=useRef()
    const navigate=useNavigate()
    useEffect(()=>{
    user.current = JSON.parse(localStorage.getItem('jumia-user'));
    
if(user!==null){
setFirst(user.current.first)
setLast(user.current.last)
}
else{}
},[])

function addmobfunc(){
    if((first!=="")&&(last!=="")&&(add!=="")&&(state!=="")&&(city!=="")&&(phone!=="")){
      
        let addr={first,last,add,state,city,phone}
        localStorage.setItem("addr-details", JSON.stringify(addr))
        navigate("/checkout/multistep/shipping/method")
     
        //   setAddress(false);
        //   setaddcolor({backgroundColor:"green"})
        //   setDelivery(true)
        //   setUsers(true)
    }
    else{}
}
  return (
    <div>
        <div className='header-addressmobile'>
            <div onClick={(()=>{navigate("/Cart")})}><BsXLg/></div>
            <h5>Address Book</h5>
            </div>
            <div className='body-addressmobile'>
                <div className='addr-details-required'>
                    <h5>ADDRESS DETAILS</h5>
                    <p>*Required fields</p>
                    </div>
                    <section className='section-two'>
                        <div className='checkout-sectwo-input'>
                            <div className='checkout-sectwo-input-div checkout-sectwo-input-div-left'>
                                <p>First Name*</p>
                            <input value={first} onChange={(e)=>{setFirst(e.target.value)}} />
                            </div>
                            
                            <div className='checkout-sectwo-input-div'>
                                <p>Last Name*</p>
                            <input value={last} onChange={(e)=>{setLast(e.target.value)}}/>
                            </div>
                        </div>
                        <div >
                            <p>Mobile phone number*</p>
                            <div className='code-and-phone-checkout'>
                                <div className='mobile-code-checkout'>
                                    +233
                                </div>
                            <input onChange={(e)=>{setPhone(e.target.value)}} placeholder='Enter number in format 888888888'/>
                            </div>
                        </div>
                        <div className='parag-textarea'>
                            <p>Address*</p>
                            <textarea onChange={(e)=>{setAdd(e.target.value)}} placeholder='Street Name/Building/ Apartment No/ Floor'/>
                        </div>
                        <div className='parag-textarea-state'>
                            <p>State/Region*</p>
                            <input onChange={(e)=>{setState(e.target.value)}}/>
                        </div>
                        <div className='parag-textarea-city'>
                            <p>City*</p>
                            <input onChange={(e)=>{setCity(e.target.value)}} />
                        </div>
                       
                        <button onClick={ addmobfunc }>SAVE AND CONTINUE</button>
                    </section>
               
            </div>
       
      
    </div>
  )
}

export default Addressmobile
