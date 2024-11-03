import React from "react";
import Item from "./Item";
import { Link } from "react-router-dom";
import home from "../assets/home.png";
import { MoveRight } from "lucide-react";
import { useSelector } from "react-redux";

const Shopcategory = (props) => {
  const products = useSelector((state) => state.shop.products);

  const filteredProducts = products.filter((item) => item.category === props.category);

  return (
    <div className="Shop_category bg-gray-100 min-h-screen py-16 px-4 sm:px-16">
      <div className="bg-white shadow-lg rounded-lg flex flex-col sm:flex-row items-center sm:items-start p-8 sm:p-12 mb-12 transition-transform transform hover:scale-105">
        <div className="mt-12 flex flex-col justify-center text-center sm:text-left">
          <h1 className="text-7xl font-bold text-gray-800 mb-4 ">
            FLAT 50% OFF
            <span className="block text-7xl mt-4">
              12 <span className=" text-6xl text-[burlywood]"> HOURS </span> 20{" "}
              <span className="text-6xl text-[burlywood]"> MINUTES </span>
            </span>
          </h1>
          <Link
            className="inline-flex items-center justify-center px-1 py-1 mt-5 text-3xl font-medium text-white bg-[burlywood] rounded-lg hover:bg-black hover:text-white w-72"
            to=""
          >
            Shop Now
            <span className="pl-3 mt-2">
              <MoveRight size={50} />
            </span>
          </Link>
        </div>
        <div className="flex justify-center mt-8 sm:mt-0">
          <img
            className="w-64 sm:w-96 transition-transform transform hover:scale-105"
            src={home}
            alt="home"
          />
        </div>
      </div>

      <div className="container ">
        <div className="shopcategory-indexsort mb-8 text-center">
          <p className="text-gray-600 text-lg">
            Showing <span className="font-bold text-gray-800">1-{Math.min(filteredProducts.length, 12)}</span> out of{" "}
            <span className="font-bold text-gray-800">{filteredProducts.length}</span>
          </p>
        </div>

        <div className="shopcategory-product products-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              new_price={item.new_price}
              old_price={item.old_price}
              className="transition-transform transform hover:scale-105 hover:shadow-lg duration-300"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shopcategory;
