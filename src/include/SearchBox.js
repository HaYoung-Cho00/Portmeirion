import { GoTriangleDown } from 'react-icons/go'
import './style/searchBox.scss';

function SearchBox() {
  return(
    <aside id='searchBox'>
      <div>
        <div className='selectType'>
          <h3>Type!</h3>
          <GoTriangleDown />
        </div>
        <ul className='options'>
          <li>New <input type='checkbox' /></li>
          <li>Best Sellers <input type='checkbox' /></li>
        </ul>
      </div>
      <div>
        <div className='selectType'>
          <h3>Price</h3>
          <GoTriangleDown />
        </div>
        <ul className='options'>
          <li>$0 - $49.99 <input type='checkbox' /></li>
          <li>$50 - $99.99 <input type='checkbox' /></li>
          <li>$100 - $199.99 <input type='checkbox' /></li>
        </ul>
      </div>
      <div>
        <div className='selectType'>
          <h3>Collection</h3>
          <GoTriangleDown />
        </div>
        <ul className='options'>
          <li>Botanic Garden <input type='checkbox' /></li>
          <li>Botanic Garden Bouquet <input type='checkbox' /></li>
          <li>Botanic Garden Harmony Accents <input type='checkbox' /></li>
          <li>Sara Miller London <input type='checkbox' /></li>
          <li>Botanic Garden Harmony Papilio <input type='checkbox' /></li>
          <li>Sophie Conran Floret & Arbor <input type='checkbox' /></li>
        </ul>
      </div>
    </aside>
  )
}

export default SearchBox;