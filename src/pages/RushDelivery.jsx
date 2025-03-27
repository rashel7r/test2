import React from 'react';
import GiftBundle from '../assets/RushDelivery/GiftBundle.jpg';
import MacaronsTreat from '../assets/RushDelivery/MacaronsTreat.jpg';
import RosyTreats from '../assets/RushDelivery/RosyTreats.jpg';
import LovelySpringBouquet from '../assets/RushDelivery/LovelySpringBouquet.jpg';
import SweetDelight from '../assets/RushDelivery/SweetDelight.jpg';
import CartierWatch from '../assets/RushDelivery/CartierWatch.jpg';
import ChanelPerfume from '../assets/RushDelivery/ChanelPerfume.jpg';
import CupidsKissesBox from '../assets/RushDelivery/CupidsKissesBox.jpg';
import ReindeerCup from '../assets/RushDelivery/ReindeerCup.jpg';
import SummerMistBouquet from '../assets/RushDelivery/SummerMistBouquet.jpg';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RushDeliveryBanner from '../components/RushDeliveryBanner';

const RushDelivery = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    addToCart(product);
    navigate('/cart', { state: { source: 'rush-delivery' } });
  };

  const products = [
    // First Row
    {
      id: 1,
      name: 'Gift Bundle',
      image: GiftBundle,
      price: 'Rs. 4,000'
    },
    {
      id: 2,
      name: 'Macarons Treat',
      image: MacaronsTreat,
      price: 'Rs. 3,500'
    },
    {
      id: 3,
      name: 'Rosy Treats',
      image: RosyTreats,
      price: 'Rs. 5,000'
    },
    {
      id: 4,
      name: 'Lovely Spring Bouquet',
      image: LovelySpringBouquet,
      price: 'Rs. 7,500'
    },
    {
      id: 5,
      name: 'Sweet Delight',
      image: SweetDelight,
      price: 'Rs. 4,800'
    },
    // Second Row
    {
      id: 6,
      name: 'Cartier Watch',
      image: CartierWatch,
      price: 'Rs. 50,000'
    },
    {
      id: 7,
      name: 'Chanel Perfume',
      image: ChanelPerfume,
      price: 'Rs. 30,000'
    },
    {
      id: 8,
      name: 'Cupids Kisses Box',
      image: CupidsKissesBox,
      price: 'Rs. 5,000'
    },
    {
      id: 9,
      name: 'Reindeer Cup',
      image: ReindeerCup,
      price: 'Rs. 3,500'
    },
    {
      id: 10,
      name: 'Summer Mist Bouquet',
      image: SummerMistBouquet,
      price: 'Rs. 7,850'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex gap-8">
          {/* Sidebar */}
          <Sidebar />
          
          {/* Main Content */}
          <div className="flex-1">
            <RushDeliveryBanner />
            <h2 className="text-[#000000] text-2xl font-semibold mb-6">RUSH DELIVERY OFFERS</h2>
            <div className="grid grid-cols-5 gap-x-6 gap-y-8">
              {products.map((product) => (
                <div 
                  key={product.id} 
                  className="relative group cursor-pointer"
                  onClick={() => handleAddToCart(product)}
                >
                  <div className="bg-white border border-gray-200">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-3">
                    <h3 className="text-gray-700 font-medium line-clamp-2 min-h-[2.5rem] text-center group-hover:text-[#1D372E]">
                      {product.name}
                    </h3>
                    <p className="text-gray-700 font-semibold text-center group-hover:text-[#1D372E]">
                      {product.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RushDelivery; 