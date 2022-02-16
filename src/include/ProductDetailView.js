import React from 'react';
import Button from './Button';
import styled from 'styled-components';
import Quantity from './Quantity';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import useAsync from '../hooks/useAsync';
import { useState } from 'react'
import SquareSlider from './SquareSlider';

const DetailViewSection = styled.section`
  padding-top: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  > div {
    text-align: center;
    margin: 150px 0;
  }
  > article:first-child {
    display: flex;
    img {
      margin-top: 0;
    }
  }
  #recommendations {
    margin: 100px 30px;
    h1 {
      font-size: 25px;
    }
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
  }
  @media only screen and (max-width: 1000px) {
    aside {
      width: 95%;
    }
    > article:first-child {
      flex-direction: column;
      align-items: center;
      aside:first-child {
        img {
          width: 50%;
          position: relative;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
    // #recommendations {
    //   margin: 50px;
    // }
  }
  @media only screen and (max-width: 800px) {
    > article:first-child {
      img {
        width: 80%;
      }
    }
  }
`

function ProductDetailView() {
  const param = useParams()
  const { id, collectionParam } = param
  
  async function getProductDetails(){
    const response = await axios.get(`http://localhost:8080/detailView/${id}`)
    return response.data
  }
  
  const [initialPrice, setinitialPrice] = useState(0)
  const [initialQty, setinitialQty] = useState(1)

  const state = useAsync(getProductDetails)
  
  const { loading, error, data: productInfo} = state
  
  async function getRecommendations() {
    const response = await axios.get(`http://localhost:8080/recommendations/${collectionParam}`)
    return response.data
  }
  
  const recState = useAsync(getRecommendations)

  const { loading: coll, error: collE, data: collection} = recState
  if(coll) return <h1>Loading...</h1>
  if(collE) return <h1>Failed</h1>
  if(!collection) return null

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
          <img src={`../../img/${productInfo[0].imgUrl}.jpg`} alt='product' />
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
              Quantity: <Quantity type='number' onChange={onChange} defaultValue={initialQty}/>
            </label>
              <Button onClick={insertCustomer}>ADD TO CART - ${initialPrice? initialPrice: productInfo[0].price}</Button>
          </div>
        </aside>
      </article>
      <article id='recommendations'>
        <div>
          <h1>WE THINK YOU'LL LOVE THESE</h1>
          <p>Treat yourself. Treat a friend. Treat a loved one.</p>
        </div>
        <SquareSlider collection={collection} />
      </article>
    </DetailViewSection>
  );
}

export default ProductDetailView;