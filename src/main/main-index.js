import './main-style.scss';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { BsCircleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Main() {
  return(
    <div id="main">
      <section id='visual'>
      </section>
      <section id='newBG'></section>
      <section className="innerContainer">
        <article id="new">
          <div className="textArea">
            <h1><Link to='new'>NEW ARRIVAL</Link></h1>
            <p>We think you'll love these</p>
          </div>
          <div id="newItems">
            <IoIosArrowBack className='arrows' id='leftArrow' />
            <IoIosArrowForward className='arrows' id='rightArrow' />
            <div id='newDesc1'>
              <p>
                Loved and recognized worldwide. Botanic Garden is a classic floral pattern that is as fresh and exciting today as it was in 1972.
              </p>
            </div>
            <img className='toProduct' src="./img/main/BestSeller1.jpg" alt='collectionImage' />
            <div id='newDesc2'>
              <p>
              A true British classic, Botanic Garden was designed by the celebrated designer Susan Williams-Ellis in 1972. The mix and match floral motifs, inspired by 19th century botanical illustrations, bring a bit of the garden to your table.
              </p>
              <button>Read More</button>
            </div>
            <h3 className='toProduct'>BOTANIC GARDEN</h3>
            <ul id='mobileSilder'>
              <li><BsCircleFill /></li>
              <li><BsCircleFill /></li>
              <li><BsCircleFill /></li>
              <li><BsCircleFill /></li>
            </ul>
          </div>
        </article>
        <article id="collections">
          <div className="textArea">
            <h1><Link to='collection'>FEATURED COLLECTIONS</Link></h1>
            <p>Discover the art of the everyday</p>
          </div>
          <div id='gallery'>
            <img className='toProduct' id='coll1' src='./img/main/Collection1.jpg' alt='collections' />
            <div id='desc1' className='desc'>
              <h1>Collection Name1</h1>
              <p>
                Temporibus autem quibusdam et aut officiis debitis 
                aut rerum necessitatibus saepe eveniet ut et voluptates 
                repudiandae sint et Itaque earum rerum hic tenetur a sapiente 
                delectus, At vero ntorustinctio. Nam libero tempore, cum soluta 
                nobis est eligendi ut aut reiciendis voluptatibus maiores alias 
                consequatur aut perferendis doloribus asperiores repellat.
              </p>
              <button>Click The Image To Read More</button>
            </div>
            <img className='toProduct' id='coll2' src='./img/main/Collection2.jpg' alt='collections' />
            <div id='desc2' className='desc'>
              <h1>Collection Name2</h1>
              <p>
                At vero ntorustinctio. Nam libero tempore, cum soluta nobis est 
                eligendi aut officiis debitis aut rerum necessitatibus saepe 
                eveniet ut et voluptates repudiandae sint et molestiae non 
                recusandae. Itaque earum rerum hic tenetur a sapiente delectus, 
                ut aut reiciendis voluptatibus maiores alias consequatur aut 
                perferendis doloribus asperiores repellat.
              </p>
              <button>Click The Image To Read More</button>
            </div>
            <img className='toProduct' id='coll3' src='./img/main/Collection3.jpg' alt='collections' />
            <div id='desc3' className='desc'>
              <h1>Collection Name3</h1>
              <p>
                At vero qui animi, id est assumenda est, omnis dolor repellendus. 
                Temporibus autem quibusdam et aut officiis debitis aut rerum 
                necessitatibus saepe eveniet ut et voluptates repudiandae sint et 
                molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente 
                delectus, ut aut reiciendis voluptatibus maiores alias consequatur 
                aut perferendis doloribus asperiores repellat.
              </p>
              <button>Click The Image To Read More</button>
            </div>
            <Link to='collection'>
            <div id='readmore'>
              <h1>READ MORE</h1> 
            </div>
            </Link>
          </div>
        </article>
        <article id='recommendation'>
          <div className="textArea">
            <h1>PICKED FOR YOU</h1>
            <p>Treat yourself. Treat a friend. Treat a loved one.</p>
          </div>
          <ul>
            <li>
              <img className='toProduct' src="./img/items/sophie-conran-floret&arbor/3pcserver1.jpg" alt='bowl' />
              <ul className='pickedDesc'>
                <li><h3 className='toProduct'>Product Name1</h3></li>
                <li>Temporibus autem quibusdam et aut officiis debitis.</li>
                <li><button className='toProduct'>SHOP NOW</button></li>
              </ul>
            </li>
            <li>
              <img className='toProduct' src="./img/items/sophie-conran-floret&arbor/arborsp3.jpg" alt='bowl' />
              <ul className='pickedDesc'>
                <li><h3 className='toProduct'>Product Name2</h3></li>
                <li>Ecessitatibus saepe eveniet ut et voluptates repudiandae.</li>
                <li><button className='toProduct'>SHOP NOW</button></li>
              </ul>
            </li>
            <li>
              <img className='toProduct' src="./img/items/sophie-conran-floret&arbor/Floret_12pc_Set_Gray_51188.jpg" alt='bowl' />
              <ul className='pickedDesc'>
                <li><h3 className='toProduct'>Product Name3</h3></li>
                <li>Aut perferendis doloribus asperiores repellat.</li>
                <li><button className='toProduct'>SHOP NOW</button></li>
              </ul>
            </li>
            <li>
              <img className='toProduct' src="./img/items/botanic-garden/Botanicgarden_4pc_Set21_1.jpg" alt='bowl' />
              <ul className='pickedDesc'>
                <li><h3 className='toProduct'>Product Name4</h3></li>
                <li>Rerferendis autem quibusdam et au repellat.</li>
                <li><button className='toProduct'>SHOP NOW</button></li>
              </ul>
            </li>
          </ul>
        </article>
      </section>
    </div>
  )
}

export default Main;