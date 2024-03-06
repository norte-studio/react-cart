import React, { useState } from 'react';
import './Cart.css';

const discounts = {
    WELCOME15 : 15,
    WELCOME20 : 20
};

export default function Cart({items, onItemDeleted, onQuantityChanged}) {
  const [discountCode, setDiscountCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [isDiscountValid, setIsDiscountValid] = useState(null);

  const total = items.reduce((a,b) => a + b.price * b.quantity, 0);

  const applyDiscount = () => {
     setIsDiscountValid(discountCode in discounts);
     setDiscount(discountCode in discounts ? discounts[discountCode] : 0)
  };

  return (
    <div>
        <div className='section-title'>Cart</div>
        <div className='section-body'>
            <div>
                <div>
                    <span className='product'>Product</span>
                    <span className='price'>Price</span>
                    <span className='quantity'>Quantity</span>
                </div>
                <div className='list-content'>
                    {items.map(item => 
                    <div key={item.name} className='list-row'>
                            <span className='product'>{item.name}</span>
                            <span className='price'>${item.price}</span>
                            <span className='quantity'>
                                <input value={item.quantity} onChange={(e) => onQuantityChanged(item, +e.target.value || 0)}/>
                            </span>
                            <span className='delete'><button onClick={() => onItemDeleted(item)}>x</button></span>
                    </div>)}
                </div>
            </div>
            <div className='totals'>
                <div className='discount'>
                    Discount Code 
                    <input value={discountCode} onChange={(e) => setDiscountCode(e.target.value)} type='text'/>
                    <button onClick={applyDiscount}>Apply</button>
                </div> 
                {isDiscountValid && <div style={{color : 'green'}}>-${discount}% applied</div>}
                {isDiscountValid === false && <div style={{color : 'red'}}>Discount code is invalid</div>}
                <div className='total'>Total : {total - total * discount/100}</div>
            </div>
        </div>
        
    </div>
  )
}
