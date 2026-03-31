import React from 'react';

const Steps = () => {
     return (
          <div className='max-w-280 mx-auto my-30 px-5 lg:px-0'>
               <div className='text-center space-y-3'>
                    <h1 className='text-3xl md:text-5xl font-bold'>Get Started in <span className='bg-linear-to-r from-[#9514FA] to-[#4F39F6] bg-clip-text text-transparent'>3 Steps</span></h1>
                    <p className='max-w-135 mx-auto text-gray-500'>Start using premium digital tools in minutes, not hours.</p>
               </div> 
               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
                    <div className='bg-white border border-gray-200 shadow-md px-5 py-8 rounded-xl'>
                         <div className='flex justify-end'>
                              <h2 className='bg-linear-to-r from-[#9514FA] to-[#4F39F6] w-10 h-10 rounded-full text-white flex items-center justify-center font-bold'>01</h2>
                         </div>
                         <div className='flex justify-center items-center h-30'>
                              <div className='bg-linear-to-r from-[#f0e4fa] to-[#e4e2f4] rounded-full p-4'>
                                   <img  src="/user.png" alt="" />
                              </div>
                         </div>
                         <h3 className='text-center text-xl font-bold pt-3'>Create Account</h3>
                         <p className='text-center text-gray-500 pt-2 pb-3'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                    <div className='bg-white border border-gray-200 shadow-md p-5 rounded-xl'>
                         <div className='flex justify-end'>
                              <h2 className='bg-linear-to-r from-[#9514FA] to-[#4F39F6] w-10 h-10 rounded-full text-white flex items-center justify-center font-bold'>02</h2>
                         </div>
                         <div className='flex justify-center items-center h-30'>
                              <div className='bg-linear-to-r from-[#f0e4fa] to-[#e4e2f4] rounded-full p-4'>
                                   <img src="/package.png" alt="" />
                              </div>
                         </div>
                         <h3 className='text-center text-xl font-bold pt-3'>Choose Products</h3>
                         <p className='text-center text-gray-500 pt-2 pb-3'>Browse our catalog and select the tools that fit your needs.</p>
                    </div>
                    <div className='bg-white border border-gray-200 shadow-md p-5 rounded-xl'>
                         <div className='flex justify-end'>
                              <h2 className='bg-linear-to-r from-[#9514FA] to-[#4F39F6] w-10 h-10 rounded-full text-white flex items-center justify-center font-bold'>03</h2>
                         </div>
                         <div className='flex justify-center items-center h-30'>
                              <div className='bg-linear-to-r from-[#f0e4fa] to-[#e4e2f4] rounded-full p-4'>
                                   <img src="/rocket.png" alt="" /> 
                              </div>
                         </div>
                         <h3 className='text-center text-xl font-bold pt-3'>Start Creating</h3>
                         <p className='text-center text-gray-500 pt-2 pb-3'>Download and start using your premium tools immediately.</p>
                    </div>
               </div>
          </div>
     );
};

export default Steps;