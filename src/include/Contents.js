import './style/contents.scss'
import { Link } from 'react-router-dom'

function Contents({products}) {
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