import React from 'react';
import { toast } from 'react-toastify';

const Cart = ({ selected,setSelected }) => {
     const total = selected.reduce((sum, item) => sum + item.price, 0)
     const handlePayment = () => {
          setSelected([])
          toast.success("Payment Successfull")
     }
     const handleDeleteData = (item) => {
          const filteredData = selected.filter(s => s.id !== item.id)
          setSelected(filteredData)
          toast.error("Item deleted from cart")
     }
     return (
          <div className='px-5 lg:px-0'>
               <div id="cart" className='max-w-280 mx-auto border border-gray-200 p-5 mb-8'>
                    <h1 className='text-xl font-bold'>Your Cart</h1>
                    {
                         selected.length === 0 ? <p className='text-2xl font-extrabold bg-linear-to-r from-[#9514FA] to-[#4F39F6] mt-5 text-white rounded-xl text-center py-6'>Your Cart is empty !!!</p> : <div className='space-y-3 mt-5'>
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
                                                  <button onClick={() => handleDeleteData(item)} className='text-md text-red-400 font-bold cursor-pointer'>Remove</button>
                                             </div>

                                        </div>
                                   ))
                              }
                              <div className='flex justify-between'>
                                   <h3 className='text-gray-500 font-semibol'>Total :</h3>
                                   <p className='text-xl font-bold'>${total}</p>
                              </div>
                              <button onClick={handlePayment} className='bg-linear-to-r from-[#9514FA] to-[#4F39F6] text-white btn w-full rounded-full'>Proceed To Checkout</button>
                         </div>
                    }
               </div>
          </div>
     );
};

export default Cart;