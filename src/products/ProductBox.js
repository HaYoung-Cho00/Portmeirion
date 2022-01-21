import React from 'react';

function ProductBox({products}) {
  return (
    <li>
        {products.map((product, index) => (
          <ul className='itemBox' key={product.id}>
            <img src="./img/sara/mug.jpg" alt="products" />
            <li className='new'>NEW</li>
            <li><h3>{product.name}</h3></li>
            <li>{product.price}</li>
          </ul>
        ))}
    </li>
  );
}

export default ProductBox;