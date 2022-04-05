import { Route,Routes } from 'react-router-dom';
import Home from './Pages/Home/Home'
import All from './Pages/All/All';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/All/:name" element={<All/>}/>
      </Routes>
      {/* const params=useParams()
    let current=params.id
    /post/:id */}
    </div>
  );
}

export default App;
