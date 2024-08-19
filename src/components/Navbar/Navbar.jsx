import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { MdOutlineSearch } from "react-icons/md";
import { FaUser } from "react-icons/fa6";

function Navbar() {
    return (
        <div className='flex items-center bg-gray-100 h-16 relative [box-shadow:none]'>
            <div className='flex items-center pt-3 ml-10'>
                <img src={logo} alt="" width={90} height={90} />
            </div>
            <ul className='flex items-center text-gray-700 [list-style:none] gap-[22px] ml-20 text-md font-medium '>
                <li className='cursor-pointer hover:text-[burlywood]'>
                    <NavLink 
                        exact
                        to='/' 
                        className={({ isActive }) => isActive ? 'text-[burlywood] border-b-[3px] border-b-[burlywood] w-[50px] rounded-[1px]' : ''}
                    >
                        Home
                    </NavLink>
                </li>
                {/* <li className='cursor-pointer hover:text-[burlywood]'>
                    <NavLink 
                        exact
                        to='dashboard' 
                        className={({ isActive }) => isActive ? 'text-[burlywood] border-b-[3px] border-b-[burlywood] w-[50px] rounded-[1px]' : ''}
                    >
                        Dashboard
                    </NavLink>
                </li> */}
                <li className='cursor-pointer hover:text-[burlywood]'>
                    <NavLink 
                        exact
                        to='shop' 
                        className={({ isActive }) => isActive ? 'text-[burlywood] border-b-[3px] border-b-[burlywood] w-[50px] rounded-[1px]' : ''}
                    >
                        Shop
                    </NavLink>
                </li>

                <li className='cursor-pointer hover:text-[burlywood] relative group'>

                        Category &#x25BE;
                    
                    <ul className='absolute bg-gray-100 text-black left-0 hidden group-hover:block w-50'>
                        <li className='hover:text-[burlywood] my-1 hover:bg-black px-6 py-2'><NavLink to='/men'>Men</NavLink></li>
                        <li className='hover:text-[burlywood] my-1 hover:bg-black px-6 py-2'><NavLink to='/women'>Women</NavLink></li>
                        <li className='hover:text-[burlywood] my-1 hover:bg-black px-6 py-2'><NavLink to='/kid'>Kid</NavLink></li>
                    </ul>
                </li>

                <li className='cursor-pointer hover:text-[burlywood]'>
                    <NavLink 
                        to='/about' 
                        className={({ isActive }) => isActive ? 'text-[burlywood] border-b-[3px] border-b-[burlywood] w-[53px] rounded-[1px]' : ''}
                    >
                        About
                    </NavLink>
                </li>

                <li className='cursor-pointer hover:text-[burlywood]'>
                    <NavLink 
                        to='/contact-us' 
                        className={({ isActive }) => isActive ? 'text-[burlywood] border-b-[3px] border-b-[burlywood] w-[90px] rounded-[1px]' : ''}
                    >
                        Contact Us
                    </NavLink>
                </li>
            </ul>

            

            <div className='flex items-center gap-[10px] ml-auto mr-56'>
                
            <div className="flex items-center border bg-white border-gray-300 px-2">
                < MdOutlineSearch size={25} className='text-gray-500'/>
                <input
                type="text"
                className="border-none border-gray-300 bg-white rounded-md text-[12px] py-2 px-3 h-[35px] w-full focus:outline-none "
                placeholder="Search Product..."
                />
            </div>


            <NavLink to="/cart"><MdOutlineShoppingBag size={30} /></NavLink>
            <div className='w-[17px] h-[17px] flex justify-center items-center -mt-[14px] -ml-[19px] rounded-[10px] text-[12px] bg-gray-700 text-[white]'>0</div> 
            </div>


            <div className='flex items-center gap-[15px] absolute right-0 mr-4'>

                <FaRegHeart size={22} className='cursor-pointer' />
                <NavLink to="/signinSignup">< FaUser size={22} /></NavLink>
                
            </div>
        </div>
    );
}

export default Navbar;
