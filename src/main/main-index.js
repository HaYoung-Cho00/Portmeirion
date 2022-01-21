import './main-style.scss';
import 'antd/dist/antd.css';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { BsCircleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import ProductSlider from '../include/ProductSlider';
import { Carousel } from 'antd';
import styled from 'styled-components';
import useAsync from '../hooks/useAsync'
import axios from 'axios'

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

function Main() {
  const state = useAsync(getCollections)
  
  const { loading, error, data: collections} = state
  
  if(loading) return <h1>Loading...</h1>
  if(error) return <h1>Failed</h1>
  if(!collections) return null
  console.log(collections[0])

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
            <img className='toProduct' src="./img/main/new/new1.jpg" alt='collectionImage' />
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
            <Link id='coll1' className='toProduct' to='collections' />
            <div id='desc1' className='desc'>
              <h1>{CN1}</h1>
              <p>
                {CD1}
              </p>
              <button>Click The Image To Read More</button>
            </div>
            <Link id='coll2' className='toProduct' to='' />
            <div id='desc2' className='desc'>
              <h1>{CN2}</h1>
              <p>
                {CD2}
              </p>
              <button>Click The Image To Read More</button>
            </div>
            <Link id='coll3' className='toProduct' to ='' />
            <div id='desc3' className='desc'>
              <h1>{CN3}</h1>
              <p>
                {CD3}
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
        <div className="textArea">
          <h1>PICKED FOR YOU</h1>
          <p>Treat yourself. Treat a friend. Treat a loved one.</p>
        </div>
        <ProductSlider id='recommendation' />
      </section>
    </div>
  )
}

export default Main;