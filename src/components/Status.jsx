import React from 'react';

const Status = () => {
     return (
          <div className='bg-linear-to-r from-[#9514FA] to-[#4F39F6] text-white mb-20'>
               <div className='max-w-280 mx-auto flex justify-center gap-40 items-center py-8'>
                    <div className='space-y-3'>
                         <h1 className='text-3xl font-bold'>50k+</h1>
                         <p>Active Users</p>
                    </div>
                    <div className='w-px bg-white/60 h-12'></div>
                    <div className='space-y-3'>
                         <h1 className='text-3xl font-bold'>200+</h1>
                         <p>Premium Tools</p>
                    </div>
                    <div className='w-px bg-white/60 h-12'></div>
                    <div className='space-y-3'>
                         <h1 className='text-3xl font-bold'>4.9</h1>
                         <p>Rating</p>
                    </div>
               </div>  
          </div>
     );
};

export default Status;