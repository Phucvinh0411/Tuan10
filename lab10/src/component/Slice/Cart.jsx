// src/components/Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../features/cart/cartSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const { items } = useSelector((state) => state.cart);

    return (
        <div>
            <h2>Cart</h2>
            {items.length === 0 ? (
                <p>Giỏ hàng trống</p>
            ) : (
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>
                            {item.name} - ${item.price} x {item.quantity}
                            <button onClick={() => dispatch(removeFromCart(item.id))}>Xóa</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;