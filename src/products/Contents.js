import './contents-style.scss';
import PageBtns from './PageBtns'

function Contents() {
  return(
    <article id='contents'>
      <ul>
        <li>
          <ul className='itemBox'>
            <img src="./img/items/botanic-garden-harmony-bakeware/BG_Harmony_Baking_Dish_with_Handle_1.jpg" alt="products" />
            <li className='new'>NEW</li>
            <li><h3>Product Name</h3></li>
            <li>$120.99</li>
          </ul>
        </li>
        <li>
          <ul className='itemBox'>
            <img src="./img/items/botanic-garden-harmony-bakeware/BG_Harmony_Baking_Dish_with_Handle_1.jpg" alt="products" />
            <li><h3>Product Name</h3></li>
            <li>$120.99</li>
          </ul>
        </li>
        <li>
          <ul className='itemBox'>
            <img src="./img/items/botanic-garden-harmony-bakeware/BG_Harmony_Baking_Dish_with_Handle_1.jpg" alt="products" />
            <li><h3>Product Name</h3></li>
            <li>$120.99</li>
          </ul>
        </li>
        <li>
          <ul className='itemBox'>
            <img src="./img/items/botanic-garden-harmony-bakeware/BG_Harmony_Baking_Dish_with_Handle_1.jpg" alt="products" />
            <li><h3>Product Name</h3></li>
            <li>$120.99</li>
          </ul>
        </li>
        <li>
          <ul className='itemBox'>
            <img src="./img/items/botanic-garden-harmony-bakeware/BG_Harmony_Baking_Dish_with_Handle_1.jpg" alt="products" />
            <li><h3>Product Name</h3></li>
            <li>$120.99</li>
          </ul>
        </li>
        <li>
          <ul className='itemBox'>
            <img src="./img/items/botanic-garden-harmony-bakeware/BG_Harmony_Baking_Dish_with_Handle_1.jpg" alt="products" />
            <li><h3>Product Name</h3></li>
            <li>$120.99</li>
          </ul>
        </li>
      </ul>
      <PageBtns />
    </article>
  )
}

export default Contents