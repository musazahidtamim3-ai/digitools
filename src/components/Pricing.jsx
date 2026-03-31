;const Pricing = () => {
     return (
          <div className='max-w-280 mx-auto my-30 px-5 lg:px-0'>
               <div className='text-center space-y-3'>
                    <h1 className='text-3xl md:text-5xl font-bold'>Simple, Transparent <span className='bg-linear-to-r from-[#9514FA] to-[#4F39F6] bg-clip-text text-transparent'>Pricing</span> </h1>
                    <p className='max-w-135 mx-auto text-gray-500 text-sm md:text-md'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
               </div>
               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4 mt-10 '>
                    <div className="card bg-base-200  border border-gray-200 shadow-sm">
                         <div className="card-body">
                              <div className='space-y-2'>
                                   <h2 className="text-2xl font-bold">Startar</h2>
                                   <span className="text- text-gray-500">Perfect for getting started</span>
                                   <p className='text-gray-500 py-4'><span className='text-xl font-bold text-black'>$0</span>/Month</p>
                              </div>
                              
                              <ul className="flex flex-1 flex-col gap-2 text-xs text-gray-500">
                                   <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Access to 10 free tools</span>
                                   </li>
                                   <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Basic templates</span>
                                   </li>
                                   <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Community support</span>
                                   </li>
                                   <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>1 project per month</span>
                                   </li>
                              </ul>
                              <div className="mt-3">
                                   <button className="btn bg-linear-to-r from-[#9514FA] to-[#4F39F6] hover:from-[#9614fa92] hover:to-[#4f39f686] text-white w-full rounded-full">Subscribe</button>
                              </div>
                         </div>
                    </div>
                    <div className="card bg-linear-to-r from-[#9514FA] to-[#4F39F6] shadow-sm relative">
                         <div className="card-body">
                              <div className='space-y-2'>
                                   <h2 className="text-2xl text-white font-bold">Pro</h2>
                                   <span className="text-white">Best for professionals</span>
                                   <p className='text-white py-4'><span className='text-xl font-bold text-white'>$29</span>/Month</p>
                              </div>
                              
                              <ul className="flex flex-1 flex-col gap-2 text-xs text-white">
                                   <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Access to all premium tools</span>
                                   </li>
                                   <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Unlimited templates</span>
                                   </li>
                                   <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Priority support</span>
                                   </li>
                                   <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Unlimited projects</span>
                                   </li>
                                   <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Cloud sync</span>
                                   </li>
                                   <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Advanced analytics</span>
                                   </li>
                              </ul>
                              <div className="mt-3">
                                   <button className="btn bg-white hover:bg-base-300 border-none w-full rounded-full"><a className='bg-linear-to-r from-[#9514FA] to-[#4F39F6] bg-clip-text text-transparent'>Start Pro Trial</a></button>
                              </div>
                         </div>
                         <div className='absolute -top-4 left-1/2 -translate-x-1/2'>
                              <p className='px-3 py-1 rounded-full bg-[#FEF3C6] text-[#BB4D00] '>Most Popular</p>
                         </div>
                    </div>
                    
                    <div className="card bg-base-200 border border-gray-200 shadow-sm">
                         <div className="card-body">
                              <div className='space-y-2'>
                                   <h2 className="text-2xl font-bold">Enterprice</h2>
                                   <span className="text- text-gray-500">For teams and business</span>
                                   <p className='text-gray-500 py-4'><span className='text-xl font-bold text-black'>$99</span>/Month</p>
                              </div>
                              
                              <ul className="flex flex-1 flex-col gap-2 text-xs text-gray-500">
                                   <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Everything in Pro</span>
                                   </li>
                                   <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Team collaboration</span>
                                   </li>
                                   <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Custom integrations</span>
                                   </li>
                                   <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Dedicated support</span>
                                   </li>
                                   <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>SLA guarantee</span>
                                   </li>
                                   <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Custom branding</span>
                                   </li>
                              </ul>
                              <div className="mt-3">
                                   <button className="btn bg-linear-to-r from-[#9514FA] to-[#4F39F6] hover:from-[#9614fa92] hover:to-[#4f39f686] text-white w-full rounded-full">Contact Sales</button>
                              </div>
                         </div>
                    </div>
                    
               </div>
          </div>
     );
};

export default Pricing;