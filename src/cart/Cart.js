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
  const cartCountState = useAsync(countProducts)
  const state = useAsync(getCartProducts)
  const { loading, error, data: products} = state
  const { loading: countLoading, error: countError, data: counts} = cartCountState
    
  if(loading || countLoading) return <h1>Loading...</h1>
  if(error || countError) return <h1>Failed</h1>
  if(!products || !counts) return null

  let arr = []
  let totalPrice;
  for(let i = 0; i < products.length; i++) {
    arr.push(products[i].price)
  }
  
  totalPrice = arr.reduce((prev, curr) => {
    let total = parseFloat(prev) + parseFloat(curr)
    return total.toFixed(2)
  })

  function deleteCartItems(id) {
    axios.put(`http://localhost:8080/deleteCart/${id}`, {
    inCart: 0,
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
  }

  return (
    <table id='cart' className='innerContainer'>
      <thead>  
        <tr>
          <th colSpan='5'>Your Cart ({counts[0]["COUNT(IF(inCart=1, 1, NULL))"]} Items)</th>
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
              <td><Link to={`/detailView/${product.id}&${product.collection}`}>{product.name}</Link></td>
              <td>
                <div className='qty'>
                  <QtyInput readOnly defaultValue={product.quantity} />
                  <span onClick={() => deleteCartItems(product.id)}>Delete</span>
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