import './style/header.scss';
import { Link } from 'react-router-dom'
import { RiMenuFill } from 'react-icons/ri'
import { AiOutlineUser, AiOutlineShopping, AiOutlineSearch } from 'react-icons/ai'
import axios from 'axios'
import { useState } from 'react'
import UseAsync from '../hooks/UseAsync'
// li 목록들 받아와서 반복문 돌리기
function Header() {
  async function getCartCount() {
    const response = await axios.get('http://localhost:8080/cartCount')
    return response.data
  }
  const [ click, setClick ] = useState(false)

  const state = UseAsync(getCartCount);
  
  const { loading, error, data: count} = state
  
  if(loading) return <h1>Loading...</h1>
  if(error) return <h1>Failed</h1>
  if(!count) return null

  const cartItems = count[0]['COUNT(IF(inCart=1, 1, NULL))']

  const onClick = () => setClick(!click)

  return (
    <header>
      <nav className='innerContainer'>
        <h1><Link to='/'>Portmeirion</Link></h1>
        <ul>
          <li>
            <Link to='new'>New Arrivals</Link>
          </li>
          <li>
            <Link to='collections'>Collections</Link>
          </li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
        <ul id='desktopViewMenu'>
          <li><AiOutlineSearch /></li>
          <li><Link to='login'><AiOutlineUser /></Link></li>
          <li>
            <Link id='cart' to='cart'>
              <AiOutlineShopping />
              <div>{cartItems}</div>
            </Link>
          </li>
        </ul>
        <ul id='smallViewMenu'>
          <RiMenuFill onClick={onClick} className={click? 'onClick': ''} />
          <li>
            <ul>
              <li className='mobileMenu'><Link to='new'>New Arrival</Link></li>
              <li className='mobileMenu'><Link to='collections'>Collections</Link></li>
              <li className='mobileMenu'>About Us</li>
              <li className='mobileMenu'>Contact Us</li>
              <li><Link to='login'>Login</Link></li>
              <li><Link to='cart'>Cart</Link></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;