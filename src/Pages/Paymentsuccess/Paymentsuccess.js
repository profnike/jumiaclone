import React from 'react'
import '../Paymentsuccess/Payment.css'
import {ReactComponent as Success} from '../../Asset/Success-icon.svg'
import {  useNavigate } from 'react-router-dom'


const Paymentsuccess = () => {
   // const{clearallitem}=useContext(cartContext)
  const navigate=useNavigate()
 
  return (
    
        <div className="paymentsuccess">

      <div className="payment-inner">

       <Success/>
   <h3>PAYMENT SUCCESSFULL</h3>
   <div className="return-home" onClick={(()=>{
     navigate("/")})}>BACK TO HOME</div>
   
    </div>
    </div>
      
  
  )
}

export default Paymentsuccess
