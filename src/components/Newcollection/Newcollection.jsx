import React from 'react';
import { motion } from 'framer-motion';
import new_collection from '../../assets/new_collections'; 
import Item from '../Item/Item'; 

const Newcollection = () => {
  return (
    <div className="bg-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">NEW COLLECTIONS</h1>
        <hr className="border-t-2 border-gray-300 mb-8" />
        <div className="flex flex-wrap gap-8 justify-center">
          {new_collection.map((item, i) => (
            <motion.div
              key={item.id} 
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Item
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Newcollection;