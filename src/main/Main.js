import './main.scss';
import { BsCircleFill } from 'react-icons/bs'
import 'antd/dist/antd.css'
import styled from 'styled-components'
import axios from 'axios'
import { Link } from 'react-router-dom'
import useAsync from '../hooks/useAsync'
import { Carousel } from 'antd'
import SquareSlider from '../include/SquareSlider'
import { useState, useRef } from 'react'

function createSlider(url, style) {
  const Slider = styled.h3`
  background: url(${url}) no-repeat center;
  height: 700px;
  background-size: cover;
  @media only screen and (max-width: 1060px) {
    height: 600px;
    background-size: cover
  }
  @media only screen and (max-width: 900px) {
    height: 500px;
  }
  @media only screen and (max-width: 750px) {
    height: 450px;
  }
  @media only screen and (max-width: 690px) {
    height: 400px;
  }
  @media only screen and (max-width: 600px) {
    height: 350px;
  }
  `
  return Slider
}

const Slider1 = createSlider('./img/main/slider/Visual.jpg')
const Slider2 = createSlider('./img/main/slider/slider1.jpg')
const Slider3 = createSlider('./img/main/slider/slider2.jpg')

async function getCollections() {
  const response = await axios.get('http://localhost:8080/collections')
  return response.data
}
async function getPickedProducts() {
  const response = await axios.get('http://localhost:8080/pickedProducts')
  return response.data
}

function Main() {
  const [ clicked, setClicked ] = useState(false)
  const state = useAsync(getCollections)
  const pickedProductsState = useAsync(getPickedProducts)

  const { loading, error, data: collections} = state
  const { loading: pickedLoading, error: pickedErr, data: recommendations} = pickedProductsState
  
  if(loading & pickedLoading) return <h1>Loading...</h1>
  if(error & pickedErr) return <h1>Failed</h1>
  if(!collections) return null
  if(!recommendations) return null

  const {collection:CN1, desc: CD1} = collections[0]
  const {collection:CN2, desc: CD2} = collections[5]
  const {collection:CN3, desc: CD3} = collections[3]

  return(
    <div id="main">
      <section id='visual'>
      <Carousel autoplay={2000}>
        <div>
          <Slider1></Slider1>
        </div>
        <div>
          <Slider2 />
        </div>
        <div>
          <Slider3 />
        </div>
      </Carousel>
      </section>
      <section>
        <article id="new">
          <div className="textArea innerContainer">
            <h1><Link to='new'>NEW ARRIVAL</Link></h1>
            <p>We think you'll love these</p>
          </div>
          {/* <ul id='navigator'>
            <li><BsCircleFill /></li>
            <li><BsCircleFill /></li>
            <li><BsCircleFill /></li>
            <li><BsCircleFill /></li>
          </ul> */}
          <div style={{opacity:`${setClicked? 1: 0}`}} id="newItems" className="innerContainer">
            <div id='newDesc1'>
              <p>
                Award-winning British designer, Sara Miller brings her vision of print, pattern and color to a beautiful collection of tableware and gifts.
              </p>
            </div>
            <img className='toProduct' src="./img/Collection2.jpg" alt='new' />
            <div id='newDesc2'>
              <p>
              A true British classic, Botanic Garden was designed by the celebrated designer Susan Williams-Ellis in 1972. The mix and match floral motifs, inspired by 19th century botanical illustrations, bring a bit of the garden to your table.
              </p>
              <button><Link to='new'>Read More</Link></button>
            </div>
            <h3 className='toProduct'>Sara Miller London</h3>
          </div>
          {/* <div style={{opacity:`${setClicked? '1': 0}`}} id="newItems" className="innerContainer">
            <div id='newDesc1'>
              <p>
                Inspired by nature with graceful shapes and organic contours Arbor & Floret are designed to sit separately or together.
              </p>
            </div>
            <img className='toProduct' src="./img/Collection3.jpg" alt='new' />
            <div id='newDesc2'>
              <p>
              A true British classic, Botanic Garden was designed by the celebrated designer Susan Williams-Ellis in 1972. The mix and match floral motifs, inspired by 19th century botanical illustrations, bring a bit of the garden to your table.
              </p>
              <button><Link to='new'>Read More</Link></button>
            </div>
            <h3 className='toProduct'>BOTANIC GARDEN</h3>
          </div>
          <div style={{opacity:`${setClicked? '1': 0}`}} id="newItems" className="innerContainer">
            <div id='newDesc1'>
              <p>
                Loved and recognized worldwide. Botanic Garden is a classic floral pattern that is as fresh and exciting today as it was in 1972.
              </p>
            </div>
            <img className='toProduct' src="./img/main/new/new1.jpg" alt='new' />
            <div id='newDesc2'>
              <p>
              A true British classic, Botanic Garden was designed by the celebrated designer Susan Williams-Ellis in 1972. The mix and match floral motifs, inspired by 19th century botanical illustrations, bring a bit of the garden to your table.
              </p>
              <button><Link to='new'>Read More</Link></button>
            </div>
            <h3 className='toProduct'>BOTANIC GARDEN</h3>
          </div>
          <div style={{opacity:`${setClicked? '1': 0}`}} id="newItems" className="innerContainer">
            <div id='newDesc1'>
              <p>
                Loved and recognized worldwide. Botanic Garden is a classic floral pattern that is as fresh and exciting today as it was in 1972.
              </p>
            </div>
            <img className='toProduct' src="./img/main/new/new1.jpg" alt='new' />
            <div id='newDesc2'>
              <p>
              A true British classic, Botanic Garden was designed by the celebrated designer Susan Williams-Ellis in 1972. The mix and match floral motifs, inspired by 19th century botanical illustrations, bring a bit of the garden to your table.
              </p>
              <button><Link to='new'>Read More</Link></button>
            </div>
            <h3 className='toProduct'>BOTANIC GARDEN</h3>
          </div> */}
        </article>
        <article id="collections"  className="innerContainer">
          <div className="textArea">
            <h1><Link to='collection'>FEATURED COLLECTIONS</Link></h1>
            <p>Discover the art of the everyday</p>
          </div>
          <div id='gallery'>
            <Link id='coll1' className='toProduct' to={`collection/${CN1}`} />
            <div id='desc1' className='desc'>
              <h1>{CN1}</h1>
              <p>
                {CD1}
              </p>
              <button>Click The Image To Read More</button>
            </div>
            <Link id='coll2' className='toProduct' to={`collection/${CN2}`} />
            <div id='desc2' className='desc'>
              <h1>{CN2}</h1>
              <p>
                {CD2}
              </p>
              <button>Click The Image To Read More</button>
            </div>
            <Link id='coll3' className='toProduct' to={`collection/${CN3}`} />
            <div id='desc3' className='desc'>
              <h1>{CN3}</h1>
              <p>
                {CD3}
              </p>
              <button>Click The Image To Read More</button>
            </div>
            <Link to='collections'>
            <div id='readmore'>
              <h1>READ MORE</h1> 
            </div>
            </Link>
          </div>
        </article>
        <article id='recommendArt'>
          <div className="textArea" className="innerContainer">
            <h1>PICKED FOR YOU</h1>
            <p>Treat yourself. Treat a friend. Treat a loved one.</p>
            <SquareSlider recommendations={recommendations} id='recommendation' />
          </div>
        </article>
      </section>
    </div>
  )
}

export default Main;