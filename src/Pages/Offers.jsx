import React from 'react'
import exclusive_image from '../../assets/exclusive_image.png'
 const Offers = () => {
  return (
    <div className='w-[65%] h-[60vh] flex m-auto px-[140px] mt-[50px] mb-[50px] bg-gray-800 rounded-[20px]'>
        <div className="flex-[1] flex flex-col text-white justify-center">
            <h1 className=' text-6xl font-bold' >Exclusive</h1>
            <h1 className=' text-6xl font-bold'>Offers For You</h1>
            <p className='text-2xl font-medium mt-3'>ONLY ON BEST SELLERS PRODUCTS</p>
            <button className='inline-flex text-black items-center text-2xl px-3 py-3 mt-4 font-medium bg-black text-gray-300 rounded-lg hover:bg-[burlywood] hover:text-[black] max-w-fit'>Check Now </button>
        </div>
        <div className="flex-[1] flex items-center justify-end pt-[10px]">
            <img src={exclusive_image} className='h-[350px]' alt="" />
        </div>
    </div>
  )
}
export default Offers

