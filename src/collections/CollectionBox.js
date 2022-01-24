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
  }
  .collectDesc {
    width: 40%;
    padding: 0 20px;
    text-align:center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
      font-size: 20px;
    }
    p {
      font-size: 13px;
    }
    a {
      color: var(--gray)
    }
  }

`

function CollectionBox({collection}) {
  return (
    <CollectArticle id='collArticle'>
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