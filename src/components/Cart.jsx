import React from 'react';

const Cart = ({ selected }) => {
     const total = selected.reduce((sum,item)=>sum+item.price,0)
     return (
          <div className='max-w-280 mx-auto border border-gray-200 p-5 mb-8'>
               <h1 className='text-xl font-bold'>Your Cart</h1>
               <div className='space-y-3 mt-5'>
                    {
                         selected.map(item => (
                              <div className='bg-gray-100 rounded-xl px-5 py-3 flex justify-between items-center'>
                                   <div className='flex items-center gap-4'>
                                        <div className='bg-white p-2 rounded-full'>
                                             <img src={item.icon} alt="" />
                                        </div>
                                        <div>
                                             <h3 className='text-lg font-semibold pb-1'>{item.name}</h3>
                                             <p className='text-gray-500'>${item.price}</p>
                                        </div>
                                   </div>
                                   <div>
                                        <button className='text-md text-red-400 font-bold'>Remove</button>
                                   </div>

                              </div>
                         ))
                    }
                    <div className='flex justify-between'>
                         <h3 className='text-gray-500 font-semibol'>Total :</h3>
                         <p className='text-xl font-bold'>${total}</p>
                    </div>
                    <button className='bg-linear-to-r from-[#9514FA] to-[#4F39F6] text-white btn w-full rounded-full'>Proceed To Checkout</button>
               </div>
          </div>
     );
};

export default Cart;