import './main-style.scss';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

function Main() {
  return(
    <div id="main">
      <section>
        <img src="http://via.placeholder.com/1920X500" alt="mainImage" />
      </section>
      <section className="innerContainer">
        <article id="new">
          <div className="textArea">
            <h1>NEW ARRIVAL</h1>
            <p>We think you'll love these</p>
          </div>
          <div id="newItems">
            <IoIosArrowBack id='leftArrow' />
            <IoIosArrowForward id='rightArrow' />
            <div>
              <p>
                Loved and recognized worldwide. Botanic Garden is a classic floral pattern that is as fresh and exciting today as it was in 1972.
              </p>
            </div>
            <img src="http://via.placeholder.com/300X400" alt='collectionImage' />
            <div>
              <p>
              A true British classic, Botanic Garden was designed by the celebrated designer Susan Williams-Ellis in 1972. The mix and match floral motifs, inspired by 19th century botanical illustrations, bring a bit of the garden to your table.
              </p>
            </div>
          </div>
          <h3>BOTANIC GARDEN</h3>
        </article>
        <article id="collections">
          <div className="textArea">
            <h1>FEATURED COLLECTIONS</h1>
            <p>Discover the art of the everyday</p>
          </div>
          <div id='gallery'>
            <img id='coll1' src='http://via.placeholder.com/350X500' alt='collections'></img>
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
              <button>Read More</button>
            </div>
            <img id='coll2' src='http://via.placeholder.com/710X500' alt='collections'></img>
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
              <button>Read More</button>
            </div>
            <img id='coll3' src='http://via.placeholder.com/760X300' alt='collections'></img>
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
              <button>Read More</button>
            </div>
            <div id='readmore'>
              <h1>READ MORE</h1> 
            </div>
          </div>
        </article>
        <article id='recommendation'>
          <div className="textArea">
            <h1>PICKED FOR YOU</h1>
            <p>Treat yourself. Treat a friend. Treat a loved one.</p>
          </div>
          <ul>
            <li>
              <img src="http://via.placeholder.com/300X300" alt='bowl' />
              <ul className='pickedDesc'>
                <li><h3>Product Name1</h3></li>
                <li>Temporibus autem quibusdam et aut officiis debitis.</li>
                <li><button>SHOP NOW</button></li>
              </ul>
            </li>
            <li>
              <img src="http://via.placeholder.com/300X300" alt='bowl' />
              <ul className='pickedDesc'>
                <li><h3>Product Name2</h3></li>
                <li>Ecessitatibus saepe eveniet ut et voluptates repudiandae.</li>
                <li><button>SHOP NOW</button></li>
              </ul>
            </li>
            <li>
              <img src="http://via.placeholder.com/300X300" alt='bowl' />
              <ul className='pickedDesc'>
                <li><h3>Product Name3</h3></li>
                <li>Aut perferendis doloribus asperiores repellat.</li>
                <li><button>SHOP NOW</button></li>
              </ul>
            </li>
            <li>
              <img src="http://via.placeholder.com/300X300" alt='bowl' />
              <ul className='pickedDesc'>
                <li><h3>Product Name4</h3></li>
                <li>Rerferendis autem quibusdam et au repellat.</li>
                <li><button>SHOP NOW</button></li>
              </ul>
            </li>
          </ul>
        </article>
      </section>
    </div>
  )
}

export default Main;