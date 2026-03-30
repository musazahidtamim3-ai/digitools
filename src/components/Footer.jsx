import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaSquareFacebook, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
     return (
          <div className='bg-black'>
               <div className='max-w-280 mx-auto py-10 px-5 lg:px-0 text-center lg:text-left'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3'>
                         <div className='text-white space-y-2'>
                              <h1 className='text-3xl font-bold'>Digitools</h1>
                              <p className='text-gray-400'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                         </div>
                         <div className='text-white'>
                              <p className='text-xl font-bold pb-3'>Product</p>
                              <ul className='text-gray-400 pb-2'>
                                   <li>Features</li>
                                   <li>Pricing</li>
                                   <li>Templates</li>
                                   <li>Integrations</li>
                              </ul>
                         </div>
                         <div className='text-white'>
                              <p className='text-xl font-bold pb-3'>Comapany</p>
                              <ul className='text-gray-400 pb-2'>
                                   <li>About</li>
                                   <li>Blog</li>
                                   <li>Careers</li>
                                   <li>Press</li>
                              </ul>
                         </div>
                         <div className='text-white'>
                              <p className='text-xl font-bold pb-3'>Recources</p>
                              <ul className='text-gray-400 pb-2'>
                                   <li>Documentation</li>
                                   <li>Help Center</li>
                                   <li>Community</li>
                                   <li>Contact</li>
                              </ul>
                         </div>
                         <div>
                              <h1 className='text-xl font-bold pb-3 text-white'>Social Links</h1>
                              <div className='flex gap-2 items-center justify-center lg:justify-start'>
                                   <div className='bg-white p-2 rounded-full'>
                                        <AiFillInstagram></AiFillInstagram>
                                   </div>
                                   <div className='bg-white p-2 rounded-full'>
                                        <FaSquareFacebook></FaSquareFacebook>
                                   </div>
                                   <div className='bg-white p-2 rounded-full'>
                                        <FaXTwitter></FaXTwitter>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Footer;