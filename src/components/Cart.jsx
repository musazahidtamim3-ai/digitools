import React from 'react';
import { FaCartShopping } from 'react-icons/fa6';
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
               <div id="cart" className='max-w-280 mx-auto border border-gray-200 shadow-md rounded-xl p-5 mb-8'>
                    <h1 className='text-xl font-bold'>Your Cart</h1>
                    {
                         selected.length === 0 ? <div className='space-y-2 mt-5 py-20'><div className='flex justify-center'><FaCartShopping className='w-20 h-20 text-gray-400'></FaCartShopping></div><p className='text-2xl font-bold text-gray-400 rounded-xl text-center pt-4'>Your Cart is empty !!!</p></div> : <div className='space-y-3 mt-5'>
                              {
                                   selected.map(item => (
                                        <div className='bg-gray-100 rounded-xl px-5 py-3 flex justify-between items-center'>
                                             <div className='flex items-center gap-4'>
                                                  <div className='bg-white p-2 rounded-full'>
                                                       <img src={item.icon} alt="" />
                                                  </div>
                                                  <div>
                                                       <h3 className='text-md md:text-lg font-semibold pb-1'>{item.name}</h3>
                                                       <p className='text-gray-500 text-sm md:text-md'>${item.price}</p>
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