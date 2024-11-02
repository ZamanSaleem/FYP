import React from 'react';
import { motion } from 'framer-motion';
import './ProductDescription.css'


export const ProductDescription = ({ product }) => {
  return (
    <div className="bg-gray-100 p-6 md:p-12">
      <div className="container mx-auto flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
        
      
        <div className="w-full lg:w-2/3 flex flex-col items-center space-y-4 lg:space-y-0 lg:items-start">
          
          <motion.div
            className="w-full h-[580px] bg-white rounded-lg shadow-lg "
          >
            <img
              src={product.image}
              alt="Main product"
              className="w-full h-[580px] object-cover"
            />
          </motion.div>
        </div>
        
        
        <div className="w-full lg:w-1/3 flex flex-col space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          
          <div className="flex items-center space-x-2">  
          <div class="rating">
            <input value="5" name="rate" id="star5" type="radio"/>
            <label title="text" for="star5"></label>
            <input value="4" name="rate" id="star4" type="radio"/>
            <label title="text" for="star4"></label>
            <input value="3" name="rate" id="star3" type="radio" checked=""/>
            <label title="text" for="star3"></label>
            <input value="2" name="rate" id="star2" type="radio"/>
            <label title="text" for="star2"></label>
            <input value="1" name="rate" id="star1" type="radio"/>
            <label title="text" for="star1"></label>
          </div>
            
            <p className="text-gray-600 text-1xl">(122 reviews)</p>
          </div>

          <div className="flex gap-[10px]">
            <div className="text-2xl font-bold  text-gray-900">Rs <span className=' line-through'>{product.old_price}</span> </div>
            <div className="text-2xl font-bold text-gray-900">{product.new_price}</div>
          </div>
          
          <p className="text-gray-700">
            Our watches are designed to be both stylish and functional, making them ideal for any occasion.
            Each watch features a unique design that stands out, whether you're at a formal event or just going about your day. With one of our watches,
            you can showcase your individuality and sophistication effortlessly.
          </p>

          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Select Color</h2>
              <div className="flex space-x-4">
                {['Black', 'Golden', 'Green', 'Silver', 'Blue'].map(color => (
                  <div
                    key={color}
                    className="px-4 py-2 border border-gray-300 bg-gray-700 rounded-lg text-white text-center cursor-pointer hover:bg-gray-300 hover:text-black "
                  >
                    {color}
                  </div>
                ))}
              </div>
            </div>
            <button className="w-full py-3 bg-[burlywood] hover:bg-black text-white font-semibold rounded-lg transition-colors duration-300">
              Add to Cart
            </button>
            <p className="text-gray-600">
              <span className="font-bold">Category:</span> Women, Watches, Wristwatches
            </p>
            <p className="text-gray-600">
              <span className="font-bold">Tags:</span> Modern, Latest
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


