import React from 'react';
import './lists-style.scss';
import Button from '../include/Button'

function Lists() {
  return (
    <table id='lists' className='innerContainer'>
      <thead>
        <tr>
          <th colSpan='5'>Your Cart (1 Items)</th>
        </tr>
        <tr>
          <th>Product</th>
          <th> </th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><img src='http://via.placeholder.com/100X100' alt='cartItem1 '/></td>
          <td><a href='#'>Product Name</a></td>
          <td className='qty'><input type='number' defaultValue={1} />
          <p>Delete</p>
          </td>
          <td>$200</td>
          <td>$800</td>
        </tr>
        <tr>
          <td><img src='http://via.placeholder.com/100X100' alt='cartItem1 '/></td>
          <td><a href='#'>Product Name</a></td>
          <td className='qty'><input type='number' defaultValue={1} />
          <p>Delete</p>
          </td>
          <td>$200</td>
          <td>$400</td>
        </tr>
        <tr>
          <td><img src='http://via.placeholder.com/100X100' alt='cartItem1 '/></td>
          <td><a href='#'>Product Name</a></td>
          <td className='qty'><input type='number' defaultValue={1} />
          <p>Delete</p>
          </td>
          <td>$200</td>
          <td>$600</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th colSpan='4'>Total Price</th>
          <th>$1800</th>
        </tr>
        <tr>
          <td colSpan='5'><Button>CHECKOUT</Button></td>
        </tr>
      </tfoot>
    </table>
  );
}

export default Lists;