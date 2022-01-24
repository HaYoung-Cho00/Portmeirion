import React from 'react';
import CollectionBox from './CollectionBox';
import styled from 'styled-components';
import useAsync from '../hooks/useAsync'
import axios from 'axios'

const CollectSection = styled.section`
  .collectionLists {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    article {
      width: 48%;
    }
    @media only screen and (max-width: 1350px) {
      .collectionLists {
        flex-direction: column;
      }
    }
  }
`
async function getCollections() {
  const response = await axios.get('http://localhost:8080/collections')
  return response.data
}

function CollectionLists(props) {
  const state = useAsync(getCollections)
  
  const { loading, error, data: collections} = state
  
  if(loading) return <h1>Loading...</h1>
  if(error) return <h1>Failed</h1>
  if(!collections) return null

  return (
    <CollectSection id='collectSection'>
      <section>
        <img src="http://via.placeholder.com/1920X500" alt="mainImage" />
      </section>
      <section className='innerContainer introHeader'>
        <div>
          <h1>Collections</h1>
          <p></p>
        </div>
      </section>
      <section className='innerContainer collectionLists'>
        {collections.map((collection) => (
            <CollectionBox key={collection.id} collection={collection} />
          ))}
      </section>
    </CollectSection>
  );
}

export default CollectionLists;