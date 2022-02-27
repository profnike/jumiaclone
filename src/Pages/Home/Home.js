import Header from '../../Components/Header/Header'
import phone from '../../Asset/phone-jumia.png'
import sell from '../../Asset/sell-jumia.png'
import returns from '../../Asset/return-jumia.png'
import jumiacenter from '../../Asset/jumia-home-one.jpg'
import delivery from '../../Asset/delivry-jumia.png'
import global from '../../Asset/global-jumia.png'
import prime from '../../Asset/prime-jumia.png'
import supers from '../../Asset/super-jumia.png'





import "../Home/Home.css"

function Home(){
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
                          <img src={jumiacenter} alt=""/>
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
                          <p>SEE ALL</p>
                      </div>
                  </div>
                  <div >

                  </div>

              </div>

            


          </div>
          </Header>
        </div>

    )


}
export default Home