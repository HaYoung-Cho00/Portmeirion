import './view-lists-index-style.scss'
import SearchBox from './SearchBox'
import Contents from './Contents'
import MobileSearchBox from './MobileSearchBox';

function ViewLists({title}) {
  return(
    <div id='viewLists'>
      <section>
        <img src="http://via.placeholder.com/1920X500" alt="mainImage" />
      </section>
      <section className='innerContainer introHeader'>
        <div>
          <h1>{title}</h1>
          <p>
            Sophie Conran for Portmeirion is timeless and perfect 
            for every day life. Versatile and practical, the 
            collection features the look of being hand thrown with 
            each piece being beautifully tactile. Explore our 
            beautiful tableware, glassware and home accessories.
          </p>
        </div>
      </section>
      <section className='innerContainer contents'>
        <SearchBox />
        <MobileSearchBox />
        <Contents />
      </section>
    </div>
  );
}

export default ViewLists;