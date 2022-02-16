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
      overflow: hidden;
      justify-content: space-between;
      > li {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        width: 25%;
        a {
          color: var(--navy);
        }
        ul.pickedDesc {
          margin-top: 20px;
          text-align: center;
          width: 95%;
          li:nth-child(2) {
            margin: 10px;
          }
          button {
            width: 100%;
            text-decoration: underline;
            background: none;
            a {
              width: 100%;
            }
          }
        }
      }
    }
    @media only screen and (max-width: 990px) {
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
          width: 100%;
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

  return (
    <ProductSlides>        
      <ul>
        {collection.map((collection) => (
        <li key={collection.id}>
          <img className='toProduct' src={`../../img/${collection.imgUrl}.jpg`} alt='bowl' />
          <ul className='pickedDesc'>
            <li>
              <h3 className='toProduct'>{collection.name}</h3>
            </li>
            <li>${collection.price}</li>
            <li>
              <button className='toProduct'>
                <Link to={`detailView/${collection.id}&${collection.collection}`}>SHOP NOW</Link>
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