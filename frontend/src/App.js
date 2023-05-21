
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './pages/Login';

import  {Product } from './pages/Product';
import { Signup } from './pages/Signup';

function App() {
  return (
    <div className="App">
       <Routes>
            <Route path='/' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/' element={<Product/>}/>
        </Routes>
    </div>
  );
}

export default App;
