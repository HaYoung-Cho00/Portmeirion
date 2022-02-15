import './style/productLists.scss'
import SearchBox from './SearchBox'
import Contents from './Contents'
import MobileSearchBox from './MobileSearchBox'
import useAsync from '../hooks/useAsync'
import axios from 'axios'


function ProductLists({title}) {
  async function getProducts() {
    const response = await axios.get('http://localhost:8080/new')
    return response.data
  }
  
  const state = useAsync(getProducts)

  const { loading, error, data: products} = state

  if(loading) return <h1>Loading...</h1>
  if(error) return <h1>Failed</h1>
  if(!products) return null


  return(
    <div id='productLists' className='productLists'>
      <section>
        <img src="http://via.placeholder.com/1920X500" alt="mainImage" />
      </section>
      <section className='innerContainer introHeader'>
        <div>
          <h1>{title}</h1>
          <p>
            Shop the latest additions in dinnerware sets at Portmeirion. Browse our new arrivals from plates, bowls, cups and more here!
          </p>
        </div>
      </section>
      <section className='innerContainer contents'>
        <SearchBox />
        <MobileSearchBox />
        <Contents products={products} />
      </section>
    </div>
  );
}

export default ProductLists;