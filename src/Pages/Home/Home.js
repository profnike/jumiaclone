import Header from '../../Components/Header/Header'
import phone from '../../Asset/phone-jumia.png'
import sell from '../../Asset/sell-jumia.png'
import returns from '../../Asset/return-jumia.png'
// import jumiacenter from '../../Asset/jumia-home-one.jpg'
import delivery from '../../Asset/delivry-jumia.png'
import global from '../../Asset/global-jumia.png'
import prime from '../../Asset/prime-jumia.png'
import supers from '../../Asset/super-jumia.png'
// import jumiabag from '../../Asset/jumia-bag.jpg'
import Carousell from '../../Components/Carousel/Carousel'
// import Toggle from '../../Components/Toggleanim/Toggleanim'
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
                      <div>
                          <p onClick={(()=>{navigate("/Flashsales")})} className="home-sellname">SEE ALL</p>
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
             {/* <div onClick={(()=>{console.log(myRef.width)})}  className='arr'>
                      arrow-right
                    
                      </div> */}
          
            
            
                  </div>

              </div>
              {/* <DemoCarousel/> */}

            


          </div>
          </Header>
          <Footer/>
        </div>

    )


}
export default Home