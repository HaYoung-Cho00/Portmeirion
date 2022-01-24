import './style/contents.scss'
import PageBtns from './PageBtns'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import useAsync from '../hooks/useAsync'

function Contents({products}) {
  const param = useParams()
  
  function getItem() {
    const response = axios.get(`http://localhost:8080/collection/${param.name}`)
    return response.data
  }
  
  const state = useAsync(getItem)
  
  const { loading, error, data: items} = state
  
  
  if(loading) return <h1>Loading...</h1>
  if(error) return <h1>Failed</h1>
  if(!items) return null
  
  console.log(items)
  return(
    <article id='contents'>
      <ul>
        {
          products.map((product, index) => (
            <li key={product.id}>
                <Link to={`/detailView/${product.id}`}>
                <ul className='itemBox'>
                  <img src={`./img/${product.imgUrl}.jpg`} alt="products" />
                  <li className='new'>NEW</li>
                  <li><h3>{product.name}</h3></li>
                  <li>{product.price}</li>
                </ul>
              </Link>
            </li>
          ))
        }
      </ul>
      <PageBtns />
    </article>
  )
}

export default Contents