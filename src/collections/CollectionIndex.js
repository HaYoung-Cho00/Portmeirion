import React, { useState } from 'react';
import '../include/style/productLists.scss'
import '../include/style/searchBox.scss'
import MobileSearchBox from '../include/MobileSearchBox';
import Contents from '../include/Contents';
import axios from 'axios';
import UseAsync from '../hooks/UseAsync';
import { useParams } from 'react-router-dom';
import './collecIndex.scss'
import NoSelection from '../include/NoSelection';

function CollectionIndex() {
  const param = useParams()
  const { name } = param

  const [ optionParam, setOption ] = useState('price')
  const [ valueParam, setValue  ] = useState(0)

  async function getCollectionLists() {
    const response = await axios.get(`http://localhost:8080/collection/${name}/${optionParam}&${valueParam}`)
    return response.data
  }

  async function getCollectionInfo() {
    const response = await axios.get(`http://localhost:8080/collectionInfo/${name}`)
    return response.data
  }

  const checked = (e, targetOption) => {
    const checkedValue = e.target.checked
    const value = e.target.value
    if (checkedValue) {
      setOption(targetOption)
      setValue(value)
    }
  }

  const state = UseAsync(getCollectionLists, [optionParam, valueParam])
  const coll = UseAsync(getCollectionInfo)
  
  const { loading, error, data: products} = state
  const { loading: collLoading, error: collError, data: collInfo} = coll
  
  if(loading || collLoading) return <h1>Loading...</h1>
  if(error || collError) return <h1>Failed</h1>
  if(!products || !collInfo) return null

  return (
    <div className='productLists'>
      <section id='banner'>
        <img src={`../../img/${collInfo[0].bannerUrl}.jpg`} alt="banner" />
      </section>
      <section className='innerContainer introHeader'>
        <div>
          <h1>{collInfo[0].collection}</h1>
          <p>{collInfo[0].desc}</p>
        </div>
      </section>
      <section className='innerContainer contents'>
      <aside id='searchBox'>
          <div>
            <div className='selectType' >
              <h3>Type</h3>
            </div>
            <ul className='options'>
              <li>New <input type='checkbox' value='1' onClick={(e) => checked(e, 'newArrival')} /></li>
              <li>Best Sellers <input type='checkbox' value='1' onClick={(e) => checked(e, 'best')} /></li>
            </ul>
          </div>
          <div>
            <div className='selectType'>
              <h3>Price</h3>
            </div>
            <ul className='options'>
              <li>$0 - $49.99 <input type='checkbox' value='49.99' onClick={(e) => checked(e, 'price')} /></li>
              <li>$50 - $99.99 <input type='checkbox' value='99.99' onClick={(e) => checked(e, 'price')} /></li>
              <li>$100 - $199.99 <input type='checkbox' value='199.99' onClick={(e) => checked(e, 'price')} /></li>
            </ul>
          </div>
        </aside>
        <MobileSearchBox />
        {products.length == 0? <NoSelection />: <Contents products={products} />}
      </section>
    </div>
  );
}

export default CollectionIndex;