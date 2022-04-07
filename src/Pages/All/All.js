import React from "react";
import Header from "../../Components/Header/Header";
import { FcFlashOn } from "react-icons/fc";
import { RiArrowDownSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";
import banner from '../../Asset/flashsales.png'
// import jumiabag from '../../Asset/jumia-bag.jpg'
import flashone from '../../Asset/flash-one.png'
import flashtwo from '../../Asset/flash-two.png'
import flashthree from '../../Asset/flash-three.png'
import flashfour from '../../Asset/flash-four.png'
import flashfive from '../../Asset/flash-five.png'
import flashsix from '../../Asset/flash-six.png'
import flashallone from '../../Asset/flash-all-one.jpg'
import flashalltwo from '../../Asset/flash-all-two.jpg'
import flashallthree from '../../Asset/flash-all-three.jpg'
import flashallfour from '../../Asset/flash-all-four.jpg'
import flashallfive from '../../Asset/flash-all-five.jpg'
import flashallsix from '../../Asset/flash-all-six.jpg'
import flashallseven from '../../Asset/flash-all-seven.jpg'
import flashalleight from '../../Asset/flash-all-eight.jpg'
import flashallnine from '../../Asset/flash-all-nine.jpg'
import flashallten from '../../Asset/flash-all-ten.jpg'
import flashalleleven from '../../Asset/flash-all-eleven.jpg'
import flashalltwelve from '../../Asset/flash-all-twelve.jpg'
import Footer from '../../Components/Footer/Footer'
import '../All/All.css'
function All(){
    let items=[
        {image:flashone,
            amount:"GHC 35.49",previous:"GHC 129.00",amtleft:"20 items left"},
            {image:flashtwo,
            amount:"GHC 35.49",previous:"GHC 129.00",amtleft:"20 items left"},
            {image:flashthree,
            amount:"GHC 35.49",previous:"GHC 129.00",amtleft:"20 items left"},
            {image:flashfour,
            amount:"GHC 35.49",previous:"GHC 129.00",amtleft:"20 items left"},
            {image:flashfive,
            amount:"GHC 35.49",previous:"GHC 129.00",amtleft:"20 items left"},
            {image:flashsix,
            amount:"GHC 35.49",previous:"GHC 129.00",amtleft:"20 items left"}
    ]
    let itemstwo=[
        {image:flashallone,
            amount:"GHC 35.49",previous:"GHC 129.00",amtleft:"20 items left"},
            {image:flashalltwo,
            amount:"GHC 35.49",previous:"GHC 129.00",amtleft:"20 items left"},
            {image:flashallthree,
            amount:"GHC 35.49",previous:"GHC 129.00",amtleft:"20 items left"},
            {image:flashallfour,
            amount:"GHC 35.49",previous:"GHC 129.00",amtleft:"20 items left"},
            {image:flashallfive,
            amount:"GHC 35.49",previous:"GHC 129.00",amtleft:"20 items left"},
            {image:flashallsix,
            amount:"GHC 35.49",previous:"GHC 129.00",amtleft:"20 items left"},
            {image:flashallseven,
                amount:"GHC 35.49",previous:"GHC 129.00",amtleft:"20 items left"},
                {image:flashalleight,
                amount:"GHC 35.49",previous:"GHC 129.00",amtleft:"20 items left"},
                {image:flashallnine,
                amount:"GHC 35.49",previous:"GHC 129.00",amtleft:"20 items left"},
                {image:flashallten,
                amount:"GHC 35.49",previous:"GHC 129.00",amtleft:"20 items left"},
                {image:flashalleleven,
                amount:"GHC 35.49",previous:"GHC 129.00",amtleft:"20 items left"},
                {image:flashalltwelve,
                amount:"GHC 35.49",previous:"GHC 129.00",amtleft:"20 items left"}
    ]
    return(
        <div className="flash-container">
           <Header>
               <div id="flashbody">
              
               </div>
               <div className="flash-b">
               <p>Home </p><RiArrowRightSLine/><p>Flash Sales</p>
               </div>
               <div className="flash-banner">
                    <img src={banner} alt=""/>
               </div>
               <div className="flash-sections">
               {   items.filter((val,indx)=>{
                return(indx<6)
            })
                .map((val,ind)=>{
                    // ind<2
                    return(
                        
                        <ul    key={ind}>
                            <li className="image-container-all"><img src={val.image} alt=""/></li>
                            <li className="flash-item-name">{val.amount}</li>
                            
                        </ul>
                        
                    )


                })
            }

               </div>
               <div className="flash-categories">
                   <div className="flash-categories-left">
                    mmm
                   </div>
                   <div className="flash-categories-right">
                       <div className="flash-categories-right-header">
                           <div className="shop-all-header">
                           <FcFlashOn/>
                               <h5>Shop All Product</h5>
                           </div>
                           <div className="sort-by-arrow">
                               <h6>Sort by: <span>Popularity</span></h6>
                               <RiArrowDownSLine/>
                           </div>

                       </div>
                       <div className="items-in-flash-catg">
                      
                       {   itemstwo.map((val,ind)=>{
                    // ind<2
                    return(
                        
                        <ul    key={ind}>
                            <div>
                           <li className="flash-list-items-all-img"><img src={val.image} alt=""/></li>
                            <li>{val.amount}</li>
                            <li className='previous-cancel-home'>{val.previous}</li>
                            <li>{val.amtleft}</li>
                            <p>
                                Eligible for the free net day delivery for orders above GHS 80 in Accra and Kumasi 
                                (Excluding large items)
                            </p>
                            </div>
                            <button>Add To Cart</button>
                            
                        </ul>
                        
                    )


                })
            }
            </div>
            </div>
            </div>
            <div className="lower-parag-flash">
                <p>Shop Flash Sales Deals Online</p>
                <p>Jumia Ghana offers you incredible deals & discounts during Flash Sales. Order online today and 
                    enjoy enjoy the fastest delivery to any address of your choice.
                </p>
                
                     <p>Amazing Flash Sales Offers</p>
                     <p>Explore our wide range of Flash Sale products online and order for your preferred items at the
                          lowest prices in the market. Buy 100% genuine products today and enjoy quality for less.</p>
            
                          </div>
                          <Footer/>
                 
              

           </Header>

        </div>
    )
}
export default All