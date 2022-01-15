import React from 'react';
import './lists-style.scss';

function Lists() {
  return (
    <table id='lists' className='innerContainer'>
      <thead>
        <tr>
          <th colspan='5'>Shopping Cart</th>
        </tr>
        <tr>
          <th>Check</th>
          <th>img</th>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><input type='checkbox' /></td>
          <td><img src='http://via.placeholder.com/80X80' alt='cartItem1 '/></td>
          <td><a href='#'>Product Name</a></td>
          <td><input type='number' defaultValue={1} /></td>
          <td>$200</td>
        </tr>
        <tr>
          <td><input type='checkbox' /></td>
          <td><img src='http://via.placeholder.com/80X80' alt='cartItem1 '/></td>
          <td><a href='#'>Product Name</a></td>
          <td><input type='number' defaultValue={1} /></td>
          <td>$200</td>
        </tr>
        <tr>
          <td><input type='checkbox' /></td>
          <td><img src='http://via.placeholder.com/80X80' alt='cartItem1 '/></td>
          <td><a href='#'>Product Name</a></td>
          <td><input type='number' defaultValue={1} /></td>
          <td>$200</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th colspan='4'>Total Price</th>
          <th>$600</th>
        </tr>
        <tr>
          <td colspan='5'><button>ORDER NOW</button></td>
        </tr>
      </tfoot>
    </table>
  );
}

export default Lists;