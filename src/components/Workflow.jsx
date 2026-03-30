import React from 'react';

const Workflow = () => {
     return (
          <div className='bg-linear-to-r from-[#9514FA] to-[#4F39F6]'>
               <div className='max-w-280 mx-auto px-5 lg:px-0'>
                    <div className='text-center text-white space-y-2 py-10 px-5 lg:px-0'>
                         <h1 className='text-3xl font-bold'>Ready to Transform Your Workflow?</h1>
                         <p className='text-gray-200 max-w-150 mx-auto text-sm md:text-md'>Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.</p>
                         <div className='flex gap-4 justify-center pt-2'>
                              <button className='btn rounded-full bg-white text-purple-600'><a href="#products">Explore Products</a></button>
                              <button className='btn rounded-full bg-linear-to-r from-[#9514FA] to-[#4F39F6] border border-white text-white'><a href="#price">View Pricing</a></button>
                         </div>
                         <div className='flex gap-2 justify-center items-center text-gray-200 text-sm md:text-md pt-2'>
                              <p>14-free-trial</p>
                              <div className='w-1 h-1 bg-white rounded-full'></div>
                              <p>No credit card required</p>
                              <div className='w-1 h-1 bg-white rounded-full'></div>
                              <p>Cancel anytime</p>
                         </div>
                    </div>
               </div> 
          </div>
     );
};

export default Workflow;