import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import styled from 'styled-components';

const Ul = styled.ul`
  width: 40%;
  margin: 50px 0 100px;
  li {
    background-color: #ECE9E5;
    width: 50px;
    line-height: 50px;
    height: 50px;
    text-align: center;
    color: #333E48;
    transition: 0.5s;
    &:hover {
      background-color: #333E48;
      color: #ECE9E5;
    }
  }
  svg {
    width: 20px;
    margin-top: 15px;
    height: 20px;
  }
`;

function PageBtns() {
  return(
    <Ul id='pageBtns'>
      <li><IoIosArrowBack /></li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li><IoIosArrowForward /></li>
    </Ul>
  )
}

export default PageBtns;