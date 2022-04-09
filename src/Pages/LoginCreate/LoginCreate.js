import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import { useNavigate } from 'react-router-dom'
import '../LoginCreate/LoginCreate.css'


const LoginCreate = () => {
    const navigate=useNavigate()
  return (
    <div>
        <Header>
        <div className='logincreate-container'>
            <div className='login-logincreate'>
                <h3>Login</h3>
                <div className='input-container'>
            <input placeholder='Email'/>
            <input placeholder='Password'/>
            </div>
            <div className='remember-forgot'>
                <p>Remember me</p>
                <p className='forgot'>Forgot your password?</p>
            </div>
            <button>LOGIN</button>
            </div>
            <div className='signup-logincreate'>
                <h3>Create your jumia account</h3>
                <p>Create your Jumia customer account in just a
                     few clicks! You can register either using your e-mail address or through
                      your Facebook account.</p>
                      <button onClick={(()=>{navigate("/Createaccount")})}>CREATE AN ACCOUNT VIA ACCOUNT</button>
            </div>
        </div>
        <Footer/>
        </Header>
    </div>
  )
}

export default LoginCreate
