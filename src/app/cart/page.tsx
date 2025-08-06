'use client';

import { useEffect, useState } from 'react';

export default function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);
  const handleRemove = (indexToRemove: number) => {
    const updatedCart = [...cart];           
    updatedCart.splice(indexToRemove, 1);    
    setCart(updatedCart);                    
    localStorage.setItem('cart', JSON.stringify(updatedCart)); 
  };

  return (
    <div style={{marginTop:"80px"}}>
      <h2>Your Cart</h2><hr/>

      {cart.length === 0 ? (
        <p>🛒 Your cart is empty</p>
      ) : (
        cart.map((item: any, index: number) => (
            
          <div key={index} style={{marginBottom: '20px',display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <img src={item.image} width={100} />
            <h5>{item.title}</h5>
            <h5>Rs. {item.price}</h5>
            <button onClick={() => handleRemove(index)}
                style={{
                   backgroundColor: '#e74c3c',
                   color: 'white',
                   border: 'none',
                   borderRadius: '4px',
                   cursor: 'pointer',
                   fontSize: '14px',
                   fontWeight: 500,
                   transition: 'background-color 0.3s ease',
                   width:'100px',
                   height:'40px'
                 }}>
                Remove</button>
          </div>
        ))
      )}
    </div>
  );
}