import { useCart } from '../context/CartContext';

const RamadanPage = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
  };

  // In your product cards, add onClick handler:
  <div 
    className="group cursor-pointer transform transition-transform duration-300 hover:scale-105 ramadan"
    onClick={() => handleAddToCart({
      id: 1, // unique id for each product
      name: "Berry Delight",
      price: 4500,
      image: "/src/assets/RamadanOffers/BerryDelight.jpg"
    })}
  >
    // ... rest of your product card code
  </div>
}; 