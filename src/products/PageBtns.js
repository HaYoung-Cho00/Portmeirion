import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import './pageBtns-style.scss'
function PageBtns() {
  return(
    <ul id='pageBtns'>
      <li><IoIosArrowBack /></li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li><IoIosArrowForward /></li>
    </ul>
  )
}

export default PageBtns;