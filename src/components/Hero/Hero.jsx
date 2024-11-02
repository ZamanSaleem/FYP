import React from "react";
import { Link } from "react-router-dom";
import home from "../../assets/home.png";
import { MoveRight } from "lucide-react";
// import Newcollection from "../Newcollection/Newcollection";
// import Offers from "../Offers/Offers";
// import NewsLetter from "../../Pages/NewsLetter/NewsLetter.jsx"
// import Popular from "../Popular/Popular.jsx";

export default function Home() {
  return (
    <div>
    <div className="bg-white">
      <div className="text-black flex rounded-lg sm:mx-16 mx-2 sm:py-16">
        <div className="flex-1 flex items-center">
          <div className="flex flex-col gap-4">
            <h2 className="text-6xl text-black font-bold ">
              Our Best <a className="text-[burlywood]">Luxury</a>
              <span className="hidden sm:block text-6xl">Watch Collections</span>
              <span className="text-6xl">For You</span>
              <p className="text-[burlywood] mt-4 text-3xl">
                {" "}
                The Future On Your Wrist
              </p>
            </h2>

            <Link
              className="inline-flex text-black items-center text-2xl px-6 py-3 font-medium bg-black text-white rounded-lg hover:bg-[burlywood] hover:text-[black] max-w-fit"
              to="/"
            >
              Explore Now{" "}
              <a className="pl-[10px]">
                <MoveRight size={30}/>
              </a>
            </Link>
          </div>
        </div>
        <div className="flex place-items-center">
          <img className="w-64 sm:w-96 transition-transform transform hover:scale-105" src={home} alt="image1" />
        </div>
      </div>
    </div>
      {/* <Newcollection />
      <Offers />
      <Popular />
      <NewsLetter/> */}
      </div>
  );
}
