import './login-style.scss';
import { Link } from 'react-router-dom'
import Button from './Button';
import Input from './Input';

function Login() {
  return(
    <section id='userInfo' className='innerContainer'>
      <article>
        <form>
          <table id="login">
            <thead>
              <tr>
                <th>My Login</th>
              </tr>
              <tr>
                <th>Returning Customers</th>
              </tr>
              <tr>
                <td>If you are a registered user, please enter your email and password.</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <label htmlFor='email'>*E-mail</label>
                </td>
              </tr>
              <tr>
                <td>
                  <Input id='email' type='text' placeholder=""/>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor='password'>*Password</label>
                </td>
              </tr>
              <tr>
                <td>
                  <Input id='password' type='password'/>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td><Button type='submit'>LOGIN</Button></td>
                <td><Button type='reset'>RESET</Button></td>
              </tr>
            </tfoot>
          </table>
        </form>
      </article>
      <article>
          <table id="signup">
            <thead>
              <tr>
                <th>Sign Up</th>
              </tr>
              <tr><th>New Customers</th></tr>
              <tr>
                <td>Creating an account is easy. Quickly create an account and <br />
                enjoy the benefits of having an account.</td>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <td><Link to='signup'><Button children='CREATE AN ACCOUNT'/></Link></td>
              </tr>
            </tfoot>
          </table>
      </article>
    </section>
  )
}

export default Login;