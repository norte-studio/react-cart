import React, { useEffect, useState } from 'react';
import './ProductList.css'

export default function ProductList({onProductAdded}) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setProducts(data);
    };
    getData();
   
  },[]);
  
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
            <>
              <div key={product.id} className='list-row'>
                <div className='pl-product'>{product.title}</div>
                <div className='pl-price'>${product.price}</div>
                <div className='pl-add'>
                  <button className='btn' onClick={() => onProductAdded(product)}>Add</button>
                </div>
              </div>
              <div className='list-row-separator'></div>
            </>
          )}
        </div>
       </div>
       
    </div>
  )
}
