import React from 'react';
import { IoCart } from "react-icons/io5";

const Navbar = ({selected}) => {
     return (
          <div className='flex justify-between items-center px-5 lg:px-20 py-3 bg-white shadow-md'>
               <div>
                    <h1 className='bg-linear-to-r from-[#9514FA] to-[#4F39F6] bg-clip-text text-transparent text-xl font-extrabold'>Digitools</h1>
               </div>
               <ul className='hidden lg:flex items-center gap-4 font-semibold'>
                    <li>Products</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Testimonals</li>
                    <li>FAQ</li>
               </ul>
               <div className='flex items-center gap-4'>
                    <div class="indicator">
                         <IoCart className='w-5 h-10'> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </IoCart>
                         <span class="text-sm text-white px-1 py-[.2px] rounded-full bg-linear-to-r from-[#9514FA] to-[#4F39F6] indicator-item">{selected.length}</span>
                    </div>
                    <button className='font-semibold'>Login</button>
                    <button className='btn bg-linear-to-r from-[#9514FA] to-[#4F39F6] text-white rounded-full'>Get Started</button>
               </div>
          </div>
     );
};

export default Navbar;