import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram } from 'react-icons/fa';

function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col text-center px-36 mb-8">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">CONTACT US</h2>
        <p className="text-gray-600">
          Trouble with your order? Drop us a line below, and we'll typically respond to your email within 24 hours Monday-Friday. On weekends and holidays, we like to venture off the grid, but we'll respond by the next business day.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2 flex flex-col">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">WHERE TO FIND US</h3>
          <div className="w-full h-96 overflow-hidden rounded-lg shadow-lg mb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27217.21618076215!2d74.26728808314863!3d31.492504945283798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903be2eeaf169%3A0x9d3548b82ef43c37!2sQuaid-i-Azam%20Campus%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1723302357343!5m2!1sen!2s"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            />
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">CONTACT DETAILS</h3>
          <div className="flex flex-col md:flex-row gap-8 text-gray-700 mb-8">
            <div className="flex-1">
              <p className="font-semibold">Address:</p>
              <p>1234 Lahore, Pakistan</p>
              <p className="font-semibold">Tel:</p>
              <p>+42 12345678</p>
              <p className="font-semibold">Mob:</p>
              <p>+92 12345678901</p>
              <p className="font-semibold">E-Mail:</p>
              <p>PU.edu@gmail.com</p>
            </div>
            <div className="flex-1">
              <p className="font-semibold">Address:</p>
              <p>1234 Lahore, Pakistan</p>
              <p className="font-semibold">Tel:</p>
              <p>+42 12345678</p>
              <p className="font-semibold">Mob:</p>
              <p>+92 12345678901</p>
              <p className="font-semibold">E-Mail:</p>
              <p>PU.edu@gmail.com</p>
            </div>
          </div>

          <div className="flex space-x-4 mt-4 text-gray-600">
            <a href="#" className="hover:text-gray-900">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="hover:text-gray-900">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-gray-900">
              <FaGoogle size={20} />
            </a>
            <a href="#" className="hover:text-gray-900">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="md:w-1/2 space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">LEAVE A MESSAGE</h3>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:border-[burlywood] "
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:border-[burlywood]"
            />
          </div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:border-[burlywood]"
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:border-[burlywood]"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="border border-gray-300 rounded-md p-3 w-full h-32 focus:outline-none focus:border-[burlywood]"
          />

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input type="checkbox" id="agree" className="mr-2 text-black accent-black" />
              <label htmlFor="agree" className="text-gray-700 font-bold ">I agree to the terms and conditions</label>
            </div>
            <button
              type="submit"
              className="inline-flex items-center bg-[burlywood] hover:bg-black text-white font-bold py-2 px-4 rounded-md text-xl"
            >
              Send Message <Send size={18} className="ml-2" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
