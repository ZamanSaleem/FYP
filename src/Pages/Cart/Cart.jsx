import React, { useState } from 'react';
import productImage1 from '../../assets/product_1.jpeg';
import productImage2 from '../../assets/product_2.jpeg';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { FaTimes } from 'react-icons/fa';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Epic X Flight of CR7',
      description: 'Mint / 100 mg / x1',
      originalPrice: 5912.00,
      currentPrice: 5000.00,
      quantity: 1,
      image: productImage1,
    },
    {
      id: 2,
      name: 'Epic X Flight of CR7',
      description: '100 mg / x1',
      originalPrice: 7825.00,
      currentPrice: 7000.00,
      quantity: 1,
      image: productImage2,
    },
  ]);

  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);

  // Function to handle quantity change
  const updateQuantity = (id, increment) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + increment) }
          : item
      )
    );
  };

  // Function to remove item from cart
  const removeItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  // Function to handle coupon code change
  const handleCouponChange = (e) => {
    setCouponCode(e.target.value);
  };

  // Function to apply coupon
  const applyCoupon = () => {
    // Apply coupon logic here
    setCouponApplied(true);
  };

  // Calculate totals
  const calculateSubtotal = () => cartItems.reduce((acc, item) => acc + item.currentPrice * item.quantity, 0);
  const calculateTotal = () => calculateSubtotal(); // Add tax and shipping calculations if needed

  return (
    <div className="bg-gray-50 text-gray-900">
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-extrabold mb-10 text-center">Your Cart</h1>
        
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          {/* Cart Items */}
          <div className="w-full lg:w-2/3 bg-white p-6 shadow-lg rounded-lg">
            {cartItems.map(item => (
              <div key={item.id} className="flex items-center justify-between border-b pb-6 mb-6">
                <div className="flex items-center space-x-4">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg shadow-sm" />
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <p className="text-gray-400 line-through">Rs {item.originalPrice.toFixed(2)}</p>
                    <p className="text-lg font-semibold">Rs {item.currentPrice.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                      aria-label="Decrease quantity"
                      onClick={() => updateQuantity(item.id, -1)}
                      disabled={item.quantity <= 1}
                    >
                      <AiOutlineMinus />
                    </button>
                    <span className="text-lg font-semibold">{item.quantity}</span>
                    <button
                      className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                      aria-label="Increase quantity"
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      <AiOutlinePlus />
                    </button>
                  </div>
                  <div className="text-lg font-semibold">Rs {(item.currentPrice * item.quantity).toFixed(2)}</div>
                  <button
                    className="text-red-500 hover:text-red-700"
                    aria-label="Remove item"
                    onClick={() => removeItem(item.id)}
                  >
                    <FaTimes />
                  </button>
                </div>
              </div>
            ))}

            {/* Coupon Section */}
            <div className="mt-10">
              <p className="text-lg font-semibold text-gray-800 mb-4">Have a coupon? Enter your code.</p>
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="Coupon code"
                  value={couponCode}
                  onChange={handleCouponChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-burlywood"
                />
                <button
                  className="px-6 py-3 bg-[burlywood] hover:bg-gray-800 text-white font-semibold rounded-lg"
                  onClick={applyCoupon}
                >
                  Apply
                </button>
              </div>
              <div className="mt-4 text-right">
                <a href="#" className="text-sm text-gray-700 hover:underline">Update Cart</a>
              </div>
            </div>
          </div>

          {/* Cart Totals */}
          <div className="w-full lg:w-1/3 bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">Cart Totals</h2>
            <div className="border-t pt-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Shipping (3-5 Business Days)</span>
                <span className="font-semibold">Free</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Tax</span>
                <span className="font-semibold">Rs 0</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold">Rs {calculateSubtotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xl font-semibold mb-6">
                <span>Total</span>
                <span>Rs {calculateTotal().toFixed(2)}</span>
              </div>
              <button className="w-full px-6 py-3 bg-[burlywood] hover:bg-gray-800 text-white font-semibold rounded-lg" aria-label="Proceed to checkout">
                Proceed to Checkout
              </button>
              <div className="mt-6 text-center">
                <a href="#" className="text-sm text-gray-700 hover:underline">Continue Shopping</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;

