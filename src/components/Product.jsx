import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Product = ({ product,selected,setSelected }) => {
     const [buy,setBuy]=useState(false)
     const handleBuy=()=>{
          setBuy(true);
          toast.success("Successfully added to cart!")
          setSelected([...selected,product])
     }
     return (
          <div className="card bg-base-100 border border-gray-200 shadow-sm">
               <div className="card-body">
                    <div className='flex justify-end'>
                         <span className={`px-3 py-1 rounded-full text-center ${product.tagType === "best-seller" ? "bg-[#fce28f64] text-[#f98806] " : product.tagType === "new" ? "bg-[#f0c9fa88] text-[#c705f8]" : "bg-[#b4f9b7] text-[#03ad0c]"}`}>{product.tagType}</span>
                    </div>
                    <div className='pb-2'>
                         <img src={product.icon} alt="" />
                    </div>

                    <div className='space-y-2'>
                         <h1 className='text-xl font-bold'>{product.name}</h1>
                         <p className='text-gray-500'>{product.description}</p>
                    </div>
                    <div>
                         <h1 className='text-gray-500'><span className='text-xl text-black font-bold'>${product.price}</span>/{product.period}</h1>
                    </div>

                    <ul className="mt-3 flex flex-col gap-2">
                         {
                              product.features.map(feature => (
                                   <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span className='text-gray-500'>{feature}</span>
                                   </li>
                              ))
                         }
   
                    </ul>
                    <div className="mt-6">
                         <button onClick={handleBuy} className="btn bg-linear-to-r from-[#9514FA] to-[#4F39F6] rounded-full border-none w-full text-white">{buy ?'Added to cart':'Buy Now'}</button>
                    </div>
               </div>
          </div>
     );
};

export default Product;