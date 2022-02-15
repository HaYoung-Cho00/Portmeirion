import React from 'react';
import './cart-style.scss';
import Button from '../include/Button'
import axios from 'axios'
import useAsync from '../hooks/useAsync'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const QtyInput = styled.input`
border: 1px solid var(--gray);
padding: 5px;
text-align: center;
outline: none;
width: 50px;
height: 50px;
`

function Cart() {
  async function getCartProducts() {
    const response = await axios.get('http://localhost:8080/cart')
    return response.data
  }
  async function countProducts() {
    const response = await axios.get('http://localhost:8080/cartCount')
    return response.data
  }
  const state = useAsync(getCartProducts)
  const cartCountState = useAsync(countProducts)
  
  const { loading, error, data: products} = state
  const { loading: countLoading, error: countError, data: counts} = cartCountState
  
  if(loading) return <h1>Loading...</h1>
  if(error) return <h1>Failed</h1>
  if(!products) return null
  if(countLoading) return <h1>Loading...</h1>
  if(countError) return <h1>Failed</h1>
  if(!counts) return null

  let arr = []
  let totalPrice;
  for(let i = 0; i < products.length; i++) {
    arr.push(products[i].price)
  }
  
  totalPrice = arr.reduce((prev, curr) => {
    let total = parseFloat(prev) + parseFloat(curr)
    return total.toFixed(2)
  })
  return (
    <table id='cart' className='innerContainer'>
      <thead>  
        <tr>
          <th colSpan='5'>Your Cart ({counts[0]["COUNT(inCart)"]} Items)</th>
        </tr>
        <tr>
          <th>Product</th>
          <th></th>
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
                  <QtyInput readOnly defaultValue={product.quantity} />
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