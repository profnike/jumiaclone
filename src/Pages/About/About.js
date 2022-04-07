import React from "react";
import Header from "../../Components/Header/Header";
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


function About(){
    let params=useParams()
    console.log(params.id)
    let allItems=[
      {id:"00001",image:flashallone,
            amount:"GHC 35.49",previous:"GHC 129.00",amtleft:"20 items left"},
            {id:"00002",image:flashalltwo,
            amount:"GHC 35.49",previous:"GHC 129.00",amtleft:"20 items left"},
            {id:"00003",image:flashallthree,
            amount:"GHC 35.49",previous:"GHC 129.00",amtleft:"20 items left"},
            {id:"00004",image:flashallfour,
            amount:"GHC 35.49",previous:"GHC 129.00",amtleft:"20 items left"},
            {id:"00005",image:flashallfive,
            amount:"GHC 35.49",previous:"GHC 129.00",amtleft:"20 items left"},
            {id:"00006",image:flashallsix,
            amount:"GHC 35.49",previous:"GHC 129.00",amtleft:"20 items left"},
            {id:"00007",image:flashallseven,
                amount:"GHC 35.49",previous:"GHC 129.00",amtleft:"20 items left"},
                {id:"00008",image:flashalleight,
                amount:"GHC 35.49",previous:"GHC 129.00",amtleft:"20 items left"},
                {id:"00009",image:flashallnine,
                amount:"GHC 35.49",previous:"GHC 129.00",amtleft:"20 items left"},
                {id:"000010",image:flashallten,
                amount:"GHC 35.49",previous:"GHC 129.00",amtleft:"20 items left"},
                {id:"000011",image:flashalleleven,
                amount:"GHC 35.49",previous:"GHC 129.00",amtleft:"20 items left"},
                {id:"000012",image:flashalltwelve,
                amount:"GHC 35.49",previous:"GHC 129.00",amtleft:"20 items left"},
                {id:"000013",image:flashallthirteen,
                    amount:"GHC 35.49",previous:"GHC 129.00",amtleft:"20 items left"},
                    {id:"000014",image:flashallfourteen,
                        amount:"GHC 35.49",previous:"GHC 129.00",amtleft:"20 items left"},
                        {id:"000015",image:flashallfifteen,
                            amount:"GHC 35.49",previous:"GHC 129.00",amtleft:"20 items left"},
                            {id:"000016",image:flashallsixteen,
                                amount:"GHC 35.49",previous:"GHC 129.00",amtleft:"20 items left"},
            
            

    ]
    let test=allItems.filter((val,ind)=>{
        return val.id===params.id

    })
    console.log(test )
    return(
        <div className="about">
            <Header>
                <div className="about-inner">
                    <div className="about-section-one">
                    <div className="about-section-one-left"></div>
                    <div className="about-section-one-right"></div>

                    </div>


                </div>

            </Header>
            <Footer/>
        </div>
    )
}

export default About