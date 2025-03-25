import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import RamadanSellers from './pages/RamadanSellers';
import RushDelivery from './pages/RushDelivery';
import Cart from './components/Cart';
import Profile from './pages/Profile';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<RamadanSellers />} />
            <Route path="/ramadan" element={<RamadanSellers />} />
            <Route path="/rush-delivery" element={<RushDelivery />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App; 