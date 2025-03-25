import React from 'react';
import RoseVelvetCake from '../assets/RamadanOffers/RoseVelvetCake.jpg';
import ChocolateDelight from '../assets/RamadanOffers/ChocolateDelight.jpg';
import BerryDelight from '../assets/RamadanOffers/BerryDelight.jpg';
import CranberryDelight from '../assets/RamadanOffers/CranberryDelight.jpg';
import WonderChocolateTreat from '../assets/RamadanOffers/WonderChocolateTreat.jpg';
import WeddingCake from '../assets/RamadanOffers/WeddingCake.jpg';
import StrawberryTreat from '../assets/RamadanOffers/StrawberryTreat.jpg';
import FloralTouchDelight from '../assets/RamadanOffers/FloralTouchDelight.jpg';
import BlueberrySponge from '../assets/RamadanOffers/BlueberrySponge.jpg';
import FruitAndNuttyTreat from '../assets/RamadanOffers/FruitAndNuttyTreat.jpg';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Banner from '../components/Banner';

const RamadanSellers = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    addToCart(product);
    navigate('/cart', { state: { source: 'ramadan' } });
  };

  const products = [
    // First Row
    {
      id: 1,
      name: 'Rose Velvet Cake',
      image: RoseVelvetCake,
      price: 'Rs. 6,790',
      weight: '3.1 Lbs'
    },
    {
      id: 2,
      name: 'Chocolate Delight',
      image: ChocolateDelight,
      price: 'Rs. 6,070',
      weight: '1.98 Lbs'
    },
    {
      id: 3,
      name: 'Berry Delight',
      image: BerryDelight,
      price: 'Rs. 6,040',
      weight: '2.2 Lbs'
    },
    {
      id: 4,
      name: 'Wonder Chocolate Treat',
      image: WonderChocolateTreat,
      price: 'Rs. 5,460',
      weight: '2.33 Lbs'
    },
    {
      id: 5,
      name: 'Wedding Cake',
      image: WeddingCake,
      price: 'Rs. 6,650',
      weight: '1.88 Lbs'
    },
    // Second Row
    {
      id: 6,
      name: 'Strawberry Treat',
      image: StrawberryTreat,
      price: 'Rs. 6,290',
      weight: '2.1 Lbs'
    },
    {
      id: 7,
      name: 'Cranberry Delight',
      image: CranberryDelight,
      price: 'Rs. 5,970',
      weight: '2.3 Lbs'
    },
    {
      id: 8,
      name: 'Floral Touch Delight',
      image: FloralTouchDelight,
      price: 'Rs. 6,140',
      weight: '2.5 Lbs'
    },
    {
      id: 9,
      name: 'Blueberry Sponge',
      image: BlueberrySponge,
      price: 'Rs. 5,860',
      weight: '2.1 Lbs'
    },
    {
      id: 10,
      name: 'Fruit & Nutty Treat',
      image: FruitAndNuttyTreat,
      price: 'Rs. 6,450',
      weight: '2.4 Lbs'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <Banner />
        <div className="flex gap-8">
          {/* Sidebar */}
          <Sidebar />
          
          {/* Main Content */}
          <div className="flex-1">
            <h2 className="text-[#4B2E83] text-2xl font-semibold mb-6">RAMADAN TOP SELLERS</h2>
            <div className="grid grid-cols-5 gap-x-6 gap-y-8">
              {products.map((product) => (
                <div 
                  key={product.id} 
                  className="relative group cursor-pointer"
                  onClick={() => handleAddToCart(product)}
                >
                  <div className="absolute top-2 left-2 bg-white/90 text-purple-800 px-2 py-1 rounded text-sm z-10">
                    {product.weight}
                  </div>
                  <div className="bg-white border border-gray-200">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105"
                      style={
                        product.name === 'Wedding Cake' ? { objectPosition: 'center 40%' } :
                        product.name === 'Berry Delight' ? { objectPosition: 'center 75%' } :
                        product.name === 'Fruit & Nutty Treat' ? { objectPosition: 'center 40%' } :
                        product.name === 'Floral Touch Delight' ? { objectPosition: 'center 40%' } :
                        {}
                      }
                    />
                  </div>
                  <div className="mt-3">
                    <h3 className="text-gray-700 font-medium line-clamp-2 min-h-[2.5rem]">
                      {product.name}
                    </h3>
                    <p className="text-purple-800 font-semibold mt-1">
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

export default RamadanSellers; 