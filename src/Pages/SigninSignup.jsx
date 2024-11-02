import { MoveRight } from "lucide-react";
import { Mail } from "lucide-react";
import { Lock } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import { User } from "lucide-react";
import { useState } from 'react'
import logo from './../assets/logo.png'

export default function Signin_Signup() {

    const [click, setClick] = useState("Log In")
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState("");

    const handleSubmit = (e) => e.preventDefault();


    return (

        <div className="flex flex-col items-center bg-white  min-h-screen">
            <div className=" p-8 rounded-lg  max-w-md">

                {click === "Log In" ?
                    <div className="flex flex-col items-center ">
                        <img src={logo} alt="" width={120} height={90} />
                        <h1 className=" items-center text-4xl font-extrabold mt-4">Welcome Back</h1>

                        <p className=" mt-2 flex mx-[26px] text-center">Sign in to access to your dashboard, settings and project</p>
                    </div> : <div className="flex flex-col items-center ">
                        <img src={logo} alt="" width={120} height={90} />
                        <h1 className="text-4xl font-extrabold items-center mt-4">Register Now</h1>
                    </div>}


                <div className="flex justify-between gap-[10px] h-[40px]  mt-4 ">
                    <button className="flex justify-center items-center bg-gray-100 w-[120px] h-[40px] hover:bg-gray-300 py-2
                      px-4 rounded-md ">
                        <FcGoogle size={25}/>
                    </button>

                    <button className="flex justify-center items-center bg-gray-100 w-[120px] h-[40px] hover:bg-gray-300 py-2 px-4 rounded-md ">
                        <IoLogoApple size={25}/>
                    </button>

                    <button className="flex items-center  justify-center bg-gray-100 w-[120px] h-[40px] hover:bg-gray-300 py-2 px-4 rounded-md ">
                        <IoLogoGithub size={25}/>
                    </button>
                </div>


                <div className="mt-4 w-full ">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300">
                            </div>
                        </div>
                        <div className="relative flex justify-center   text-sm">
                            <span className=" px-2 bg-white text-black">
                                or continue with
                            </span>
                        </div>
                    </div>
                </div>


                <form onSubmit={handleSubmit}>

                    {click === "Log In" ? <div></div> : <a>
                        <label htmlFor="" className="block text-black font-semibold  mt-4 mb-2">
                            Name
                        </label>
                        <div className="flex items-center border bg-white border-gray-300 px-2">
                            <input
                                type="text"
                                value={name}
                                className="border-none border-gray-300 rounded-md  py-2 px-3 w-full focus:outline-none "
                                placeholder="Enter Your Name"
                                onChange={(e) => setName(e.target.value)}

                            />
                            <User className="text-gray-500" />
                        </div>
                    </a>}




                    <label htmlFor="email" className="block text-black font-semibold  mt-4 mb-2">
                        Email
                    </label>
                    <div className="flex items-center border bg-white border-gray-300 px-2">
                        <input
                            type="email"
                            value={email}
                            className="border-none border-gray-300 rounded-md  py-2 px-3 w-full focus:outline-none"
                            placeholder="test@example.com"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Mail className="text-gray-500" />
                    </div>


                    <label htmlFor="password" className="flex justify-between  text-black font-semibold mb-2 mt-4">
                        Password
                        <a href="#" className="text-[burlywood] hover:underline">
                            Forgot Password?
                        </a>
                    </label>
                    <div className=" flex items-center bg-white border border-gray-300 mb-2 px-2 ">
                        <input
                            type="password"
                            value={password}
                            placeholder="Your Password"
                            className="border-none border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Lock className="text-gray-500" />
                    </div>

                    {click === "Log In" ?
                        <div className="flex justify-between mb-4 ">
                            <div className="flex items-center">
                                <input type="checkbox" id="remember" className="mr-2 accent-black" />
                                <label htmlFor="remember">Remember me</label>
                            </div>
                        </div> : <div className="flex justify-between mb-4 ">
                            <div className="flex items-center">
                                <input type="checkbox" id="remember" className="mr-2 accent-black" />
                                <label htmlFor="remember">I agree to the terms and conditions</label>
                            </div>
                        </div>}


                    <div>
                        <button
                            type="submit"
                            className="flex bg-[burlywood] hover:bg-black justify-center text-white font-bold py-2 px-4 rounded-md w-full"
                        >
                            {click === "Log In" ? 'Sign In' : "Sign Up, It's Free"} <a className="pl-[9px] pt-[1px]">< MoveRight /></a>
                        </button>

                    </div>



                    <div className=''>
                        <div className="mt-4 text-center">
                            <p>{click === "Log In" ? "Don't have an account?" : "Already have an account?"} <a onClick={() => setClick(click => click !== "Log In" ? 'Log In' : 'Sign Up')} href="#" className="text-[burlywood] hover:underline">{click === "Log In" ? "Create an account" : "Sign In"}</a></p>
                        </div>
                    </div>
                </form>

            </div>
        </div>

    );
}