import './contents-style.scss';
import PageBtns from './PageBtns'

function Contents() {
  return(
    <ariticle id='contents'>
      <ul>
        <li>
          <ul className='itemBox'>
            <img src="http://via.placeholder.com/350X350" alt="products" />
            <li className='new'>NEW</li>
            <li><h3>Product Name</h3></li>
            <li>$120.99</li>
          </ul>
        </li>
        <li>
          <ul className='itemBox'>
            <img src="http://via.placeholder.com/350X350" alt="products" />
            <li><h3>Product Name</h3></li>
            <li>$120.99</li>
          </ul>
        </li>
        <li>
          <ul className='itemBox'>
            <img src="http://via.placeholder.com/350X350" alt="products" />
            <li><h3>Product Name</h3></li>
            <li>$120.99</li>
          </ul>
        </li>
        <li>
          <ul className='itemBox'>
            <img src="http://via.placeholder.com/350X350" alt="products" />
            <li><h3>Product Name</h3></li>
            <li>$120.99</li>
          </ul>
        </li>
        <li>
          <ul className='itemBox'>
            <img src="http://via.placeholder.com/350X350" alt="products" />
            <li><h3>Product Name</h3></li>
            <li>$120.99</li>
          </ul>
        </li>
        <li>
          <ul className='itemBox'>
            <img src="http://via.placeholder.com/350X350" alt="products" />
            <li><h3>Product Name</h3></li>
            <li>$120.99</li>
          </ul>
        </li>
      </ul>
      <PageBtns />
    </ariticle>
  )
}

export default Contents