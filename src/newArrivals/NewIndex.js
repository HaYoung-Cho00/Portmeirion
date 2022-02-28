import '../include/style/productLists.scss'
import '../include/style/searchBox.scss'

import { useState } from 'react'
import Contents from '../include/Contents'
import MobileSearchBox from '../include/MobileSearchBox'
import UseAsync from '../hooks/UseAsync'
import axios from 'axios'
import NoSelection from '../include/NoSelection';

function NewIndex() {
  const [ optionParam, setOption ] = useState('price')
  const [ valueParam, setValue  ] = useState(0)
  async function getProductsWithCondition() {
    const response = await axios.get(`http://localhost:8080/new/${optionParam}&${valueParam}`)
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
  const conditionState = UseAsync(getProductsWithCondition, [optionParam, valueParam])
  const { loading, error, data: products} = conditionState
  if(loading) return <h1>Loading...</h1>
  if(error) return <h1>Failed</h1>
  if(!products) return null

  return(
    <div className='productLists'>
      <section>
        <img src="./img/new/banner.png" alt="mainImage" />
      </section>
      <section className='innerContainer introHeader'>
        <div>
          <h1>New Arrivals</h1>
          <p>
            Shop the latest additions in dinnerware sets at Portmeirion. Browse our new arrivals from plates, bowls, cups and more here!
          </p>
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
          <div>
            <div className='selectType'>
              <h3>Collection</h3>
            </div>
            <ul className='options'>
              <li>Botanic Garden <input type='checkbox' value='Botanic Garden' onClick={(e) => checked(e, 'collection')} /></li>
              <li>Botanic Garden Bouquet <input type='checkbox' value='Botanic Garden Bouquet' onClick={(e) => checked(e, 'collection')} /></li>
              <li>Botanic Garden Harmony <input type='checkbox' value='Botanic Garden Harmony' onClick={(e) => checked(e, 'collection')} /></li>
              <li>Sara Miller London <input type='checkbox' value='Sara Miller London' onClick={(e) => checked(e, 'collection')} /></li>
              <li>Atrium <input type='checkbox' value='Atrium' onClick={(e) => checked(e, 'collection')} /></li>
              <li>Sophie Conran Floret & Arbor <input type='checkbox' value='Sophie Conran Floret And Arbor' onClick={(e) => checked(e, 'collection')} /></li>
            </ul>
          </div>
        </aside>
        <MobileSearchBox />
        {products.length === 0? <NoSelection />: <Contents products={products} />}
      </section>
    </div>
  );
}

export default NewIndex;