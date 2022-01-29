import React from 'react';
import Button from './Button';
import styled from 'styled-components';
import Quantity from './Quantity';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import useAsync from '../hooks/useAsync';
import { useState } from 'react'

const DetailViewSection = styled.section`
  padding-top: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  > div {
    text-align: center;
    margin: 150px 0;
  }
  > article:first-child {
    display: flex;
  }
  img {
    width: 80%;
  }
  h3 {
    padding: 20px 0;
    
  }
  p {
    font-size: 14px;
  }
  aside {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h1 {
      font-size: 40px;
      border-bottom: 1px solid var(--gray);
    }
    div {
      padding: 0 20px;
    }
  }
  #order {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  button {
    font-size: 16px;
    padding: 1em 5em;
  }
  @media only screen and (max-width: 1400px) {
    aside {
      width: 80%;
    }
    > article:first-child {
      flex-direction: column;
      align-items: center;
    }
  }
`

function ProductDetailView() {
  const param = useParams()
  const { id } = param
  
  async function getProductDetails(){
    const response = await axios.get(`http://localhost:8080/detailView/${id}`)
    return response.data
  }
  
  const [initialPrice, setinitialPrice] = useState(0)
  const [initialQty, setinitialQty] = useState(1)

  const state = useAsync(getProductDetails)
  
  const { loading, error, data: productInfo} = state
  
  if(loading) return <h1>Loading...</h1>
  if(error) return <h1>Failed</h1>
  if(!productInfo) return null
  
  
  function onChange(e) {
    const qty = parseInt(e.target.value)
    const total = (qty * productInfo[0].price).toFixed(2)
    setinitialQty(qty)
    setinitialPrice(total)
  }

  function insertCustomer() {
    axios.put(`http://localhost:8080/addCart/${id}`, {
    quantity: initialQty,
    inCart: 1,
    })
    .then((res) => {console.log(res)})
    .catch((err) => {console.log(err)})
  }
  
  return (
    <DetailViewSection className='innerContainer'>
      <article>
        <aside>
          <img src={`./img/${productInfo[0].inmgUrl}`} alt='product' />
        </aside>
        <aside>
          <div>
            <h1>{productInfo[0].name}</h1>
            <h3>Description</h3>
            <p>
              {productInfo[0].desc}
            </p>
          </div>
          <div id='order'>
            <label htmlFor='qty'>
              Quantity: <Quantity onChange={onChange} defaultValue={initialQty}/>
            </label>
              <Button onClick={insertCustomer}>ADD TO CART - ${initialPrice? initialPrice: productInfo[0].price}</Button>
          </div>
        </aside>
      </article>
    </DetailViewSection>
  );
}

export default ProductDetailView;