import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import styled from 'styled-components';

const Ul = styled.ul`
  width: 100%;
  margin: 50px 0 100px;
  display: flex;
  justify-content: center;
  li {
    background-color: #ECE9E5;
    width: 50px;
    line-height: 50px;
    height: 50px;
    text-align: center;
    color: #333E48;
    transition: 0.5s;
    margin-right: 10px;
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
  @media only screen and (max-width: 1200px) {
    li {
      width: 40px;
      height: 40px;
      line-height: 40px;
    }
    svg {
      margin-top: 10px;
    }
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