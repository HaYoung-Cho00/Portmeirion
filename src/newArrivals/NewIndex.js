import '../include/style/productLists.scss'
import SearchBox from '../include/SearchBox'
import Contents from '../include/Contents'
import MobileSearchBox from '../include/MobileSearchBox'
import useAsync from '../hooks/useAsync'
import axios from 'axios'

async function getProducts() {
  const response = await axios.get('http://localhost:8080/new')
  return response.data
}

function NewIndex() {
  const state = useAsync(getProducts)

  const { loading, error, data: products} = state

  if(loading) return <h1>Loading...</h1>
  if(error) return <h1>Failed</h1>
  if(!products) return null

  console.log(products)

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
        <SearchBox />
        <MobileSearchBox />
        <Contents products={products} />
      </section>
    </div>
  );
}

export default NewIndex;