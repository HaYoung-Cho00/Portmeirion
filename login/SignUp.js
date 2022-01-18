import React from 'react';
import Button from './Button';
import Input from './Input';
import './signUp-style.scss'

function SignUp() {
  return (
    <section id='create' className='innerContainer'>
      <table>
        <thead>
          <tr>
            <th>Create Account</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Please enter the below information</th>
          </tr>
          <tr>
            <td>
              <label htmlFor='email'>* First Name</label>
              <Input id='firstName' type='text' />
            </td>
            <td>
              <label htmlFor='email'>* Last Name</label>
              <Input id='lastName' type='text' />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor='email'>* E-mail</label>
              <Input id='email' type='text' />
            </td>
            <td>
              <label htmlFor='email'>* Confirm E-mail</label>
              <Input id='confirmEmail' type='text' />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor='password'>* Password</label>
              <Input id='password' type='password'/>
            </td>
            <td>
              <label htmlFor='password'>* Confirm Password</label>
              <Input id='confirmPassword' type='password'/>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td><Button type='submit'>SUBMIT</Button></td>
          </tr>
        </tfoot>
      </table>
    </section>
  );
}

export default SignUp;