import React from 'react';
import { IoCart } from "react-icons/io5";

const Navbar = () => {
     return (
          <div className='flex justify-between items-center px-20 py-3 bg-white shadow-md'>
               <div>
                    <h1 className='bg-linear-to-r from-[#9514FA] to-[#4F39F6] bg-clip-text text-transparent text-xl font-extrabold'>Digitools</h1>
               </div>
               <ul className='flex items-center gap-4 font-semibold'>
                    <li>Products</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Testimonals</li>
                    <li>FAQ</li>
               </ul>
               <div className='flex items-center gap-4'>
                    <IoCart className='w-5 h-10'/>
                    <button className='font-semibold'>Login</button>
                    <button className='btn bg-linear-to-r from-[#9514FA] to-[#4F39F6] text-white rounded-full'>Get Started</button>
               </div>
          </div>
     );
};

export default Navbar;