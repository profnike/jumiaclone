import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaCoins } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

import { BsInstagram} from "react-icons/bs";
import { BsTwitter} from "react-icons/bs";
import { SiVisa } from "react-icons/si";
import { RiMastercardLine } from "react-icons/ri";
import {BsCart4 } from "react-icons/bs";
import { BsApple } from "react-icons/bs";

import '../Footer/Footer.css'
function Footer(){
    return(
        <div className="Footer-container">
            <div className="footer-inner-body">
            <div className="upper-footer">
                <div className="footer-category-one">
                <h2>JUMIA</h2>
                </div>
                <div className="footer-category-two">
                <h5>New To Jumia ?</h5>
                    <p>Subscribe to our newsletter to get updates on our latest offers!</p>
                    <div className="input-button-footer">
                    <input placeholder="Enter E-mail Address"/>
                    <button>
                        MALE
                    </button>
                    <button>
                       FEMALE
                    </button>
                    </div>
                </div>
                <div className="footer-category-three">
                    <div>
                        <div className="image-jumia-free-footer">
                   <div className="footer-orange-basket">
                    <BsCart4/>
                   </div>
                    <div>
                    <h5>DOWNLOAD JUMIA FREE APP</h5>
                        <p>Get access to exclusive offers!</p>
                        </div>
                        </div>
                        <div className="apple-google-footer">
                            <div className="apple-google-footer-catg" ><BsApple/><div className="get-it-google-footer"><p className="get-it-except">Download on the </p><p>APP STORE</p></div></div>
                            <div className="apple-google-footer-catg"> <FaGooglePlay/><div className="get-it-google-footer"><p className="get-it-except">GET IT ON</p><p> GOOGLE</p></div></div>
                        </div>

                    </div>
                </div>

            </div>
            </div>
            <div className="lower-footer">
                <div className="lower-foot-inner">
                    <div className="lower-foot-inner-one">
        <div className="lower-footer-catg">
            <h5>LET US HELP YOU</h5>
          
           <p>Help Center</p>
           <p>How to buy on Jumia</p>
           <p>Delivery timelines and fees</p>
           <p>Return Policy</p>
           <p>Corporate and Bulk Purchases</p>
           <p>Report a Product</p>
        </div>
        <div className="lower-footer-catg">
        <h5>ABOUT JUMIA GHANA</h5>
       <p> About us</p>
       <p>Testimonials</p>
       <p>Jumia careers</p>
       <p>Terms and Conditions</p>
       <p>Privacy and Cookie Notice</p>
       <p>Stay informed about Corona virus</p>
    <p>Stay Safe</p>
    <p>Ship your products with Jumia</p>
    <p>Black Friday</p>
        </div>
        <div className="lower-footer-catg">
         <h5>MAKE MONEY WITH JUMIA</h5>
         <p>Sell on Jumia</p>
         <p>Service charges</p>
         <p>Become a Sales Consultant</p>
         <p>Become a Logistics Service Partner</p>
         </div>
        <div className="lower-footer-catg footer-countries">
        <h5>JUMIA INTERNATIONAL</h5>
       
        <div className="lower-footer-countries">
            <p>  Algerie</p>
            <p>Nigeria</p>
        </div>
        <div className="lower-footer-countries">
            <p>  Côte d'Ivoire</p>
            <p>Senegal</p>
        </div>
        <div className="lower-footer-countries">
            <p>  Egypt</p>
            <p>Tunisia</p>
        </div>
        <div className="lower-footer-countries">
            <p>  Kenya</p>
            <p>Uganda</p>
        </div>
        <div className="lower-footer-countries">
            <p> Maroc</p>
            <p></p>
        </div>
      


        </div>
        </div>
        <div className="lower-foot-inner-two">
            <div className="lower-footer-two-items">
            <h5>JOIN US ON
            </h5>
            <div className="lower-footer-two-icons"> 
            <div>
            <FaFacebookF/></div>
            <div><BsInstagram/></div>
            <div><BsTwitter/></div>
            </div>
            </div>
            <div className="lower-footer-two-items">
            <h5>PAYMENT METHODS</h5>
            <div className="lower-footer-two-icons"> 
            <div>
            <FaCoins/></div>
            <div><SiVisa/></div>
            <div><RiMastercardLine/></div>
            </div>
           
            </div>
            </div>

            <div className="lower-foot-inner-three">
                <div className="lower-foot-inner-three-item" >
                <h5>FOOD</h5>
                   
                </div>
                <div className="lower-foot-inner-three-item" >
                <h5>PAY</h5>
                </div>
                <div className="lower-foot-inner-three-item" >
                <h5>PRIME</h5>
                </div>
                <div className="lower-foot-inner-three-item" >
                    <h5>LOGISTICS</h5>
                </div>
               
            </div>
            </div>
            </div>
        </div>
    )
}
export default Footer