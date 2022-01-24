import './style/footer.scss';
import {AiOutlineArrowRight, AiOutlineInstagram, AiFillFacebook} from 'react-icons/ai'
function Footer() {
  return(
    <footer>
      <div className='innerContainer'>
        <div id='leftFooter' className='innerFooter'>
          <ul>
            <li>GET THE LATEST NEWS AND INSPIRATION</li>
            <li><h1>SIGN UP & RECEIVE 15% OFF YOUR FIRST PURCHASE*</h1></li>
            <li>By subscribing you agree to our Terms & Conditions and Privacy & Cookies Policy.</li>
            <li>*Great Deal items excluded.</li>
          </ul>
          <form>
            <input type='text' placeholder='Enter Email Here'/>
            <AiOutlineArrowRight />
          </form>
        </div>
        <div id='rightFooter' className='innerFooter'>
          <ul>
            <li>
              <ul>
                <li><span>Customer Service</span></li>
                <li>Contact Us</li>
                <li>Product Care and Use</li>
                <li>Returns & Exchanges</li>
                <li>Shipping Information</li>
                <li>Frequently Asked Questions</li>
                <li>Gift Registry</li>
                <li><span>Locate</span></li>
                <li>Delivery Country</li>
              </ul>
            </li>
            <li>
              <ul>
                <li><span>The Company</span></li>
                <li>About Us</li>
                <li>Careers</li>
                <li>Botanic Garden</li>
                <li>Sophie Conran for Portmeirion</li>
                <li>Wrendale Designs</li>
              </ul>
            </li>
            <li>
              <ul>
                <li>
                  <ul id='sns'>
                    <li><AiOutlineInstagram /></li>
                    <li><AiFillFacebook /></li>
                  </ul>
                </li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
                <li>User Content License</li>
                <li>© Portmeirion, LLC 2022</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;