import React from 'react';
import { FaRegCircleDot } from "react-icons/fa6";

const Banner = () => {
     return (
          <div className='max-w-280 mx-auto py-20 flex flex-col lg:flex-row justify-between items-center gap-16.5 px-5 lg:px-0'>
               <div>
                    <div className='bg-linear-to-r from-[#eed8ff] to-[#dbd6fe] rounded-full px-5 py-2 flex items-center gap-2 max-w-80 justify-center mb-4'>
                         <FaRegCircleDot className='text-[#9514FA]' />
                         <p className='bg-linear-to-r from-[#9514FA] to-[#4F39F6] bg-clip-text text-transparent'>New: AI-Powered Tools Available</p>
                    </div>
                    <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold lg:leading-18 pb-5'>Supercharge Your <span className='bg-linear-to-r from-[#9514FA] to-[#4F39F6] bg-clip-text text-transparent'>Digital Workflow</span></h1>
                    <p className='pb-5 text-gray-500 max-w-130'>Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.</p>
                    <div className='flex items-center gap-3'>
                         <button className='btn bg-linear-to-r from-[#9514FA] to-[#4F39F6] hover:from-[#9614fa92] hover:to-[#4f39f686] text-white rounded-full'><a href="#products">Explore Products</a></button>
                         <button className='flex gap-2 btn bg-white hover:bg-[#9614fa92] rounded-full  font-semibold border border-[#9514FA]'><img src="Play.png" /><a className='bg-linear-to-r from-[#9514FA] to-[#4F39F6] bg-clip-text text-transparent' href="">Live Demo</a></button>
                    </div>
               </div>
               <div className='shadow-xl'>
                    <img src="banner.png" alt="" />
               </div>
          </div>
     );
};

export default Banner;