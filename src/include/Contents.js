import './style/contents.scss'
import PageBtns from './PageBtns'
import ProductBox from './ProductBox'
import { Link } from 'react-router-dom'

function Contents({products}) {
  return(
    <article id='contents'>
      <ul>
        {products.map((product, index) => (
          <li key={product.id}>
              <Link to='/detailView'>
              <ul className='itemBox'>
                <img src={`./img/${product.imgUrl}.jpg`} alt="products" />
                <li className='new'>NEW</li>
                <li><h3>{product.name}</h3></li>
                <li>{product.price}</li>
              </ul>
            </Link>
          </li>
        ))}
      </ul>
      <PageBtns />
    </article>
  )
}

export default Contents