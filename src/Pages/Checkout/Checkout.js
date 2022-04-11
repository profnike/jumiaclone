import React, {useContext} from 'react'
import Header from '../../Components/Header/Header'
import { useState } from 'react'
import cartContext from '../../Context/Cart/CartContext';
import '../Checkout/Checkout.css'

const Checkout = () => {
    const{cartItems}=useContext(cartContext)
    const[address, setAddress]=useState(true)
    const[payment, setPayment]=useState(false)
    const[delivery, setDelivery]=useState(false)
    const[feeval, setFeeval]=useState(false)
    const[addcolor, setaddcolor]=useState({})
    const[localfee,setLocalfee]=useState("N.A.")
    const[totalfee,settotalfee]=useState("N.A.")
    const[pick, setPick]=useState(false)
    const[home, setHome]=useState(false)
    const[deliverycolor, setdeliverycolor]=useState({})

    let amount= 0
    let total=0
    let totals=0
    cartItems.map((val)=>{
       
        let qty=val.quantity
        total+= (val.amount*qty)
         totals=total.toFixed(2);
   

    })
    let feetotals = 34.22+ (+totals)
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
                        <button onClick={(()=>{setAddress(false);setaddcolor({backgroundColor:"green"})})}>SAVE AND CONTINUE</button>
                    </section>
                    </div>) :
                    (<div className='checkout-areas'>
                         <section className='section-one'>
                        <p style={addcolor} className='circle-one'></p>
                        <div className='header-change-checkout'>
                        <h5>1. ADDRESS DETAILS</h5>
                        <p onClick={(()=>{setAddress(true)})}>CHANGE</p>
                        </div>
                    </section>
                    <section className='section-two'>
                        Myname is great
                        </section>
                    </div>)
                }
                    <div className='checkout-areas'>
                    {delivery===true ? 
                    (<div>
                    <section className='section-one'>
                        <p  className='circle-one'></p>
                        <h5>2. DELIVERY METHOD</h5>
                        </section>
                       
                       
                        <section className='section-two'>
                        <h5 className='how-do-you'>How do you want your order delivered ?</h5>
                        <div className='input-div-delivery-method'>
                        <input onClick={(()=>{setFeeval(true);setPick(true);setHome(false);setLocalfee("N.A."); settotalfee("N.A.")})} name="delivery" type="radio" alt=""/>
                        <div>
                            <h5>Collect at any of our Pickup Stations(Cheaper Fees)</h5>
                            <p>Ready for pickup between <span>Thursday 21 Apr</span> and  
                            <span> Wednesday 27 Apr</span> with cheaper shopping fees</p> 
                            <h4 className='pick-up-checkout'>SELECT PICKUP STATION</h4>
                            </div>
                            </div>
                            <div className='input-div-delivery-method-next'>
                        <input onClick={(()=>{setFeeval(true);setPick(false);setHome(true);setLocalfee("GHC 34.22"); settotalfee(`GHC  ${feetotals}`)})} name="delivery" type="radio" alt="" />
                        <div>
                            <h5>Home & Office Delivery</h5>
                            <p> Normally delivered between <span className='span'>Thursday 21 Apr</span> and 
                            <span className='span'> Wednesday 27 Apr</span>. Please check exact dates at the Checkout page for 
                            <span id='amount-for-in-checkout'> GHC 34.22 </span></p>
                            <div className='note-in-checkout'> 
                            *Living in Greater Accra <span>JUMIA PRIME </span> Members enjoy Free Delivery on all Jumia Local Items 
                            (excluding bulky items) and Jumia Food Orders


                        <p className='note-and-column'>Note:</p>
                       <p> *Items may be shipped and attempted SEPARATELY for deliveries as they become 
                        available.
                        </p>

                        <p>
                        *Please make sure you entered your home address with the full necessary 
                        details so that you may stay safe and expect delivery at your doorstep.
                        </p>

                            </div>
                        </div>
                        </div>
                       
                       
                        <div className='subtotal-amt-checkout left-region'>
                            <div>
                            <p>Subtotal</p>
                            <p>GHC {totals}</p>
                            </div>
                            
                               <div>
                                      <p>Local Delivery Fees</p>
                                      <h5 className='fees-h5'>{localfee}</h5>
                                  </div>
                           


                        </div>
                       <div className='total-and-full-amount'>
                            <b><p>Total</p></b>
                                      <h5 className='fees-h5'>{totalfee}</h5>
                        </div>
                        </section>
                        <p className='voucher-checkout'> You will be able to add a voucher in the next step</p>
                        <div className='button-div-checkout'>
                        <button onClick={(()=>{setdeliverycolor({backgroundColor:"green"});setDelivery(false)})} className='proceed-button-checkout'>PROCEED TO NEXT STEP</button>
                        </div>
                        </div>):
                        (<div>
                            <section className='section-one'>
                        <p style={deliverycolor} className='circle-one'></p>
                        <div className='header-change-checkout'>
                        <h5>2. DELIVERY METHOD</h5>
                        <p onClick={(()=>{setDelivery(true)})}>CHANGE</p>
                        </div>
                        </section>
                        <section className='section-two'>
                            {
                                pick===true ?(
                                    <div className='input-div-delivery-methods'>
                                        <h5>Collect at any of our Pickup Stations(Cheaper Fees)</h5>
                            <p>Ready for pickup between <span>Thursday 21 Apr</span> and  
                            <span> Wednesday 27 Apr</span> with cheaper shopping fees</p> 

                                    </div>
                                ):(
                                    <div className='input-div-delivery-method-nexts' >
                                        
                                        <h5>Home & Office Delivery</h5>
                                       
                            <p> Normally delivered between <span className='span'>Thursday 21 Apr</span> and 
                            <span className='span'> Wednesday 27 Apr</span>. Please check exact dates at the Checkout page for 
                            <span id='amount-for-in-checkout'> GHC 34.22 </span></p>
                                    </div>
                                )
                            }

                        </section>
                        
                        </div>
                        )}
                        
                        
                    
                    </div>
                   
                    <div className='checkout-areas'>
                    <section className='section-one'>
                        <p  className='circle-one'></p>
                        <h5>3. PAYMENT METHOD</h5>
                        </section>
                        <section className='section-two'>
                        <h5>How do you want to pay for your order ?</h5>
                        <div className='input-text-payment-option'>
                            <input name="payment" type="radio" alt="" checked={true}/>
                            <div className='image-payment-option'>
                                <p>Pay Now 10% off up to 20 GHS Instant Discount. Pay safe Pay Easy.</p>
                            </div>
                        </div>
                        <div className='input-text-payment-option'>
                            <input name="payment" type="radio" alt=""/>
                            <div className='image-payment-option'>
                            <p>Jumia Sales Agent.</p>
                            </div>
                        </div>
                        <div className='input-text-payment-option'>
                            <input name="payment" type="radio" alt=""/>
                            <div className='image-payment-option'>
                            <p>Bank Deposit/Transfer </p>
                            </div>
                        </div>
                        </section>

                    </div>
                </div>
                <div className='inner-checkout-right'>
                    <div className='inner-checkout-right-upper'>
                        <h5>YOUR ORDER</h5>
                        <div className='cartitems-mapped-in-checkout-container'>
                        {cartItems.map((val)=>{ 
                           
                            return(
                        <div className='cartitems-mapped-in-checkout'>
                            <div className='image-in-mapped-checkout'>
                           
                                <img src={val.image} alt=""/>
                            </div>
                            <div>
                                <p>{val.name}</p>
                                <p className='amount-map-checkout'>GHC {val.amount}</p>
                                <p>Qty: {val.quantity}</p>
                            </div>
                        
                        </div>
                        )
                        })}
                        </div>
                        <div className='subtotal-amt-checkout'>
                            <div>
                            <p>Subtotal</p>
                            <p>GHC {totals}</p>
                            </div>
                            
                                {
                                  feeval ? (<div>
                                      <p>Local Delivery Fees</p>
                                      <h5 className='fees-h5'>{localfee}</h5>
                                  </div>): ""  
                                }
                           


                        </div>
                        {feeval ? (<div className='total-and-full-amount'>
                            <b><p>Total</p></b>
                                      <h5 className='fees-h5'>{totalfee}</h5>
                        </div>):""}
                        
                        <h5 className='modify-cart-checkout'>MODIFY CART</h5>
                    </div>
               
                    <div className='inner-checkout-right-lower'>
                        <h5>NEED HELP ?</h5>
                        <p>Contact an expert to support you</p>
                        <button>LIVE CHAT</button>

                    </div>
                </div>
            </div>
        </div>
      </Header>
    </div>
  )
}

export default Checkout
