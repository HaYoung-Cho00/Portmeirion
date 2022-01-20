import React from 'react';
import Button from './Button';
import styled from 'styled-components';
import Quantity from './Quantity';
import ProductSlider from './ProductSlider';

const DetailViewSection = styled.section`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // height: 100vh;
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
    font-size: 18px;
    height: 200px;
  }
  aside {
    width: 50%;
    display: flex;
    flex-direction: column;
    height: 500px;
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
`

function ProductDetailView(props) {
  return (
    <DetailViewSection className='innerContainer'>
      <article>
        <aside><img src='./img/detail/RScomponents_5.jpg' alt='product' /></aside>
        <aside>
          <div>
            <h1>Product Name</h1>
            <h3>Description</h3>
            <p>
              descriptiondescriptiondescriiondescription
            </p>
          </div>
          <div id='order'>
            <label htmlFor='qty'>
              Quantity: <Quantity />
            </label>
              <Button>ADD TO CART - $299.99</Button>
          </div>
        </aside>
      </article>
      <div>
        <h1>PEOPLE WHO VIEWED THIS ITEM ALSO VIEWED</h1>
        <ProductSlider />
      </div>
    </DetailViewSection>
  );
}

export default ProductDetailView;