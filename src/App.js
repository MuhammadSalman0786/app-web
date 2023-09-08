
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Login from './Pages/Login';
import Forgot from './Pages/Forgot'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Registration from './Pages/Registration';
import Buyer from './Pages/Buyer';
import Account from './Pages/Account';


function App() {
  return (
    <div >

    <BrowserRouter>
      
      <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/forgot" element={<Forgot/>} />
          <Route path="/supplier" element={<Registration/>} />
          <Route path="/buyer" element={<Buyer/>} />
          <Route path="/account" element={<Account/>} />
        </Routes>
      <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
