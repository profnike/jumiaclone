import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import { BsEyeSlash } from "react-icons/bs";
import { BsEye } from "react-icons/bs";
import "../Createaccount/Createaccount.css"

const Createaccount = () => {
  const[first, setFirst]=useState("")
  const[last, setLast]=useState("")
  const[password, setPassword]=useState("")
  const[email, setEmail]=useState("")
  const[revconc,setRevconc]=useState("password")
    const[passimage,setPassimage]=useState({display:"none"})
    const[textimage,setTextimage]=useState({display:"flex"})
  const navigate=useNavigate()

  function next(){
   
    if( (email!=="")&&(password!=="")&&(last!=="")&&(first!=="")){
      let user={email,password,last,first}
      localStorage.setItem("jumia-user", JSON.stringify(user))
      navigate("/onepage/checkout/address")
      // if((localStorage.getItem("user")==null)){
      //   localStorage.setItem("user", JSON.stringify(user))}
      //   else{ localStorage.setItem("user", JSON.stringify(user))}
       
      

    }
    else{}
  }
  return (
   
   
    <div>
      <Header>
          <div className='createaccount-container'>
            <h5>Create Account</h5>
            <div className='create-inner-input-container'>
            <div className='create-input-flex'>
            <div>
              <input placeholder='First Name'type="name" onChange={(e)=>{setFirst(e.target.value)}} required/>
            </div>
            <div>
            <input placeholder='Email' type="email" onChange={(e)=>{setEmail(e.target.value)}} required/>
             
            </div>
            </div>
            <div className='create-input-flex inner-input-right'>
            <div>
            <input placeholder='Last Name' type="name" onChange={(e)=>{setLast(e.target.value)}} required/>
            </div>
            <div className='login-password-input-div-create-account'>
            <input placeholder='Password' type={revconc} onChange={(e)=>{setPassword(e.target.value)}} required/>
            <div className='eye-div' style={textimage} onClick={(()=>{setRevconc("text");setPassimage({display:"flex"});setTextimage({display:"none"})})}>
            <BsEyeSlash/>
            </div>
            <div className='eye-div' style={passimage} onClick={(()=>{setRevconc("password");setTextimage({display:"flex"});setPassimage({display:"none"})})}>
            <BsEye/>
            </div>
            </div>
            </div>
            </div>
            <div className='prefix-input-create'>
              <div className='pref-num-create'>
              <p>Prefix</p>
              <p className='create-num'>+233</p>
              </div>
              <input placeholder='Phone Number (optional)'/>
            </div>
            <div className='checkbox-and-parag'>
            <input type="checkbox"/> <p>I accept the <span>Terms & Conditions</span> and Privacy and Cookie Notice</p>
            </div>
            <div className='checkbox-and-parag'>
            <input type="checkbox"/><p>I want to receive Jumia Newsletters with best deals and offers</p>
            </div>
            <button onClick={next}>CREATE ACCOUNT</button>
            <div className='already-have-acct-div'>
            <p>Already have an account</p>
            <h5 onClick={(()=>{navigate("/customer/account/login")})} >LOGIN</h5>
            </div>
          </div>
      </Header>
      <Footer/>
    </div>
  )
}

export default Createaccount
