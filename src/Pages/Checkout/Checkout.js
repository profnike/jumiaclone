import React from 'react'
import Header from '../../Components/Header/Header'
import { useState } from 'react'
import '../Checkout/Checkout.css'

const Checkout = () => {
    const[address, setAddress]=useState(true)
    const[payment, setPayment]=useState(false)
    const[delivery, setDelivery]=useState(false)
  return (
    <div>
        <Header>
        <div className='checkout-inner-container'>
            <div className='inner-checkout'>
                <div className='inner-checkout-left'>
                    {address===true?
                    (<div className='checkout-areas'>
                    <section className='section-one'>
                        <p className='circle-one'></p>
                        <h5>1. ADDRESS DETAILS</h5>
                    </section>
                    <section className='section-two'>
                        <div className='checkout-sectwo-input'>
                            <div className='checkout-sectwo-input-div checkout-sectwo-input-div-left'>
                                <p>First Name*</p>
                            <input />
                            </div>
                            
                            <div className='checkout-sectwo-input-div'>
                                <p>Last Name*</p>
                            <input />
                            </div>
                        </div>
                        <div >
                            <p>Mobile phone number*</p>
                            <div className='code-and-phone-checkout'>
                                <div className='mobile-code-checkout'>
                                    +233
                                </div>
                            <input placeholder='Enter number in format 888888888'/>
                            </div>
                        </div>
                        <div className='parag-textarea'>
                            <p>Address*</p>
                            <textarea placeholder='Street Name/Building/ Apartment No/ Floor'/>
                        </div>
                        <div className='parag-textarea-state'>
                            <p>State/Region*</p>
                            <input/>
                        </div>
                        <div className='parag-textarea-city'>
                            <p>City*</p>
                            <input />
                        </div>
                        <p>*Required</p>
                        <button onClick={(()=>{setAddress(false)})}>SAVE AND CONTINUE</button>
                    </section>
                    </div>) :
                    (<div>
                         <section className='section-one'>
                        <p className='circle-one'></p>
                        <h5>1. ADDRESS DETAILS</h5>
                    </section>
                    <section className='section-two'>
                        Myname is great
                        </section>
                    </div>)
                }
                    <div className='checkout-areas'>
                    <section className='section-one'>
                        <p className='circle-one'></p>
                        <h5>2. DELIVERY METHOD</h5>
                    </section>
                    </div>
                </div>
                <div className='inner-checkout-right'></div>
            </div>
        </div>
      </Header>
    </div>
  )
}

export default Checkout
