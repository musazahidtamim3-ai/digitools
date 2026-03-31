import React, { useState } from 'react';
import { FaRegTimesCircle } from 'react-icons/fa';
import { GrTextAlignFull } from 'react-icons/gr';
import { IoCart } from "react-icons/io5";

const Navbar = ({ selected }) => {
     const [open,setOpen]= useState(false)
     return (
          <div className='flex justify-between items-center px-5 lg:px-20 py-3 bg-white shadow-md'>
               <div className='flex items-center gap-5'>
                    <div className='lg:hidden'>
                         <div onClick={() => setOpen(!open)}>
                              {
                                   open ? <FaRegTimesCircle className='text-[#9514FA]'></FaRegTimesCircle> : <GrTextAlignFull className='text-[#9514FA]'></GrTextAlignFull>
                              }
                         </div>
                         <ul className={`lg:hidden items-center gap-4 font-semibold absolute bg-white border border-gray-200 rounded-xl px-10 py-3 transition-10000 ${open ? "top-12" : "-top-100"}`}>
                              <li className='pb-1'><a href="#products">Products</a></li>
                              <hr className='border border-gray-200' />
                              <li className='py-1'>Features</li>
                              <hr className='border border-gray-200' />
                              <li className='py-1'><a href="#price">Pricing</a></li>
                              <hr className='border border-gray-200' />
                              <li className='py-1'>Testimonals</li>
                              <hr className='border border-gray-200' />
                              <li className='py-1'>FAQ</li>
                         </ul>
                    </div>
                    <div>
                         <h1 className='bg-linear-to-r from-[#9514FA] to-[#4F39F6] bg-clip-text text-transparent text-xl font-extrabold'>Digitools</h1>
                    </div>
               </div>
               <ul className='hidden lg:flex items-center gap-4 font-semibold'>
                    <li><a href="#products">Products</a></li>
                    <li>Features</li>
                    <li><a href="#price">Pricing</a></li>
                    <li>Testimonals</li>
                    <li>FAQ</li>
               </ul>
               <div className='flex items-center gap-6'>
                    <div class="indicator">
                         <a href="#cart"><IoCart className='w-5 h-10'> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </IoCart>
                              <span class="text-sm text-white px-1.5 py-[.2px] rounded-full bg-red-500 indicator-item translate-y-[.2px] translate-x-2.5">{selected.length}</span></a>
                    </div>
                    <button className='cursor-pointer font-semibold hidden md:flex'>Login</button>
                    <button className='btn bg-linear-to-r from-[#9514FA] to-[#4F39F6] hover:from-[#9614fa92] hover:to-[#4f39f686] text-white rounded-full'>Get Started</button>
               </div>
          </div>
     );
};

export default Navbar;