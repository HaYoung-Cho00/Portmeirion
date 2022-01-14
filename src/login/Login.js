import './login-style.scss';

function Login() {
  return(
    <form>
      <table id="login" className='innerContainer'>
        <thead>
          <tr>
            <th>My Login</th>
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
              <input id='email' type='text' placeholder=""/>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor='password'>*Password</label>
            </td>
          </tr>
          <tr>
            <td>
              <input id='password' type='password'/>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td><button type='submit'>LOGIN</button></td>
            <td><button type='reset'>RESET</button></td>
          </tr>
        </tfoot>
      </table>
    </form>
  )
}

export default Login;