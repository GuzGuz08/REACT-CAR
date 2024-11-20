import React from 'react';

function CartItem({ item, removeFromCart, updateQuantity }) {
  return (
    <li className="cart-item">
      <h3>{item.name}</h3>
      <p>Precio: ${item.price}</p>
      <p>Cantidad: 
        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
        {item.quantity}
        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
      </p>
      <button onClick={() => removeFromCart(item.id)}>Borrar</button>
    </li>
  );
}

export default CartItem;
