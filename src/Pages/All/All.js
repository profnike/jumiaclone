import React, { useContext } from "react";
import Header from "../../Components/Header/Header";
import { FcFlashOn } from "react-icons/fc";
import { RiArrowDownSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";
import { BiSearchAlt2 } from "react-icons/bi";
import banner from '../../Asset/flashsales.png'
import { useNavigate } from "react-router-dom";

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
import flashallthirteen from '../../Asset/flash-all-thirteen.jpg'
import flashallfourteen from '../../Asset/flash-all-fourteen.jpg'
import flashallfifteen from '../../Asset/flash-all-fifteen.jpg'
import flashallsixteen from '../../Asset/flash-all-sixteen.jpg'
import Footer from '../../Components/Footer/Footer'
import Itembutton from "../../Components/Itembutton/Itembutton";
import cartContext from "../../Context/Cart/CartContext";
import '../All/All.css'

function All(){
    const{addToCart}=useContext(cartContext)
    let navigate=useNavigate()
    
    let num={}
    const{cartItems}=useContext(cartContext)
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
        {id:"00001",image:flashallone,name:"Xiaomi Redmi Note 10 Pro  6.67 Android 11",
       
            amount:" 35.49",previous:"GHC 129.00",amtleft:"20 items left"},
            {id:"00002",image:flashalltwo,name:"Samsung USB 3.0 Metallic Pendrive - 64GB - Silver",
            amount:" 35.49",previous:"GHC 129.00",amtleft:"20 items left"},
            {id:"00003",image:flashallthree, name:"1.5M 5FT Braided Micro USB Charger Data Sync Cable Cord For Android Phone",
            amount:" 35.49",previous:"GHC 129.00",amtleft:"20 items left"},
            {id:"00004",image:flashallfour,name:"P47 Headphones Overhead Wireless EarpieceBluetooth Earphone ",
             
            amount:" 35.49",previous:"GHC 129.00",amtleft:"20 items left"},
            {id:"00005",image:flashallfive, name:"2.5'' Inch 2TB Portable USB 2.0/3.0 SATA SSD Hard",
            amount:" 35.49",previous:"GHC 129.00",amtleft:"20 items left"},
            {id:"00006",name:"Microsoft Xbox 360 Wired USB Controller",image:flashallsix,
            amount:" 35.49",previous:"GHC 129.00",amtleft:"20 items left"},
            {id:"00007",image:flashallseven, name:"Samsung USB 3.1 BAR Pendrive - 64GB - Sliver- Buy 1 Get 1 Free + Free Smart OTG",
                amount:" 35.49",previous:"GHC 129.00",amtleft:"20 items left"},
                {id:"00008",image:flashalleight, name:"MinMax Durable 3 in 1 Heavy Duty Commercial Blender - 1.5L" ,
                amount:" 35.49",previous:"GHC 129.00",amtleft:"20 items left"},
                {id:"00009",image:flashallnine, name:"1.5M 5FT Braided Micro USB Charger Data Sync Cable Cord For Android Phone",
                amount:" 35.49",previous:"GHC 129.00",amtleft:"20 items left"},
                {id:"000010",image:flashallten,name:"Seagate Backup Plus Slim Hard Drive ",
                amount:" 35.49",previous:"GHC 129.00",amtleft:"20 items left"},
                {id:"000011",image:flashalleleven, name:"Pair Novelty Soft Silicone Earphone Case Headphone Earpods Cover Eartip ",
                amount:" 35.49",previous:"GHC 129.00",amtleft:"20 items left"},
                {id:"000012",image:flashalltwelve, name:"Seagate STEA4000400 Expansion USB 3.0 Portable Hard Drive ",
                amount:" 35.49",previous:"GHC 129.00",amtleft:"20 items left"},
                {id:"000013",image:flashallthirteen, name:"TCL 32S60A Smart Android TV ",
                    amount:" 35.49",previous:"GHC 129.00",amtleft:"20 items left"},
                    {id:"000014",image:flashallfourteen, name:"Delron 2 Slice Sandwich Maker",
                        amount:" 35.49",previous:"GHC 129.00",amtleft:"20 items left"},
                        {id:"000015",image:flashallfifteen, name:"Lindy Portable Fabric Wardrobe",
                            amount:" 35.49",previous:"GHC 129.00",amtleft:"20 items left"},
                            {id:"000016",image:flashallsixteen, name:"Adonko Adonko 123 Bitters",
                                amount:"GHC 35.49",previous:"GHC 129.00",amtleft:"20 items left"},
            
            

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
                      <div className="category-and-parag">
                    <h5>CATEGORY</h5>
                    <p>Computing</p>
                    <p>Electronics</p>
                    <p>Garden & Outdoors</p>
                    <p>Phones & Tablets</p>
                    <p>Fashion</p>
                    <p>Home & Office</p>
                    <p>Grocery</p>
                    <p>Health & Beauty</p>
                    </div>
                    <div className="diff-categories">
                    <h5>BRAND</h5>
                    <div className="search-brand">
                        <div className="search-react-icon">
                        <BiSearchAlt2/>
                        </div>
                        <input type="search" placeholder="Search" />
                    </div>
                    
                    <div className="flash-checkbox-parag">
                        <input  type="checkbox"/>
                        <p>Abena</p>
                    </div>
                   
                    <div className="flash-checkbox-parag">
                        <input  type="checkbox"/>
                        <p>Bebe</p>
                    </div>
                   <div className="flash-checkbox-parag">
                       <input  type="checkbox"/>
                       <p>Backpack</p>
                   </div>
                   <div className="flash-checkbox-parag">
                       <input type="checkbox"/>
                       <p>Annapurna</p>
                   </div>
                   <div className="flash-checkbox-parag">
                       <input type="checkbox"/>
                       <p>ARHANORY</p>
                   </div>
                   </div>
                  
                   <div className="diff-categories">
                    <h5>DISCOUNT PERCENTAGE</h5>
                    <div className="flash-checkbox-parag">
                        <input type="radio" name="discount"/>
                        <p>80% or more</p>
                    </div>
                    <div className="flash-checkbox-parag">
                        <input type="radio" name="discount"/>
                        <p>70% or more</p>
                    </div>
                    <div className="flash-checkbox-parag">
                        <input type="radio" name="discount"/>
                        <p>50% or more</p>
                    </div>
                    <div className="flash-checkbox-parag">
                        <input type="radio" name="discount"/>
                        <p>20% or more</p>
                    </div>
                    <div className="flash-checkbox-parag">
                        <input type="radio" name="discount"/>
                        <p>10% or more</p>
                    </div>
                    </div>
                    <div className="diff-categories">
                    <h5>SIZE</h5>
                    <div className="flash-checkbox-parag">
                       <input type="checkbox"/>
                       <p>M</p>
                   </div>
                   <div className="flash-checkbox-parag">
                       <input type="checkbox"/>
                       <p>L</p>
                   </div>
                   <div className="flash-checkbox-parag">
                       <input type="checkbox"/>
                       <p>XL</p>
                   </div>
                   <div className="flash-checkbox-parag">
                       <input type="checkbox"/>
                       <p>XXL</p>
                   </div>
                   <div className="flash-checkbox-parag">
                       <input type="checkbox"/>
                       <p>XXXL</p>
                   </div>
                   </div>
                   <div className="diff-categories">
                   <h5>GENDER</h5>
                   <div className="flash-checkbox-parag">
                       <input type="checkbox"/>
                       <p>Female</p>
                   </div>
                   <div className="flash-checkbox-parag">
                       <input type="checkbox"/>
                       <p>Male</p>
                   </div>
                   <div className="flash-checkbox-parag">
                       <input type="checkbox"/>
                       <p>Men</p>
                   </div>
                   <div className="flash-checkbox-parag">
                       <input type="checkbox"/>
                       <p>Unisex</p>
                   </div>
                   <div className="flash-checkbox-parag">
                       <input type="checkbox"/>
                       <p>Women</p>
                   </div>
                   <div className="diff-categories"></div>
                   <h5>SELLER SCORE</h5>
                   <div className="flash-checkbox-parag">
                        <input type="radio" name="score"/>
                        <p>80%</p>
                    </div>
                    <div className="flash-checkbox-parag">
                        <input type="radio" name="score"/>
                        <p>60%</p>
                    </div>
                    <div className="flash-checkbox-parag">
                        <input type="radio" name="score"/>
                        <p>40%</p>
                    </div>
                    <div className="flash-checkbox-parag">
                        <input type="radio" name="score"/>
                        <p>20%</p>
                    </div>
                    </div>
                    <div className="diff-categories">
                   <h5>EXPRESS DELIVERY</h5>
                   <div className="flash-checkbox-parag">
                       <input type="checkbox"/>
                       <p>JUMIA</p>
                   </div>
                   </div>
                   <div className="diff-categories">
                   <h5>SHIPPED FROM X</h5>
                   <div className="flash-checkbox-parag">
                       <input type="checkbox"/>
                       <p>Shipped from Ghana</p>
                   </div>
                   </div>

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
                            <div onClick={(()=>{navigate(`/about/${val.id}`)})}>
                           
                           <li className="flash-list-items-all-img"><img src={val.image} alt=""/></li>
                           <li>{val.name}</li>
                            <li>{val.amount}</li>
                            <li className='previous-cancel-home'>{val.previous}</li>
                            <li>{val.amtleft}</li>
                            <p>
                                Eligible for the free net day delivery for orders above GHS 80 in Accra and Kumasi 
                                (Excluding large items)
                            </p>
                            </div>
                           
                            {cartItems.some((p,ind)=>p.id===val.id )?(
                               
                                 num = cartItems.find((valu)=>{
                                 
                                return(
                                valu.id===val.id
                                )
                               
                            }),
                            <div className="quantity-all-items-div">
                               <Itembutton val={num}/>
                               </div>
                               
                               )
                                
                            :(  <button onClick={(()=>{
                                addToCart(val);
                                // localStorage.setItem("cart", JSON.stringify(cartItems));
                                // console.log(cartItems)

                            })}>Add To Cart</button>)}
                          
                            
                        </ul>
                        
                    )


                })
            }
            </div>
            </div>
            </div>
            <div className="lower-parag-flash">
                <div className="lower-parag-flash-one-upper">
                <h5>Shop Flash Sales Deals Online</h5>
                <p>Jumia Ghana offers you incredible deals & discounts during Flash Sales. Order online today and 
                    enjoy enjoy the fastest delivery to any address of your choice.
                </p>
                </div>
                     <h5>Amazing Flash Sales Offers</h5>
                     <p>Explore our wide range of Flash Sale products online and order for your preferred items at the
                          lowest prices in the market. Buy 100% genuine products today and enjoy quality for less.</p>
            
                          </div>
                          <Footer/>
                 
              

           </Header>

        </div>
    )
}
export default All