import Header from '../../Components/Header/Header'
import phone from '../../Asset/phone-jumia.png'
import sell from '../../Asset/sell-jumia.png'
import returns from '../../Asset/return-jumia.png'
// import jumiacenter from '../../Asset/jumia-home-one.jpg'
import delivery from '../../Asset/delivry-jumia.png'
import global from '../../Asset/global-jumia.png'
import prime from '../../Asset/prime-jumia.png'
import supers from '../../Asset/super-jumia.png'
import goodiesright from '../../Asset/goodiesright.jpg'
import goodiesthree from '../../Asset/goodies-three.jpg'
import goodiesfour from '../../Asset/goodies-four.jpg'
import goodiesleft from '../../Asset/goodiesleft.jpg'
import Carousell from '../../Components/Carousel/Carousel'
import phoneimg from '../../Asset/phone-acc.png'
// import Zoom from 'react-reveal/Zoom';
// import Reveal from 'react-reveal/Reveal';
import flashallone from '../../Asset/flash-all-one.jpg'
import flashalltwo from '../../Asset/flash-all-two.jpg'
import flashallthree from '../../Asset/flash-all-three.jpg'
import flashallfour from '../../Asset/flash-all-four.jpg'
import flashallfive from '../../Asset/flash-all-five.jpg'
import flashallsix from '../../Asset/flash-all-six.jpg'
import { useState } from 'react'
import { useRef } from 'react'

import {HiChevronRight } from "react-icons/hi";
import "../Home/Home.css"
import { useNavigate } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'


function Home(){
    let myRef=useRef()
    let navigate=useNavigate()
   
    let items=[
        {id:"00001",image:flashallone,
        amount:" 35.49",previous:"GHC 129.00",amtleft:"20 items left"},
        {id:"00002",image:flashalltwo,
        amount:" 35.49",previous:"GHC 129.00",amtleft:"20 items left"},
        {id:"00003",image:flashallthree,
        amount:" 35.49",previous:"GHC 129.00",amtleft:"20 items left"},
        {id:"00004",image:flashallfour,
        amount:" 35.49",previous:"GHC 129.00",amtleft:"20 items left"},
        {id:"00005",image:flashallfive,
        amount:" 35.49",previous:"GHC 129.00",amtleft:"20 items left"},
        {id:"00006",image:flashallsix,
        amount:" 35.49",previous:"GHC 129.00",amtleft:"20 items left"},
    ]
    let brands=[
        {image:flashallsix}, {image:flashallsix}, {image:flashallsix}, {image:flashallsix},
         {image:flashallsix}, {image:flashallsix}
    ]
    let phones=[
        {image:flashalltwo,name:"two"},{image:flashalltwo,name:"two"},{image:flashalltwo,name:"two"},
        {image:flashalltwo,name:"two"},{image:flashalltwo,name:"two"},{image:flashalltwo,name:"two"},
        {image:flashalltwo,name:"two"},{image:flashalltwo,name:"two"},{image:flashalltwo,name:"two"},
        {image:flashalltwo,name:"two"},{image:flashalltwo,name:"two"},{image:flashalltwo,name:"two"}
       
       
    ]
    
  
    return(
        <div className='main-home'>
           
           
<Header>

         
          <div className='home-container' >
              <div className='first-body-div'>
                  <div className='first-body-div-up'>
                      <div className='home-other-navigations'>
                          <ul>
                              <li>Supermarket</li>
                              <li>Phones & Tablets</li>
                              <li>Health & Beauty</li>
                              <li>Home & Office</li>
                              <li>Electronics</li>
                              <li>Computing</li>
                              <li>Fashion</li>
                              <li>Sporting Goods</li>
                              <li>Baby Products</li>
                              <li>Gaming</li>
                              <li>Automobile</li>
                              <li>Other categories</li>
                          </ul>

                      </div>
                      <div className='home-central-image'>
                          <Carousell className="carous"/>
                      </div>
                      <div className='home-top-right-area'>
                          <div className=' major-blocks-right-top home-top-right-area-first'>
                              <div className='head-and-parag-home-right'>
                                 <img className='home-top-img' src={phone} alt=""/>
                                  <div >
                                      <h4>HELP CENTER</h4>
                                      <p>How can we help you?</p>
                                  </div>
                              </div>
                              <div className='head-and-parag-home-right'>
                              <img className='home-top-img' src={returns} alt=""/>
                                  <div>
                                      <h4>EASY RETURNS</h4>
                                      <p>Up to 15 days</p>
                                  </div>
                                  </div>
                                  <div className='head-and-parag-home-right'>
                                  <img className='home-top-img' src={sell} alt=""/>
                                      <div>
                                      <h4>Sell on Jumia</h4>
                                      <p>Make more money</p>
                                      </div>
                                  </div>
                             
                             
                          </div>
                          <div className='major-blocks-right-top home-top-right-area-second'>
                              
                         
                         
                          <h3 className='top-right-anim'>
                          EVERYTHING MUST GO!
                         
                                  </h3>
                                 
                                  
                              <div className='top-right-sec-anim'>
                              <h3>Upto 80% off</h3>
                                <h4>1st to 3rd April</h4>
                            
                                  </div>
                             
                             
                           
                            
                          </div>
                      </div>

                  </div>
                 
                  <div className='first-body-div-down'>
                      <div className='first-body-div-down-div'>
                      <img src={delivery} alt=""/>
                          <p>Free Delivery</p>
                      </div>
                      <div className='first-body-div-down-div'>
                      <img src={supers} alt=""/>
                          <p>Super Saver Sales</p>
                      </div>
                      <div className='first-body-div-down-div'>
                      <img src={prime} alt=""/>
                          <p>Jumia Prime</p>
                      </div>
                      <div className='first-body-div-down-div'>
                      <img src={global} alt=""/>
                          <p>Jumia Global</p>
                      </div>

                  </div>
                  


              </div>
              <div className='second-body-div'>
                  <div className='second-body-div-header'>
                      <div className='flash-and-image'>
                      <img src={supers} alt=""/>
                          <p>Flash Sales</p>
                      </div>
                      <p>Time left: 14h :42m :55s</p>
                      <div className='seeall-and-icon-home'>
                          <p onClick={(()=>{navigate("/Flashsales")})} className="home-sellname">SEE ALL</p>
                          <div className='right-icon-home-page'>
                          {/* <AiOutlineRight/> */}
                          <HiChevronRight/>
                          </div>
                      </div>
                  </div>
                  
                  <div className='items-home'>
                 
          
                     
                
            {   items.filter((val,indx)=>{
                return(indx<6)
            })
                .map((val,ind)=>{
                    // ind<2
                    return(
                        
                        <ul onClick={(()=>{navigate(`about/${val.id}`)})} ref={myRef} className='list-container'  key={ind}>
                            <li><img src={val.image} alt=""/></li>
                            <li>{val.amount}</li>
                            <li className='previous-cancel-home'>{val.previous}</li>
                            <li>{val.amtleft}</li>
                        </ul>
                        
                    )


                })
            }
            
          
            
            
                  </div>

              </div>
             <div className='third-section'>
                 <div className='goodies-header'>
                 <h5>Don't Miss These Goodies!!</h5>
                 </div>
                 <div className='third-section-image-div'>
                     <div>
                         <img src={goodiesleft} alt=""/>
                     </div>
                     <div>
                     <img src={goodiesright} alt=""/>
                     </div>
                 </div>
                 <div className='third-section-image-div next-image-div-third-section'>
                     <div>
                         <img src={goodiesthree} alt=""/>
                     </div>
                     <div>
                     <img src={goodiesfour} alt=""/>
                     </div>
                 </div>

             </div>
             <div className='second-body-div'>
                  <div className='second-body-div-header'>
                      <div className='flash-and-image'>
                      <img src={supers} alt=""/>
                          <p>Flash Sales</p>
                      </div>
                      <p>Time left: 14h :42m :55s</p>
                      <div className='seeall-and-icon-home'>
                          <p onClick={(()=>{navigate("/Flashsales")})} className="home-sellname">SEE ALL</p>
                          <div className='right-icon-home-page'>
                          {/* <AiOutlineRight/> */}
                          <HiChevronRight/>
                          </div>
                      </div>
                  </div>
             <div className='items-home'>
                 
          
                     
                
                 {   items.filter((val,indx)=>{
                     return(indx<6)
                 })
                     .map((val,ind)=>{
                         // ind<2
                         return(
                             
                             <ul onClick={(()=>{navigate(`about/${val.id}`)})} ref={myRef} className='list-container'  key={ind}>
                                 <li><img src={val.image} alt=""/></li>
                                 <li>{val.amount}</li>
                                 <li className='previous-cancel-home'>{val.previous}</li>
                                 <li>{val.amtleft}</li>
                             </ul>
                             
                         )
     
     
                     })
                 }
                 
               
                 
                 
                       </div>
            
                 </div>
                 <div className='brand-div'>
                     <h5>TOP BRANDS</h5>
                     <div className='brand-images'>
                         {brands.map((val,ind)=>{
                             return(
                                 <div key={ind}>
                                     <img src={val.image} alt=""/>

                                 </div>
                             )

                         })}
                     </div>
                 </div>
                 <div className='third-section'>
                 <div className='goodies-header'>
                 <h5>Phones & Accessories</h5>
                 </div>
                 <div className='third-section-image-div full-image-home'>
                     <div>
                         <img src={phoneimg} alt=""/>
                     </div>
                     
                 </div>
                 </div>
                 <div className='smartphones-div'>
                 {phones.map((val,ind)=>{
                             return(
                                 <div key={ind}>
                                     <img src={val.image} alt=""/>
                                     <p>{val.name}</p>

                                 </div>
                             )

                         })}
                  </div>
                 <div className='second-body-div'>
                  <div className='second-body-div-header'>
                      <div className='flash-and-image'>
                      <img src={supers} alt=""/>
                          <p>Flash Sales</p>
                      </div>
                      <p>Time left: 14h :42m :55s</p>
                      <div className='seeall-and-icon-home'>
                          <p onClick={(()=>{navigate("/Flashsales")})} className="home-sellname">SEE ALL</p>
                          <div className='right-icon-home-page'>
                          {/* <AiOutlineRight/> */}
                          <HiChevronRight/>
                          </div>
                      </div>
                  </div>
                 
             <div className='items-home'>
                 
          
                     
                
                 {   items.filter((val,indx)=>{
                     return(indx<6)
                 })
                     .map((val,ind)=>{
                         // ind<2
                         return(
                             
                             <ul onClick={(()=>{navigate(`about/${val.id}`)})} ref={myRef} className='list-container'  key={ind}>
                                 <li><img src={val.image} alt=""/></li>
                                 <li>{val.amount}</li>
                                 <li className='previous-cancel-home'>{val.previous}</li>
                                 <li>{val.amtleft}</li>
                             </ul>
                             
                         )
     
     
                     })
                 }
                 
               
                 
                 
                       </div>
            
                 </div>

                 <div className='foot-write-up'>
                 <h5>Jumia Ghana – Biggest Online Shopping Mall</h5>
            <p>Online shopping has become a part of our everyday lives and has gotten easier
            over the years with Jumia. Everyone enjoys the stress-free way of shopping for authentic 
            products without leaving their homes. We always have amazing deals and special prices on all 
            our products. Our online store is updated with new and reduced prices of the latest fashion 
            trend, the latest mobile phones and accessories and others. Get everything from electronics, gaming, 
            sporting goods, clothing, computing, and many more amazing products from our website today.</p>

            <h5>Enjoy Amazing deals and discounts</h5>
            <p>Are you looking for an amazing online shopping experience? Jumia is the right place to be. Our easy platform makes online shopping for any products easy and fun. Shop for anything you need from women’s fashion, Men’s fashion, kid’s fashion to baby clothes and get the latest fashion from ABE, Anself, Aomei, Biden, Cagarny, Code Wear, Flangesio, and other well-known brands.
            </p>
            <h5>Get All products Online</h5>
            <p>Shop via Jumia Ghana today and get all your groceries from our online supermarket which is filled with the best goods. Browse through our website today and get original appliances for your home from a huge collection which includes washing machines, fridges, air conditioners, blenders, fryers, rice cookers, toasters, and a lot more.
            </p>
            
            <h6>Order high quality electronics Here </h6>
            <p>Our catalog for electronics offers you the highest quality products from Lenovo, LG, Samsung, and other trusted brands and sellers; get a new Nasco, TCL, Samsung, and Bruhm television for your living room today. Get the latest releases of phones and tablets from Apple, Infinix, Xiaomi, Samsung, Hotwav, Tecno, Realme, Huawei, iTel, Honor, and other well-known brands. Another amazing category available is one dedicated to computers, laptops and all their accessories. Buy printers, scanners, computer components and monitors from reliable brands such as HP, Dell, MacBook, and Asus to enhance your computer or laptop experience to the max! All these products are provided in Jumia Ghana for you to discover and shop and enjoy the fastest delivery anywhere in Ghana.
            </p>

            <h6>Select Authentic Beauty Products Today</h6>
            <p>Jumia offers you the best beauty products including top perfumes, beauty and personal care, health and beauty, and cosmetics can be found at our online store. Discover our baby shop for all baby essentials from food and diapers to toys and educational games. Shop for your preferred furniture and home décor for each room in your home today. Order our Jumia Express products and enjoy express shipping and have your products delivered to you in no time! There are endless categories and subcategories of products available to help you find your preferred items. Jumia Global catalog is filled with products that are shipped from overseas and will be shipped to your doorstep, wherever you are.
            </p>
            <h5>Amazing Online Shopping Experience</h5>
            <p>Jumia Ghana presents you with amazing deals and discounts and never ceases to form campaigns all year around. Subscribe to our newsletter and follow us on Facebook and be the first to know of all our offers on Mobile & Tech Week, Ramadan, Jumia Anniversary & Mother's Day. We have a dedicated team who will answer your questions instantly on social media and customer service is available through the week to help solve any issues and answer all inquiries. You can join Jumia’s partnership team to open your shop on Jumia Ghana and sell your products to our cherished customers. Jumia Ghana provides you with the best service and 100% genuine products. We offer you a safe and secure online payment method, the fastest delivery to your doorstep and provide free returns which you can read more about in our refund and return policy.
            </p>
            <p className='stay-safe-home'>Stay safe and stay alert by learning about COVID-19 facts. Stay at home and shop for all your home essentials and we will have them delivered to your doorstep within the shortest possible time.
            </p>


            </div>

          </div>
         
          </Header>
          <Footer/>
        </div>

    )


}
export default Home