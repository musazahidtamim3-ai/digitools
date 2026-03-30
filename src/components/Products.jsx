import React, { use } from 'react';
import Product from './Product';

const Products = ({ productPromise,selected,setSelected }) => {
     const products = use(productPromise)
     console.log(products)
     return (
          <div className='max-w-280 mx-auto'> 
               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 '>
                    {
                         products.map(product => (
                              <Product product={product} selected={selected} setSelected={setSelected}></Product>
                         ))
                    }
               </div>
          </div>
     );
};

export default Products;