import React from 'react'
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

import '../Footersmall/Footersmall.css'

const Footersmall = () => {
  function Goup(){
       
    window.scrollTo({top:0, behavior:'smooth'})
}
  return (
    <div className='footsmall-container'>
      <div className='back-to-tp-small'>
        <MdOutlineKeyboardArrowUp/>
          <h6 onClick={Goup}>BACK TO TOP</h6>
      </div>
      <div className='mid-foooter-small'>
          <h6>HELP CENTER</h6>
          <h6 className='excep-small'>TERMS & CONDITIONS</h6>
          <h6>REPORT A PRODUCT</h6>
      </div>
      <div className='lower-para-smallscreen'><p >All Rights Reserved</p></div>
    </div>
  )
}

export default Footersmall
