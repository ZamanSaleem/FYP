import React, { useState } from "react";
import home from "../../assets/home.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice"

const categories = [
  {
    name: "All",
    value: "all",
  },
  {
    name: "Men",
    value: "men",
  },
  { name: "Women", value: "women" },
  { name: "Kids", value: "kid" },
];

const Shop = () => {
  const products = useSelector((state) => state.shop.products);

  const [visibleProducts, setVisibleProducts] = useState(16);
  const [category, setCategory] = useState("all");

  const dispatch = useDispatch();

  const handleAddToCart = (data) => {
    dispatch(addItemToCart(data));
    console.log("added to cart", data);
  };
  const handleMoreInfo = () => {};

  const loadMoreProducts = () => {
    setVisibleProducts((prev) => prev + 16);
  };

  const filteredProducts =
    category === "all"
      ? products
      : products.filter((product) => product.category === category);

  return (
    <div className="shop-page text-center p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">
        SHOP
      </h1>
      <hr className="border-t-2 border-gray-300 mb-8" />

      <div className=" mb-8 flex justify-center space-x-4">
        {categories.map((item) => (
          <button
            key={item.value}
            onClick={() => setCategory(item.value)}
            className="px-4 py-2 rounded-lg bg-gray-800 text-white  hover:bg-gray-300"
          >
            {item.name}
          </button>
        ))}
      </div>

      <div className=" grid  xl:grid-cols-4 gap-6">
        {filteredProducts.slice(0, visibleProducts).map((product) => (
          <div
            key={product.id}
            className=" border border-gray-300 rounded-lg bg-white shadow-lg hover:scale-105"
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
              <p className="text-lg font-semibold text-gray-900 mb-2">
                {product.name}
              </p>
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
                  onClick={() => handleAddToCart(product)}
                >
                  Add To Cart
                </button>
                {/* <button
                  className="bg-white text-gray-800 py-2 px-4 rounded-lg shadow-md hover:bg-gray-400 transition-colors duration-300"
                  onClick={() => handleMoreInfo}
                >
                  More Info
                </button> */}
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {visibleProducts < filteredProducts.length && (
        <button
          onClick={loadMoreProducts}
          className="bg-gray-800 text-white mt-8 px-6 py-3 rounded-lg hover:bg-gray-700 transition"
        >
          Load More
        </button>
      )}

      <div className="flex bg-gray-500 p-6 mt-12 rounded-lg shadow-md items-center">
        <div className="w-2/3">
          <h2 className="text-6xl font-bold text-white mb-4">
            Exclusive Offers!
          </h2>
          <p className="text-white text-2xl mb-4">
            Don't miss out on our exclusive offers and new arrivals. Shop now
            and enjoy special discounts on selected items.
          </p>
          <button className="bg-black text-white font-semibold px-6 py-3 text-xl  rounded-lg hover:bg-white hover:text-black transition">
            Explore Now
          </button>
        </div>
        <div className="w-1/3 mt-6">
          <img src={home} alt="Promo" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default Shop;
