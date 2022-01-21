import './header-style.scss';
import { Link } from 'react-router-dom'
import { RiMenuFill } from 'react-icons/ri'
import { AiOutlineHeart, AiOutlineUser, AiOutlineShopping } from 'react-icons/ai'

// li 목록들 받아와서 반복문 돌리기

function Header() {
  return (
    <header>
      <nav className='innerContainer'>
        <h1><Link to='/'>Portmeirion</Link></h1>
        <ul>
          <li><Link to='new'>New Arrivals</Link>
            <ul className='new subMenu'>
              <li>Botanic Garden</li>
              <li>Botanic Garden Bouquet</li>
              <li>Botanic Garden Harmony</li>
              <li>Sara Miller London</li>
              <li>Atrium</li>
              <li>Sophie Conran Floret & Arbor</li>
              <img src="./img/header/header1.jpg" alt='collectionPicture'/>
            </ul>
          </li>
          <li><Link to='collection'>Collections</Link>
            <ul className='collections subMenu'>
              <li>Botanic Garden</li>
              <li>Botanic Garden Bouquet</li>
              <li>Botanic Garden Harmony</li>
              <li>Sara Miller London</li>
              <li>Atrium</li>
              <li>Sophie Conran Floret & Arbor</li>
              <img src="./img/header/header2.jpg" alt='collectionPicture'/>
            </ul>
          </li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
        <ul id='desktopViewMenu'>
          <li><Link to='login'><AiOutlineUser /></Link></li>
          <li><Link to='cart'><AiOutlineShopping /></Link></li>
          <li><AiOutlineHeart /></li>
        </ul>
        <ul id='smallViewMenu'>
          <RiMenuFill />
          <li>
            <ul>
              <li className='mobileMenu'><Link to='new'>New Arrival</Link></li>
              <li className='mobileMenu'><Link to='collection'>Collections</Link></li>
              <li className='mobileMenu'>About Us</li>
              <li className='mobileMenu'>Contact Us</li>
              <li><Link to='login'>Login</Link></li>
              <li><Link to='cart'>Cart</Link></li>
              <li>Wishlist</li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;