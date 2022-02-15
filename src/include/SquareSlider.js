import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import axios from 'axios'
import useAsync from '../hooks/useAsync'

const ProductSlides = styled.article`
    div.textArea {
      text-align: center;
      margin-bottom: 50px;
    }
    > ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      > li {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 24%;
        ul.pickedDesc {
          margin-top: 30px;
          text-align: center;
          width: 90%;
          li {
            &:nth-child(2) {
              margin: 10px;
            }
          }
          button {
            border: none;
            outline: none;
            text-decoration: underline;
            background: none;
          }
        }
      }
    }
    @media only screen and (max-width: 1400px) {
      > ul {
        > li {
          width: 33%;
        }
      }
    }
    @media only screen and (max-width: 1100px) {
      > ul {
        > li {
          width: 49%;
        }
      }
    }
    @media only screen and (max-width: 750px) {
      > ul {
        justify-content: center;
        > li {
          width: 60%;
        }
      }
    }
`

function SquareSlider({collection}) {
  async function getRecommendations() {
    const response = await axios.get(`http://localhost:8080/recommendations/${collection}`)
    return response.data
  }
  
  const state = useAsync(getRecommendations)

  const { loading, error, data: products} = state

  if(loading) return <h1>Loading...</h1>
  if(error) return <h1>Failed</h1>
  if(!products) return null
  console.log(products)

  return (
    <ProductSlides>        
      <ul>
        {products.map((product) => (
        <li>
          <img className='toProduct' src={`../../img/${product.imgUrl}.jpg`} alt='bowl' />
          <ul className='pickedDesc'>
            <li>
              <h3 className='toProduct'>{product.name}</h3>
            </li>
            <li>${product.price}</li>
            <li>
              <button className='toProduct'>
                <Link to={`detailView/${product.id}`}>SHOP NOW</Link>
              </button>
            </li>
          </ul>
        </li>
        ))}
      </ul>
    </ProductSlides>
  );
}

export default SquareSlider;