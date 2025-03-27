import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import {Link} from 'react-router-dom';
import ShareIcon from '@mui/icons-material/Share';
import AppleIcon from '@mui/icons-material/Apple';
import DeleteIcon from '@mui/icons-material/Delete';
import {useCart} from '../context/CartContext';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import LovelySpringBouquet from '../assets/RushDelivery/LovelySpringBouquet.jpg';
import MacaronsTreat from '../assets/RushDelivery/MacaronsTreat.jpg';
import SweetDelight from '../assets/RushDelivery/SweetDelight.jpg';
import CartierWatch from '../assets/RushDelivery/CartierWatch.jpg';
import BerryDelight from '../assets/RamadanOffers/BerryDelight.jpg';
import FloralTouchDelight from '../assets/RamadanOffers/FloralTouchDelight.jpg';
import StrawberryTreat from '../assets/RamadanOffers/StrawberryTreat.jpg';
import WonderChocolateTreat from '../assets/RamadanOffers/WonderChocolateTreat.jpg';

const Cart = () => {
    const {cartItems, removeFromCart, updateQuantity} = useCart();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const source = location.state?.source;

    const parsePrice = (priceString) => {
        return parseInt(priceString.replace('Rs. ', '').replace(',', ''));
    };

    const formatPrice = (price) => {
        return `Rs. ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    };

    const total = cartItems.length === 0 ? 0 : cartItems.reduce((sum, item) => {
        const price = parsePrice(item.price);
        return sum + (price * item.quantity);
    }, 0);

    // Related products based on source
    const getRelatedProducts = () => {
        if (source === 'rush-delivery') {
            return [
                {
                    id: 1,
                    name: 'Lovely Spring Bouquet',
                    image: LovelySpringBouquet,
                    price: 'Rs. 7,500'
                },
                {
                    id: 2,
                    name: 'Macarons Treat',
                    image: MacaronsTreat,
                    price: 'Rs. 3,500'
                },
                {
                    id: 3,
                    name: 'Sweet Delight',
                    image: SweetDelight,
                    price: 'Rs. 4,800'
                },
                {
                    id: 4,
                    name: 'Cartier Watch',
                    image: CartierWatch,
                    price: 'Rs. 50,000'
                }
            ];
        } else if (source === 'ramadan') {
            return [
                {
                    id: 1,
                    name: 'Berry Delight',
                    image: BerryDelight,
                    price: 'Rs. 4,500'
                },
                {
                    id: 2,
                    name: 'Floral Touch Delight',
                    image: FloralTouchDelight,
                    price: 'Rs. 5,500'
                },
                {
                    id: 3,
                    name: 'Strawberry Treat',
                    image: StrawberryTreat,
                    price: 'Rs. 3,500'
                },
                {
                    id: 4,
                    name: 'Wonder Chocolate Treat',
                    image: WonderChocolateTreat,
                    price: 'Rs. 4,000'
                }
            ];
        }
        // Default related products for other sources
        return [
            {
                id: 1,
                name: 'Product 1',
                image: 'https://via.placeholder.com/150',
                price: 'Rs. 1,000'
            },
            {
                id: 2,
                name: 'Product 2',
                image: 'https://via.placeholder.com/150',
                price: 'Rs. 2,000'
            },
            {
                id: 3,
                name: 'Product 3',
                image: 'https://via.placeholder.com/150',
                price: 'Rs. 3,000'
            },
            {
                id: 4,
                name: 'Product 4',
                image: 'https://via.placeholder.com/150',
                price: 'Rs. 4,000'
            }
        ];
    };

    const relatedProducts = getRelatedProducts();

    return (
        <div className="min-h-screen bg-white w-full flex flex-col">
            <Header/>
            <div className="flex-1">
                <div className="mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    {/* Cart Header */}
                    <div className="flex items-center gap-2 mb-6">
                        <h1 className="text-xl">Your
                            Cart: {cartItems.length} item{cartItems.length !== 1 ? 's' : ''}</h1>
                        <button className="text-[#5CAF90] hover:text-[#3d2569]">
                            <ShareIcon sx={{fontSize: 20}}/>
                        </button>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Cart Items Section */}
                        <div className="flex-1">
                            {cartItems.length === 0 ? (
                                <div
                                    className="text-gray-500 text-lg text-center py-8 bg-white rounded-lg border border-gray-200">
                                    Your cart is empty
                                </div>
                            ) : (
                                <div className="space-y-6 my-auto">
                                    {cartItems.map(item => (
                                        <div
                                            className="grid grid-cols-6 text-center w-auto border-b-2 border-gray-200 pb-4">
                                            <div className="">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-24 h-24 object-cover rounded"
                                                />
                                            </div>
                                            <div className="my-auto text-left"><h3
                                                className="text-lg mb-2 text-gray-800">{item.name}</h3></div>
                                            <div className="my-auto"><p
                                                className="text-[#4B2E83] font-medium">{item.price}</p></div>
                                            <div className="my-auto">
                                                <input
                                                    type="number"
                                                    value={item.quantity}
                                                    min="1"
                                                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                                    className="w-16 text-center border rounded py-1 ml-4"
                                                />
                                            </div>
                                            <div className="my-auto">
                                                <p className="text-[#4B2E83] font-medium ml-auto">{formatPrice(parsePrice(item.price) * item.quantity)}</p>
                                            </div>
                                            <div className="my-auto">
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-red-500 hover:text-red-700 transition-colors p-1 rounded-full hover:bg-red-50 ml-4"
                                                    aria-label="Remove item"
                                                >
                                                    <DeleteIcon sx={{fontSize: 20}}/>
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Order Summary Card */}
                        <div className="lg:w-80 bg-white rounded-lg border border-gray-200 p-6 h-fit lg:ml-auto">
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-lg font-medium">Total</span>
                                <span className="text-lg">{formatPrice(total)}</span>
                            </div>

                            <Link to="/"
                                  className="block w-full bg-[#1D372E] text-white text-center py-3 rounded hover:bg-yellow-400 transition-colors mb-4">
                                ← Keep Shopping
                            </Link>

                            {cartItems.length > 0 && (
                                <button
                                    className="w-full bg-[#5CAF90] text-white text-center py-3 rounded hover:bg-[#3d2569] transition-colors mb-8">
                                    Checkout
                                </button>
                            )}

                            <div className="text-center">
                                <p className="text-[#6B7280] text-sm mb-4">SECURE PAYMENTS PROVIDED BY</p>
                                <div className="flex justify-center items-center gap-4">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                                        alt="Visa" className="h-4 opacity-40"/>
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                                        alt="Mastercard" className="h-4 opacity-40"/>
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg"
                                        alt="American Express" className="h-4 opacity-40"/>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                                         alt="PayPal" className="h-4 opacity-40"/>
                                    <AppleIcon sx={{fontSize: 16, color: '#9CA3AF'}}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Related Products Section */}
                    <div className="mt-24">
                        <h2 className="text-2xl text-[#1D372E] mb-8 text-center">Related Products</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {relatedProducts.map(product => (
                                <div
                                    key={product.id}
                                    className="group cursor-pointer transform transition-transform duration-300 hover:scale-105">
                                    <Link to={`/product/${product.id}`} className="block relative">
                                        <div className="overflow-hidden rounded-lg">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-64 object-cover rounded-lg mb-4 transition-transform duration-300 group-hover:scale-110"
                                                style={{ 
                                                    objectPosition: product.name === 'Berry Delight' ? 'center 70%' : 
                                                                  product.name === 'Floral Touch Delight' ? 'center 40%' :
                                                                  product.name === 'Strawberry Treat' ? 'center 30%' :
                                                                  'center' 
                                                }}
                                            />
                                        </div>
                                        <h3 className="text-lg mb-2 group-hover:text-[#1D372E] text-center text-gray-700">{product.name}</h3>
                                        <p className="text-gray-700 font-medium text-center group-hover:text-[#1D372E]">{product.price}</p>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Cart; 