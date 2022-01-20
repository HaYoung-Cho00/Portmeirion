import React from 'react';

function ProductBox(props) {
  return (
    <li>
      <ul className='itemBox'>
        <img src="./img/items/botanic-garden-harmony-bakeware/BG_Harmony_Baking_Dish_with_Handle_1.jpg" alt="products" />
        <li className='new'>NEW</li>
        <li><h3>Product Name</h3></li>
        <li>$120.99</li>
      </ul>
    </li>
  );
}

export default ProductBox;