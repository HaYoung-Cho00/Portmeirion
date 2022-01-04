import './header-style.scss';

// li 목록들 받아와서 반복문 돌리기

function Header() {
  return (
    <header>
      <nav className='innerContainer'>
        <h1>Portmeirion</h1>
        <ul>
          <li>New Arrival
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
          <li>Collections
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
          <li>Login</li>
          <li>Cart</li>
          <li>Wishlist</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;