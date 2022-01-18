import './header-style.scss';
import { Link } from 'react-router-dom'
// li 목록들 받아와서 반복문 돌리기

function Header() {
  return (
    <header>
      <nav className='innerContainer'>
        <h1><Link to='/'>Portmeirion</Link></h1>
        <ul>
          <li><Link to='new'>New Arrival</Link>
            <ul className='new subMenu'>
              <li>Botanic Garden</li>
              <li>Botanic Garden Bouquet</li>
              <li>Botanic Garden Harmony Accents</li>
              <li>Botanic Garden Harmony Bakeware</li>
              <li>Botanic Garden Harmony Papilio</li>
              <li>Sophie Conran Floret & Arbor</li>
              <img src="http://via.placeholder.com/300x400" alt='collectionPicture'/>
            </ul>
          </li>
          <li><Link to='collection'>Collections</Link>
            <ul className='collections subMenu'>
              <li>Botanic Garden</li>
              <li>Botanic Garden Bouquet</li>
              <li>Botanic Garden Harmony Accents</li>
              <li>Botanic Garden Harmony Bakeware</li>
              <li>Botanic Garden Harmony Papilio</li>
              <li>Sophie Conran Floret & Arbor</li>
              <img src="http://via.placeholder.com/300x400" alt='collectionPicture'/>
            </ul>
          </li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
        <ul>
          <li><Link to='login'>Login</Link></li>
          <li><Link to='cart'>Cart</Link></li>
          <li>Wishlist</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;