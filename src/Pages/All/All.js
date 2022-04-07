import React from "react";
import Header from "../../Components/Header/Header";
import banner from '../../Asset/flashsales.png'
import jumiabag from '../../Asset/jumia-bag.jpg'
import Footer from '../../Components/Footer/Footer'
import '../All/All.css'
function All(){
    let items=[
        {image:jumiabag,
            amount:"GHC 35.49",previous:"GHC 129.00",amtleft:"20 items left"},
            {image:jumiabag,
            amount:"GHC 35.49",previous:"GHC 129.00",amtleft:"20 items left"},
            {image:"https://gh.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/93/791813/1.jpg?6649",
            amount:"GHC 35.49",previous:"GHC 129.00",amtleft:"20 items left"},
            {image:"https://gh.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/93/791813/1.jpg?6649",
            amount:"GHC 35.49",previous:"GHC 129.00",amtleft:"20 items left"},
            {image:"https://gh.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/93/791813/1.jpg?6649",
            amount:"GHC 35.49",previous:"GHC 129.00",amtleft:"20 items left"},
            {image:"https://gh.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/93/791813/1.jpg?6649",
            amount:"GHC 35.49",previous:"GHC 129.00",amtleft:"20 items left"}
    ]
    return(
        <div>
           <Header>
               <div className="flashbody">
               <p>Home Flash Sales</p>
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
                            <li><img src={val.image} alt=""/></li>
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
                               image
                               <h5>Shop All Product</h5>
                           </div>
                           <div className="sort-by-arrow">
                               <h5>Sort by: Popularity</h5>
                               arrow down
                           </div>

                       </div>
                       <div className="items-in-flash-catg">
                       {   items.filter((val,indx)=>{
                return(indx<6)
            })
                .map((val,ind)=>{
                    // ind<2
                    return(
                        
                        <ul    key={ind}>
                            <div>
                           <li><img src={val.image} alt=""/></li>
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