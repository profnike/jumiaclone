import React from "react";
import Header from "../../Components/Header/Header";
import { GiSelfLove } from "react-icons/gi";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
// import Itembutton from "../../Components/Itembutton/Itembutton";
import { useParams } from "react-router-dom";
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
import '../About/About.css'
import Footer from "../../Components/Footer/Footer";
import cartContext from "../../Context/Cart/CartContext";
import {useContext} from 'react';

function About(){
    const{addToCart}=useContext(cartContext)
    const{cartItems}=useContext(cartContext)
    let params=useParams()
    console.log(params.id)
//     let valuemap={}
//      cartItems.map((item)=>{
//         valuemap=cartItems.find((valu)=>{
//             return(
//              valu.id===item.id
//             )
//             })
//      })
//    console.log(valuemap)
    
    let allItems=[
        {id:"00001",image:flashallone,name:"Xiaomi Redmi Note 10 Pro  6.67 Android 11",
       
        amount:" 35.49",previous:"GHC 129.00",amtleft:"20 items left"},
        {id:"00002",image:flashalltwo,name:"Samsung USB 3.0 Metallic Pendrive - 64GB - Silver",
        amount:"35.49",previous:"GHC 129.00",amtleft:"20 items left"},
        {id:"00003",image:flashallthree, name:"1.5M 5FT Braided Micro USB Charger Data Sync Cable Cord For Android Phone",
        amount:"35.49",previous:"GHC 129.00",amtleft:"20 items left"},
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
   
    let test=allItems.filter((val,ind)=>{
        return val.id===params.id

    })
    let source=""
    let name=""
    let previous=""
    let recent=""
    let itemLeft=""
    let value={}
    test.map((val,id)=>{
        source=val.image
        name=val.name
        previous=val.previous
        recent=val.amount
        itemLeft=val.amtleft
        value=val
    })
    console.log(source)
    return(
        <div className="about-container">
            <Header>
                <div className="about-inner">
                    <div className="about-section-one">
                    <div className="about-section-one-left">
                        <div className="about-section-one-left-upper">
                            <div className="about-section-one-left-upper-le">
                                <div>
                                
                                <div className="about-image-container"><img src={source} alt=""/></div>
                                <h5 className="share-product">SHARE THIS PRODUCT</h5>
                                <div className="share-product-icons">
                                    <span><FaFacebookF/></span>
                                    <span><BsTwitter/></span>
                                    </div>
                                </div>
                                <p>Report incorrect product information</p>
                            </div>
                            <div className="about-section-one-left-upper-ri">
                                <div className="about-section-one-left-upper-ri-header">
                                    <h5>{name} </h5>
                                    <div className="love-div-about">
                                    <GiSelfLove/>
                                    </div>
                                </div>
                                <div className="flash-about">
                                    <div className="flash-about-header">
                                        <div className="flashandimage-about-header">
                                        <h5>FLASH SALES</h5>
                                        </div>
                                        <p>Time left:18h : 14m : 26s</p>
                                    </div>
                                    <div className="flash-about-body">
                                       <p className="recent-flash-about">GHC {recent}</p> 
                                    <p className="previous-flash-about">{previous}</p>
                                    <p>{itemLeft}</p>

                                    </div>

                                </div>
                                <p>Order above GHC 80 on Jumia Express
                                     items & get free delivery | regular delivery from GH₵ 4.02 to Tema</p>
                                     {/* <Itembutton val={valuemap}/> */}
                            <button onClick={()=> addToCart(value)}>ADD TO CART</button>
                            <div className="promotions-about">
                                <h5>PROMOTIONS</h5>
                                <p>Enjoy 5% instant cashback on airtime & data on JumiaPay. Use code:MOBS</p>
                                <p>Enjoy cheaper delivery fees when you select a pickup station at checkout</p>
                                <p >Free delivery in Accra and Kumasi for orders above GHC80(Excluding Large)</p>
                            </div>
                            
                            </div>

                        </div>
                    </div>
                    <div className="about-section-one-right">
                   
                    </div>
                  
                    </div>


                </div>

            </Header>
            <Footer/>
        </div>
    )
}

export default About