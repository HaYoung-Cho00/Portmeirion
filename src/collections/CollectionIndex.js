import React from 'react';
import '../include/style/productLists.scss'
import SearchBox from '../include/SearchBox';
import MobileSearchBox from '../include/MobileSearchBox';
import Contents from '../include/Contents';
import axios from 'axios';
import useAsync from '../hooks/useAsync';
import { useParams } from 'react-router-dom';


function CollectionIndex(props) {
  
  const param = useParams()
  const { name } = param
  async function getCollectionLists() {
    const response = await axios.get(`http://localhost:8080/collection/${name}`)
    return response.data
  }
  async function getCollectionInfo() {
    const response = await axios.get(`http://localhost:8080/collectionInfo/${name}`)
    return response.data
  }
  const state = useAsync(getCollectionLists)
  const coll = useAsync(getCollectionInfo)
  
  
    const { loading, error, data: products} = state
    const { data: collInfo} = coll
    
    if(loading) return <h1>Loading...</h1>
    if(error) return <h1>Failed</h1>
    if(!products) return null
    if(!collInfo) return null
    console.log(collInfo[0].id)

  return (
    <div className='productLists'>
      <section>
        <img src="http://via.placeholder.com/1920X500" alt="mainImage" />
      </section>
      <section className='innerContainer introHeader'>
        <div>
          <h1>{collInfo[0].collection}</h1>
          <p>{collInfo[0].desc}</p>
        </div>
      </section>
      <section className='innerContainer contents'>
        <SearchBox />
        <MobileSearchBox />
        <Contents products={products} />
        {/* <Contents /> */}
      </section>
    </div>
  );
}

export default CollectionIndex;