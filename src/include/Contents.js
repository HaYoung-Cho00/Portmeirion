import './style/contents.scss'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import useAsync from '../hooks/useAsync'

function Contents({products}) {
  const param = useParams()
  const { id } = param

  async function getCollectionLists() {
    const response = await axios.get(`http://localhost:8080/collection/${id}`)
    return response.data
  }
  
  const state = useAsync(getCollectionLists)
  
  const { loading, error, data: items} = state

  if(loading) return <h1>Loading...</h1>
  if(error) return <h1>Failed</h1>
  if(!items) return null

  return(
    <article id='contents'>
      <ul>
        {products.map(product => (
          <li key={product.id}>
              <Link to={`/detailView/${product.id}&${product.collection}`}>
              <ul className='itemBox'>
                <img src={`../../img/${product.imgUrl}.jpg`} alt="products" />
                <li className='new'>{product.newArrival == 1? 'NEW': ''}</li>
                <li><h3>{product.name}</h3></li>
                <li>${product.price}</li>
              </ul>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  )
}

export default Contents