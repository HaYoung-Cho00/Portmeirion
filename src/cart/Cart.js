import React from 'react';
import './cart-style.scss';
import Button from '../include/Button'
import Quantity from '../include/Quantity';
import axios from 'axios'
import useAsync from '../hooks/useAsync'
import { Link } from 'react-router-dom'

function Cart() {
  async function getCartProducts() {
    const response = await axios.get('http://localhost:8080/cart')
    return response.data
  }
  const state = useAsync(getCartProducts)
  
  const { loading, error, data: products} = state
  
  if(loading) return <h1>Loading...</h1>
  if(error) return <h1>Failed</h1>
  if(!products) return null

  console.log(products)
  let arr = []
  let totalPrice;
  for(let i = 0; i < products.length; i++) {
    arr.push(products[i].price)
    console.log(arr)
  }
  
  totalPrice = arr.reduce((prev, curr) => {
    return parseFloat(prev) + parseFloat(curr)
  })
  console.log(totalPrice)
  return (
    <table id='cart' className='innerContainer'>
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
        {
          products.map(product => (
            <tr key={product.id}>
              <td><img src={`./img/${product.imgUrl}.jpg`} alt='cartItem1 '/></td>
              <td><Link to={`/detailView/${product.id}`}>{product.name}</Link></td>
              <td>
                <div className='qty'>
                  <Quantity readonly defaultValue={product.quantity} />
                </div>
              </td>
              <td>${product.price}</td>
              <td>${product.price * product.quantity}</td>
            </tr>
          ))
        }
      </tbody>
      <tfoot>
        <tr>
          <th colSpan='4'>Total Price</th>
          <th>${totalPrice}</th>
        </tr>
        <tr>
          <td colSpan='5'><Button>CHECKOUT</Button></td>
        </tr>
      </tfoot>
    </table>
  );
}

export default Cart;