import React from 'react';
import styled from 'styled-components';
import { GoTriangleDown } from 'react-icons/go'

const SearchBox = styled.aside`

  $gray: #ECE9E5;
  $navy: #333E48;

  display: flex;
  width: 100%;
  height: 30px;
  border-bottom: 1px solid #ECE9E5;
  justify-content: space-between;
  // margin-bottom: 200px;
  > div {
    width: 33%;
    position: relative;
  }
  .selectType {
    padding: 0 10px;
    position: relative;
    svg {
      position: absolute;
      right: 10px;
      top: 5px;
    }
  }
  .options {
    position: absolute;
    display: none;
    width: 92%;
    left: 5px;
    line-height: 2;
    font-size: 12px;
    padding-top: 20px;
    input[type='checkbox'] {
      float: right;
      margin-top: 8px;
    }
  }
`
function MobileSearchBox(props) {
  return (
    <SearchBox id='mobileSearchBox'>
      <div>
        <div className='selectType'>
          <h3>Type</h3>
          <GoTriangleDown />
        </div>
        <ul className='options'>
          <li>New <input type='checkbox' /></li>
          <li>Best Sellers <input type='checkbox' /></li>
        </ul>
      </div>
      <div>
        <div className='selectType'>
          <h3>Price</h3>
          <GoTriangleDown />
        </div>
        <ul className='options'>
          <li>$0 - $49.99 <input type='checkbox' /></li>
          <li>$50 - $99.99 <input type='checkbox' /></li>
          <li>$100 - $199.99 <input type='checkbox' /></li>
        </ul>
      </div>
      <div>
        <div className='selectType'>
          <h3>Collection</h3>
          <GoTriangleDown />
        </div>
        <ul className='options'>
          <li>Botanic Garden <input type='checkbox' /></li>
          <li>Botanic Garden Bouquet <input type='checkbox' /></li>
          <li>Botanic Garden Accents <input type='checkbox' /></li>
          <li>Botanic Garden Bakeware <input type='checkbox' /></li>
          <li>Botanic Garden Papilio <input type='checkbox' /></li>
          <li>Sophie Conran <input type='checkbox' /></li>
        </ul>
      </div>
    </SearchBox>
  );
}

export default MobileSearchBox;