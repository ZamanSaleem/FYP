import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Item = (props) => {
  const handleAddToCart = () => {
  
  };

  const handleMoreInfo = () => {

  };

  return (
    <motion.div
      className="bg-gray-300 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-black hover:shadow-xl duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link to={`/product/${props.id}`}>
        <motion.img
          src={props.image}
          alt={props.name}
          className="w-full h-64 object-cover rounded-md mb-4"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </Link>
      <p className="text-lg font-semibold text-gray-900 mb-2">{props.name}</p>
      <div className="flex items-center space-x-2 mb-4">
        <div className="text-xl font-bold text-gray-900">
          Rs {props.new_price}
        </div>
        {props.old_price && (
          <div className="text-sm line-through text-gray-500">
            Rs {props.old_price}
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
  );
};

export default Item;
