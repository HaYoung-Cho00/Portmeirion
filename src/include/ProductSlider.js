import React from 'react';
import styled from 'styled-components';

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

function ProductSlider(props) {
  return (
<ProductSlides>
          
          <ul>
            <li>
              <img className='toProduct' src="./img/items/sophie-conran-floret&arbor/3pcserver1.jpg" alt='bowl' />
              <ul className='pickedDesc'>
                <li><h3 className='toProduct'>Product Name1</h3></li>
                <li>Temporibus autem quibusdam et aut officiis debitis.</li>
                <li><button className='toProduct'>SHOP NOW</button></li>
              </ul>
            </li>
            <li>
              <img className='toProduct' src="./img/items/sophie-conran-floret&arbor/arborsp3.jpg" alt='bowl' />
              <ul className='pickedDesc'>
                <li><h3 className='toProduct'>Product Name2</h3></li>
                <li>Ecessitatibus saepe eveniet ut et voluptates repudiandae.</li>
                <li><button className='toProduct'>SHOP NOW</button></li>
              </ul>
            </li>
            <li>
              <img className='toProduct' src="./img/items/sophie-conran-floret&arbor/Floret_12pc_Set_Gray_51188.jpg" alt='bowl' />
              <ul className='pickedDesc'>
                <li><h3 className='toProduct'>Product Name3</h3></li>
                <li>Aut perferendis doloribus asperiores repellat.</li>
                <li><button className='toProduct'>SHOP NOW</button></li>
              </ul>
            </li>
            <li>
              <img className='toProduct' src="./img/items/botanic-garden/Botanicgarden_4pc_Set21_1.jpg" alt='bowl' />
              <ul className='pickedDesc'>
                <li><h3 className='toProduct'>Product Name4</h3></li>
                <li>Rerferendis autem quibusdam et au repellat.</li>
                <li><button className='toProduct'>SHOP NOW</button></li>
              </ul>
            </li>
          </ul>
        </ProductSlides>
  );
}

export default ProductSlider;