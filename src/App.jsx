import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import SeasonalOffers from './pages/SeasonalOffers';
import RushDelivery from './pages/RushDelivery';
import Cart from './components/Cart';
import Profile from './pages/Profile';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<SeasonalOffers />} />
            <Route path="/ramadan" element={<SeasonalOffers />} />
            <Route path="/rush-delivery" element={<RushDelivery />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App; 