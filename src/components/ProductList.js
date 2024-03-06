import React, { useState } from 'react';
import products from './products';
import './ProductList.css'

export default function ProductList({onProductAdded}) {
  
  
  return (
    <div>
       <div className='section-title'>Products</div>
       <div className='section-body'>
        <div>
          <div className='pl-product'>Product</div>
          <div className='pl-price'>Price</div>
          <div className='pl-add'>Add</div>
        </div>
        <div className='list-content'>
          {products.map(product => 
            <div key={product.id} className='list-row'>
              <div className='pl-product'>{product.name}</div>
              <div className='pl-price'>{product.price}</div>
              <div className='pl-add'>
                <button onClick={() => onProductAdded(product)}>Add</button>
              </div>
            </div>
          )}
        </div>
       </div>
       
    </div>
  )
}
