import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
  return (
    <ProductSlides>        
      <ul>
        <li>
          <img className='toProduct' src="./img/sophie/3pcserver.jpg" alt='bowl' />
          <ul className='pickedDesc'>
            <li>
              <h3 className='toProduct'>
                Sophie Conran Floret Alloy 3 Part Condiment Tray
              </h3>
            </li>
            <li>$99.99</li>
            <li>
              <button className='toProduct'>
                <Link to={`detailView/12`}>SHOP NOW</Link>
              </button>
            </li>
          </ul>
        </li>
        <li>
          <img className='toProduct' src="./img/sophie/arborbowl.jpg" alt='bowl' />
          <ul className='pickedDesc'>
            <li>
              <h3 className='toProduct'>
                Sophie Conran Arbor 6" All Purpose Bowl- Robin's Egg
              </h3>
            </li>
            <li>$14.99</li>
            <li>
              <button className='toProduct'>
                <Link to={`detailView/6`}>SHOP NOW</Link>
              </button>
            </li>
          </ul>
        </li>
        <li>
          <img className='toProduct' src="./img/sophie/arbormug.jpg" alt='bowl' />
          <ul className='pickedDesc'>
            <li>
              <h3 className='toProduct'>
                Sophie Conran Arbor 14 Ounce Mug- Creamy White
              </h3>
            </li>
            <li>$14.99</li>
            <li>
              <button className='toProduct'>
                <Link to={`detailView/17`}>SHOP NOW</Link>
              </button>
            </li>
          </ul>
        </li>
        <li>
          <img className='toProduct' src="./img/sophie/arborservplate.jpg" alt='bowl' />
          <ul className='pickedDesc'>
            <li>
              <h3 className='toProduct'>
              Sophie Conran Arbor Large Serving Platter- Dove Grey
              </h3>
            </li>
            <li>$51.99</li>
            <li>
              <button className='toProduct'>
                <Link to={`detailView/24`}>SHOP NOW</Link>
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </ProductSlides>
  );
}

export default SquareSlider;