import { Route,Routes } from 'react-router-dom';
import Home from './Pages/Home/Home'
import All from './Pages/All/All';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Pages/About/About';
import Cart from './Pages/Cart/Cart'
import './App.css';
import Createaccount from './Pages/Createaccount/Createaccount';
import Addressmobile from './Pages/Addressmobile/Addressmobile'
import LoginCreate from './Pages/LoginCreate/LoginCreate';
import Checkout from './Pages/Checkout/Checkout';
import Paymentsuccess from './Pages/Paymentsuccess/Paymentsuccess';
import Createaccmobile from './Pages/Createaccmobile/Createaccmobile';
import Shippingmethod from './Pages/Shippingmethod/Shippingmethod';
import Itempayment from './Pages/Itempayment/Itempayment';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/:name" element={<All/>}/>
      <Route exact path="/about/:id" element={<About/>}/>
      <Route exact path="/Cart" element={<Cart/>}/>
      <Route exact path="/Createaccount" element={<Createaccount/>}/>
      <Route exact path="/customer/account/login" element={<LoginCreate/>}/>
      <Route exact path="/customer/account/create" element={<Createaccmobile/>}/>
      <Route exact path="/onepage/checkout/address" element={<Checkout/>}/>
      <Route exact path="/successful/payment" element={<Paymentsuccess/>}/>
      <Route exact path="/checkout/multistep/shipping" element={<Addressmobile/>}/>
      <Route exact path="/checkout/multistep/shipping/method" element={<Shippingmethod/>}/>
      <Route exact path="/checkout/multistep/shipping/payment" element={<Itempayment/>}/>
      </Routes>
      {/* const params=useParams()
    let current=params.id
    /post/:id */}
    </div>
  );
}

export default App;
