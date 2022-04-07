import React from "react";
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
                    <h3>New To Jumia</h3>
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
                    image
                    <div>
                        <h4>DOWNLOAD JUMIA FREE APP</h4>
                        <p>Get access to exclusive offers!</p>
                        </div>
                        </div>
                        <div className="apple-google-footer">
                            <button>APPLE</button>
                            <button>GOOGLE</button>
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
         <h6>MAKE MONEY WITH JUMIA</h6>
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
            </div>
            <div className="lower-footer-two-items">
            <h5>PAYMENT METHODS</h5>
            </div>
            </div>

            <div className="lower-foot-inner-three">
                <div className="lower-foot-inner-three-item" >
                    <p>FOOD</p>
                   
                </div>
                <div className="lower-foot-inner-three-item" >
                    <p>PAY</p>
                </div>
                <div className="lower-foot-inner-three-item" >
                    <p>PRIME</p>
                </div>
                <div className="lower-foot-inner-three-item" >
                    <p>LOGISTICS</p>
                </div>
               
            </div>
            </div>
            </div>
        </div>
    )
}
export default Footer