import React from 'react'
import img from '../../assets/about.jpg'
import { NavLink } from "react-router-dom";

export default function About() {
    return (
        <div >
            <div className="py-16 bg-black text-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className=" md:space-y-0 md:flex  lg:gap-12">
                    <div className=" lg:w-3/12">
                        <img
                            src={img}
                            alt="image"
                        />
                        
                    </div>
                    <div className="md:7/12 lg:w-6/12 pl-[95px]">
                        <h2 className="text-2xl text-[burlywood] font-bold md:text-3xl">
                        Welcome to Elegant Watches, 
                        </h2>
                        <h2 className="text-2xl text-[burlywood] font-bold md:text-3xl">
                        Your premier destination for stylish and precise timepieces.

                        </h2>                        
                        <p className="mt-6 text-white">
                        Our name reflects our commitment to helping you make the most of every minute.At Minute Man, we believe that a watch is more than just a time-telling device - it's a statement of style, a symbol of sophistication, and a reminder to make every moment count. That's why we curate a selection of high-quality watches that blend fashion, functionality, and affordability.

                            
                        </p>
                        <p className="mt-4 text-white">
                            Our mission is to provide exceptional customer service, fast shipping, and a hassle-free shopping experience. Whether you're looking for a sleek dress watch or a rugged sports watch, we've got you covered.

                        </p>
                        <p className="mt-4 text-white">
                        Join the Elegant Watches community today and start making the most of your time!"

                        </p>
                    </div>
                </div>
            </div>
            </div>
            <div className="about-us min-h-screen bg-gray-50 p-6">
      {/* Team Section */}
      <section className="team-section mb-12">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-12">Meet Our Team</h1>
        <div className="team-members grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        
          <div className="team-member bg-gray-200 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <img
              // src={ali_img} // Replace 
              alt=""
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-teal-500"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2 text-center">Ali Ahmad</h2>
            <p className="text-gray-600 text-center text-lg font-medium">CEO & Founder</p>
            <p className="text-gray-500 mt-2 text-center">
              Ali is the visionary behind our company, driving innovation and ensuring our team thrives.
            </p>
          </div>
          

          <div className="team-member bg-gray-200 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <img
              // src={customer2_img} // Replace 
              alt=""
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-teal-500"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2 text-center">Muhammad Zaman Saleem</h2>
            <p className="text-gray-600 text-center text-lg font-medium">Lead Designer</p>
            <p className="text-gray-500 mt-2 text-center">
              Muhammad leads our design team, creating stunning visuals that captivate our customers.
            </p>
          </div>
          

          <div className="team-member bg-gray-200 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <img
              // src={customer3_img} // Replace 
              alt=""
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-teal-500"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2 text-center">Noor Fatima</h2>
            <p className="text-gray-600 text-center text-lg font-medium">Marketing Specialist</p>
            <p className="text-gray-500 mt-2 text-center">
              Noor is our marketing guru, ensuring that our brand reaches and resonates with our audience.
            </p>
          </div>
        </div>
      </section>

      
      <section className="contact-us-section bg-gray-100 p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Get in Touch</h1>
        <p className="text-gray-600 mb-6 text-center">
          Have questions or need more information? We’d love to hear from you. Fill out the form below to get in touch with us.
        </p>
        <div className="flex justify-center">
          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
          {/* <NavLink 
          exact
          to="/contact-us "> */}
            Contact
          {/* </NavLink> */}
            
          </button>
        </div>
      </section>
    </div>
    </div>
        
    );
}



