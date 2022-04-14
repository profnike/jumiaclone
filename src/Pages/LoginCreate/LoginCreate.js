import React, { useState } from 'react'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import { useNavigate } from 'react-router-dom'
import { BsEyeSlash } from "react-icons/bs";
import { BsEye } from "react-icons/bs";
import '../LoginCreate/LoginCreate.css'


const LoginCreate = () => {
    const[display,setDisplay]=useState({visibility:"hidden"})
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const navigate=useNavigate()
    const[revconc,setRevconc]=useState("password")
    const[passimage,setPassimage]=useState({display:"none"})
    const[textimage,setTextimage]=useState({display:"flex"})
    function create(){
        let users=JSON.parse(localStorage.getItem('jumia-user'));
        if(users!==null){
            navigate("/onepage/checkout/address") 
        }
        else{navigate("/Createaccount")}
    }
    function loginfunc(){
        let logincheck=JSON.parse(localStorage.getItem('jumia-user'));
        if(logincheck!==null){
            if((logincheck.email===email)&&(logincheck.password===password)){
            navigate("/onepage/checkout/address")
        }
        else{setDisplay({visibility:"visible"})}
        }
        else{setDisplay({visibility:"visible"})}

    }
  return (
    <div>
        <Header>
        
        
        <div className='logincreate-container'>
        
        
            <div className='login-logincreate'>
                <h3>Login</h3>
                <div className='input-container'>
                    <div className='input-and-diplay-caution'>
            <input placeholder='Email' type="email" onChange={((e)=>{setEmail(e.target.value);setDisplay({visibility:"hidden"})})} />
            <p style={display}>Incorrect Email or Password</p>
            </div>
            <div className='input-and-diplay-caution input-below'>
                <div className='login-password-input-div'>
            <input placeholder='Password' type={revconc} onChange={((e)=>{setPassword(e.target.value);setDisplay({visibility:"hidden"})})}/>
            <div className='eye-div' style={textimage} onClick={(()=>{setRevconc("text");setPassimage({display:"flex"});setTextimage({display:"none"})})}>
            <BsEyeSlash/>
            </div>
            <div className='eye-div' style={passimage} onClick={(()=>{setRevconc("password");setTextimage({display:"flex"});setPassimage({display:"none"})})}>
            <BsEye/>
            </div>
           
            </div>
            <p style={display}>Incorrect Email or Password</p>
            </div>
            </div>
            <div className='remember-forgot'>
                <div className='remember-checkbox'>
                <input type="checkbox"/><p>Remember me</p>
                </div>
                <p className='forgot'>Forgot your password?</p>
            </div>
            <button onClick={loginfunc}>LOGIN</button>
            </div>
            <div className='signup-logincreate'>
              
                <h3>Create your jumia account</h3>
                <p>Create your Jumia customer account in just a
                     few clicks! You can register either using your e-mail address or through
                      your Facebook account.</p>
                     
                      
                      <button onClick={create}>CREATE AN ACCOUNT VIA ACCOUNT</button>
                     
                      
            </div>
        </div>
        <Footer/>
        </Header>
    </div>
  )
}

export default LoginCreate
