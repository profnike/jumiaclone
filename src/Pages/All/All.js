import React from "react";
import Header from "../../Components/Header/Header";
import banner from '../../Asset/flashsales.png'
import jumiabag from '../../Asset/jumia-bag.jpg'
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
                   <div></div>
                   <div></div>
               </div>

           </Header>

        </div>
    )
}
export default All