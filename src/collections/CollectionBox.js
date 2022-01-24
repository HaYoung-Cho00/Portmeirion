import React from 'react';
import Button from '../include/Button';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const CollectArticle = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid var(--gray);
  color: var(--navy);
  width: 800px;
  height: 400px;
  margin-bottom: 100px;
  #img {
    width: 60%;
    // height: 400px;
  }
  .collectDesc {
    width: 40%;
    padding: 20px;
    // background-color: red;
    text-align:center;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    h1 {
      font-size: 20px;
    }
  }
`

function CollectionBox({collection}) {
  return (
    <CollectArticle>
      <div id='img' style={{
        background: `url(./img/collections/${collection.imgUrl}.jpg) no-repeat no-repeat center`,
        backgroundSize: "cover",
        height: "100%"
      }} />
      <div className='collectDesc'>
        <h1>{collection.collection}</h1>
        <p>{collection.desc}</p>
        <Button><Link to={`/collection/${collection.collection}`}>Read More</Link></Button>
      </div>
    </CollectArticle>
  );
}

export default CollectionBox;