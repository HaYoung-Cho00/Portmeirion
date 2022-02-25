import './style/header.scss';
import { Link } from 'react-router-dom'
import { RiMenuFill } from 'react-icons/ri'
import { AiOutlineUser, AiOutlineShopping, AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'
import axios from 'axios'
import { useState, useRef } from 'react'
import UseAsync from '../hooks/UseAsync'

function Header() {
  const [ click, setClick ] = useState(false)
  const [ inputValue, setInputValue ] = useState()
  const searchInput = useRef()

  async function getCartCount() {
    const response = await axios.get('http://localhost:8080/cartCount')
    return response.data
  }

  async function getSpecificProduct() {
    const response = await axios.get(`http://localhost:8080/specific/${inputValue}`)
    return response.data
  }
  const onClick = () => setClick(!click)

  const searchProduct = (e) => {
    e.preventDefault()
    setInputValue(searchInput.current.value)
  }
  const state = UseAsync(getCartCount);
  const specificState = UseAsync(getSpecificProduct, [inputValue]);
  
  const { loading, error, data: count} = state
  const { loading: spLoading, error: spErr, data: spProduct} = specificState
  
  if(loading || spLoading) return <h1>Loading...</h1>
  if(error || spErr) return <h1>Failed</h1>
  if(!count || !spProduct) return null


  const cartItems = count[0]['COUNT(IF(inCart=1, 1, NULL))']


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
          <li className='notAllowed'>About Us</li>
          <li className='notAllowed'>Contact Us</li>
        </ul>
        <ul id='desktopViewMenu'>
          <li><AiOutlineSearch id='searchIcon' onClick={onClick} /></li>
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
              <li className='mobileMenu notAllowed'>About Us</li>
              <li className='mobileMenu notAllowed'>Contact Us</li>
              <li><Link to='login'>Login</Link></li>
              <li><Link to='cart'>Cart</Link></li>
            </ul>
          </li>
        </ul>
      </nav>
      <article id='searchContainer' className= {click? 'onClick innerContainer': 'innerContainer'}>
        <form onSubmit={(e) => searchProduct(e)}>
          <input type='text' placeholder='Search' ref={searchInput} />
          <button type='submit'><AiOutlineSearch /></button>
        </form>
        <ul>
          {spProduct.map(product => (
            <li key={product.id}>
            <img className='toProduct' src={`../../img/${product.imgUrl}.jpg`} alt='list' />
            <h3 className='toProduct'><Link to={`/detailView/${product.id}&${product.collection}`}>{product.name}</Link></h3>
          </li>
          ))}
        </ul>
        <AiOutlineClose id='closeIcon' onClick={onClick} />
      </article>
    </header>
  );
}

export default Header;