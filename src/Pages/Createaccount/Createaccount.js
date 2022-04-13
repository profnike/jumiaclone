import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import "../Createaccount/Createaccount.css"

const Createaccount = () => {
  const[first, setFirst]=useState("")
  const[last, setLast]=useState("")
  const[password, setPassword]=useState("")
  const[email, setEmail]=useState("")
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
            <div>
            <input placeholder='Password' type="password" onChange={(e)=>{setPassword(e.target.value)}} required/>
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
              <p>I accept the <span>Terms & Conditions</span> and Privacy and Cookie Notice</p>
            </div>
            <div className='checkbox-and-parag'>
              <p>I want to receive Jumia Newsletters with best deals and offers</p>
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
