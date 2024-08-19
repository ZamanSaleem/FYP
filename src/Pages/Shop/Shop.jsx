import React, { useState } from "react";
import all_product from "../../assets/all_product"; 
import couple_offers from "../../assets/couple_offers.png";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

const Shop = (product) => {
  const [visibleProducts, setVisibleProducts] = useState(16);
  const [category, setCategory] = useState("all");

  const handleAddToCart = () => {
  
  };

  const handleMoreInfo = () => {

  };

  const loadMoreProducts = () => {
    setVisibleProducts((prev) => prev + 16);
  };

  

  const filteredProducts =
    category === "all" ? all_product : all_product.filter((product) => product.category === category);

  return (
    <div className="shop-page text-center p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">SHOP </h1>
      <hr className="border-t-2 border-gray-300 mb-8" />
      
      <div className="categories mb-8 flex justify-center space-x-4">
        <button
          onClick={() => setCategory("all")}
          className={`px-4 py-2 rounded-lg ${
            category === "all" ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          All
        </button>

        <button
          onClick={() => setCategory("men")}
          className={`px-4 py-2 rounded-lg ${
            category === "men" ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          Men
        </button>

        <button
          onClick={() => setCategory("women")}
          className={`px-4 py-2 rounded-lg ${
            category === "women" ? "bg-gray-800 text-white"  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          Women
        </button>

        <button
          onClick={() => setCategory("kid")}
          className={`px-4 py-2 rounded-lg ${
            category === "kid"  ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          Kids
        </button>
      </div>


      <div className="products-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

        {filteredProducts.slice(0, visibleProducts).map((product) => (
          <div
            key={product.id}
            className="product-item border border-gray-300 rounded-lg bg-white shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
      <motion.div
        className="bg-gray-300 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-black hover:shadow-xl duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
            <Link to={`/product/${product.id}`}>
            <motion.img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover rounded-md mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            </Link>
            <p className="text-lg font-semibold text-gray-900 mb-2">{product.name}</p>
        <div className="flex items-center space-x-2 mb-4">
        <div className="text-xl font-bold text-gray-900">
          Rs {product.new_price}
        </div>
        {product.old_price && (
          <div className="text-sm line-through text-gray-500">
            Rs {product.old_price}
          </div>
        )}
        </div>
        <div className="flex space-x-4">
         <button
          className="bg-black text-white py-2 px-4 rounded-lg shadow-md hover:bg-[burlywood] transition-colors duration-300"
          onClick={handleAddToCart}
        >
          Add To Cart
        </button>
        <button
          className="bg-white text-gray-800 py-2 px-4 rounded-lg shadow-md hover:bg-gray-400 transition-colors duration-300"
          onClick={handleMoreInfo}
        >
          More Info
        </button>
            
            </div>
            </motion.div>
          </div>
        ))}
      </div>
      

      {visibleProducts < filteredProducts.length && (
        <button
          onClick={loadMoreProducts}
          className="load-more bg-gray-800 text-white mt-8 px-6 py-3 rounded-lg hover:bg-gray-700 transition"
        >
          Load More
        </button>
      )}


      
      <div className="promo-section bg-gray-800 p-6 mt-12 rounded-lg shadow-md flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2">
          <h2 className="text-5xl font-bold text-white mb-4">Exclusive Offers!</h2>
          <p className="text-white text-xl mb-4">
            Don't miss out on our exclusive offers and new arrivals. Shop now and
            enjoy special discounts on selected items.
          </p>
          <button className="bg-[burlywood] text-black font-semibold px-6 py-3 text-xl  rounded-lg hover:bg-black hover:text-white transition">
            Explore Now
          </button>
        </div>
        <div className="flex items-center justify-center lg:w-1/2 mt-6 lg:mt-0">
          <img
            src={couple_offers} 
            alt="Promo"
            className="rounded-lg shadow-lg "
          />
        </div>
      </div>
    </div>
  );
};

export default Shop;
