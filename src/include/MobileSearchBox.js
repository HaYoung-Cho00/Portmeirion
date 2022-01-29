import React from 'react';
import styled from 'styled-components';
import { GoTriangleDown } from 'react-icons/go'

const SearchBox = styled.aside`
  $gray: #ECE9E5;
  $navy: #333E48;
  display: flex;
  width: 100%;
  height: 40px;
  border-bottom: 1px solid var(--gray);
  justify-content: space-between;
  align-items: center;
  margin-bottom: 200px;
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
    display: block;
    width: 92%;
    left: 5px;
    line-height: 2;
    font-size: 12px;
    padding-top: 20px;
    margin-bottom: 30px;
    height: 60px;
    padding-bottom: 50px;
    input[type='checkbox'] {
      float: right;
      margin-top: 5px;
    }
  }
`
function MobileSearchBox(props) {
  return (
    <SearchBox id='mobileSearchBox'>
      <div>
        <div className='selectType'>
          <h3>Type</h3>
        </div>
        <ul className='options'>
          <li>New <input type='checkbox' /></li>
          <li>Best Sellers <input type='checkbox' /></li>
        </ul>
      </div>
      <div>
        <div className='selectType'>
          <h3>Price</h3>
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