import { Route,Routes } from 'react-router-dom';
import Home from './Pages/Home/Home'
import All from './Pages/All/All';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Pages/About/About';
import Cart from './Pages/Cart/Cart'
import './App.css';
import Createaccount from './Pages/Createaccount/Createaccount';
import LoginCreate from './Pages/LoginCreate/LoginCreate';

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
      </Routes>
      {/* const params=useParams()
    let current=params.id
    /post/:id */}
    </div>
  );
}

export default App;
