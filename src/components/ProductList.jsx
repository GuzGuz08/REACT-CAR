import React from 'react';

function ProductList({ products, addToCart }) {
  return (
    <div className="product-list">
      <h2>Productos Disponibles</h2>
      <div className="products">
        {products.map(product => (
          <div key={product.id} className="product-item">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>Precio: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Adquirir</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;