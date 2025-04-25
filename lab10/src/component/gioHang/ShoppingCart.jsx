
import React, { useState } from 'react';

export default function ShoppingCart() {

  const products = [
    { id: 1, name: 'Sản phẩm A', price: 100 },
    { id: 2, name: 'Sản phẩm B', price: 200 },
    { id: 3, name: 'Sản phẩm C', price: 150 },
  ];

  const [cartItems, setCartItems] = useState([]);

  // Thêm sản phẩm vào giỏ hàng
  const addItem = (product) => {
    const updatedCart = [...cartItems];
    const existingItemIndex = updatedCart.findIndex(item => item.id === product.id);

    if (existingItemIndex !== -1) {
      updatedCart[existingItemIndex].quantity += 1; 
    } else {
      updatedCart.push({ ...product, quantity: 1 }); 
    }

    setCartItems(updatedCart);
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };


  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return; 

    const updatedCart = cartItems.map(item =>
      item.id === id ? { ...item, quantity } : item
    );

    setCartItems(updatedCart);
  };

  const calculateTotal = () => {
    const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return { totalQuantity, totalPrice };
  };

  const { totalQuantity, totalPrice } = calculateTotal();

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' ,border:"2px solid"}}>
      <h2>Giỏ hàng</h2>


      <div style={{ marginBottom: '20px' }}>
        <h3>Sản phẩm</h3>
        {products.map(product => (
          <div key={product.id} style={{ marginBottom: '10px' }}>
            <span>{product.name} - {product.price} VND</span>
            <button
              onClick={() => addItem(product)}
              style={{ marginLeft: '10px' }}
            >
              Thêm vào giỏ
            </button>
          </div>
        ))}
      </div>
      <hr />


      <div>
        <h3>Giỏ hàng của bạn</h3>
        {cartItems.length === 0 ? (
          <p>Giỏ hàng của bạn trống</p>
        ) : (
          cartItems.map(item => (
            <div key={item.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <span>{item.name} - {item.price} VND</span>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                style={{ width: '50px', marginLeft: '10px' }}
              />
              <button
                onClick={() => removeItem(item.id)}
                style={{ marginLeft: '10px', color: 'red' }}
              >
                Xoá
              </button>
            </div>
          ))
        )}
        <hr />


        <div style={{ marginTop: '20px' }}>
          <h4>Tổng số lượng: {totalQuantity}</h4>
          <h4>Tổng tiền: {totalPrice} VND</h4>
        </div>
      </div>
    </div>
  );
}
