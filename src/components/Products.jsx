import React, { use } from 'react';
import Product from './Product';

const Products = ({ productPromise }) => {
     const products = use(productPromise)
     console.log(products)
     return (
          <div className='max-w-280 mx-auto'>
               <div className='text-center space-y-3 mb-8'>
                    <h1 className='text-4xl font-extrabold'>Premium Digital Tools</h1>
                    <p className='max-w-135 mx-auto text-gray-500'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
               </div> 
               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 px-5 lg:px-0'>
                    {
                         products.map(product => (
                              <Product product={product}></Product>
                         ))
                    }
               </div>
          </div>
     );
};

export default Products;