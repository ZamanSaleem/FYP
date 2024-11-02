import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { MdOutlineSearch } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
function Header() {
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.items);
  const cartItemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const navItems = [
    {
      name: "Home",
      URL: "/",
    },
    {
      name: "Shop",
      URL: "/shop",
    },
    {
      name: "Category",
      submenu: [
        {
          name: "Men",
          URL: "/men",
        },
        {
          name: "Women",
          URL: "/women",
        },
        {
          name: "Kid",
          URL: "/kid",
        },
      ],
    },
    {
      name: "About",
      URL: "/about",
    },
    {
      name: "Contact Us",
      URL: "/contact-us",
    },
  ];

  return (
    <div className="flex items-center bg-gray-100 h-16 [box-shadow:none]">
      <div className="pt-3 ml-10">
        <img src={logo} alt="" width={90} height={90} />
      </div>

      <ul className="flex gap-6 text-gray-700 ml-28 text-sm font-medium">
        {navItems.map((item) => (
          <li key={item.name} className="group relative">
            <button
              className="cursor-pointer hover:text-[burlywood]"
              onClick={() => navigate(item.URL)}
            >
              {item.name}
            </button>

            {item.submenu && (
              <ul className="absolute shadow-lg pt-2 rounded-lg bg-gray-100 group-hover:block hidden">
                {item.submenu.map((subitem) => (
                  <li key={subitem.name}>
                    <button
                      className="w-full px-4 py-1.5 hover:text-[burlywood] hover:bg-gray-600"
                      onClick={() => navigate(subitem.URL)}
                    >
                      {subitem.name}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-2 ml-auto mr-56">
        <div className="flex items-center bg-white border hover:border-gray-400 px-2">
          <MdOutlineSearch size={25} className="text-gray-500" />
          <input
            type="text"
            className="border-gray-300 bg-white rounded-md text-[12px] py-2 px-3  w-full "
            placeholder="Search Product..."
          />
        </div>
        <NavLink to="/cart">
          <MdOutlineShoppingBag size={28} />
        </NavLink>
        <div className="w-[15px] h-[15px] flex justify-center items-center mt-[12px] -ml-[19px] rounded-[10px] text-[11px] bg-gray-700 text-[white]">
          {cartItemCount}
        </div>
      </div>

      <div className="flex gap-[13px] mr-4">
        <FaRegHeart size={22} className="cursor-pointer" />
        <NavLink to="/signinSignup">
          <FaUser size={22} />
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
