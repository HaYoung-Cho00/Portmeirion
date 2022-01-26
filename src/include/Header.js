import './style/header.scss';
import { Link } from 'react-router-dom'
import { RiMenuFill } from 'react-icons/ri'
import { AiOutlineHeart, AiOutlineUser, AiOutlineShopping } from 'react-icons/ai'
import axios from 'axios'
import useAsync from '../hooks/useAsync'
// li 목록들 받아와서 반복문 돌리기
function Header() {
  async function getCartCount() {
    const response = await axios.get('http://localhost:8080/cartCount')
    return response.data
  }
  
    const state = useAsync(getCartCount)
    
    const { loading, error, data: count} = state
    
    if(loading) return <h1>Loading...</h1>
    if(error) return <h1>Failed</h1>
    if(!count) return null

    const cartItems = count[0]['COUNT(inCart)']

  return (
    <header>
      <nav className='innerContainer'>
        <h1><Link to='/'>Portmeirion</Link></h1>
        <ul>
          <li>
            <Link to='new'>New Arrivals</Link>
            {/* <ul className='new subMenu'>
              <li><Link to=''>Botanic Garden</Link></li>
              <li>Botanic Garden Bouquet</li>
              <li>Botanic Garden Harmony</li>
              <li>Sara Miller London</li>
              <li>Atrium</li>
              <li>Sophie Conran Floret & Arbor</li>
              <img src="./img/header/header1.jpg" alt='collectionPicture'/>
            </ul> */}
          </li>
          <li>
            <Link to='collections'>Collections</Link>
            {/* <ul className='collections subMenu'>
              <li><Link to='collection/Botanic Garden'>Botanic Garden</Link></li>
              <li><Link to='collection/Botanic Garden Bouquet'>Botanic Garden Bouquet</Link></li>
              <li><Link to='collection/Botanic Garden Harmony'>Botanic Garden Harmony</Link></li>
              <li><Link to='collection/Sara Miller London'>Sara Miller London</Link></li>
              <li><Link to='collection/Atrium'>Atrium</Link></li>
              <li><Link to='collection/Sophie Conran Floret & Arbor'>Sophie Conran Floret & Arbor</Link></li>
              <img src="./img/header/header2.jpg" alt='collectionPicture'/>
            </ul> */}
          </li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
        <ul id='desktopViewMenu'>
          <li><Link to='login'><AiOutlineUser /></Link></li>
          <li>
            <Link id='cart' to='cart'>
              <AiOutlineShopping />
              <div>{cartItems}</div>
            </Link>
          </li>
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