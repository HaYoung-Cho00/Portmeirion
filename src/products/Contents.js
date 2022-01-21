import './contents-style.scss';
import PageBtns from './PageBtns'
import ProductBox from './ProductBox';

function Contents() {
  return(
    <article id='contents'>
      <ul>
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
      </ul>
      <PageBtns />
    </article>
  )
}

export default Contents