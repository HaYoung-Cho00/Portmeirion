import './header-style.scss';



function Header() {
  return (
    <header>
      <div className="innerContainer">
        <h1>Portmeirion</h1>
        <ul>
          <li>New
            <ul className="subMenu new">
              <li>Botanic Garden</li>
              <li>Botanic Garden Bouquet</li>
              <li>Botanic Garden Harmony Accents</li>
              <li>Botanic Garden Harmony Bakeware</li>
              <li>Botanic Garden Harmony Papilio</li>
              <li>Sophie Conran Floret & Arbor</li>
              <img src="./img/collection.jpg"></img>
            </ul>
          </li>
          <li>Collections
            <ul className="subMenu collections">
              <li>Botanic Garden</li>
              <li>Botanic Garden Bouquet</li>
              <li>Botanic Garden Harmony Accents</li>
              <li>Botanic Garden Harmony Bakeware</li>
              <li>Botanic Garden Harmony Papilio</li>
              <li>Sophie Conran Floret & Arbor</li>
              <img src="./img/collection.jpg"></img>
            </ul>
          </li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
        <ul>
          <li>Log in</li>
          <li>Cart</li>
          <li>Wishlist</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;