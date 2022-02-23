import React from 'react';
import Button from '../include/Button';
import './signUp-style.scss'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function SignUp() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
  })

  const onChange = (e) => {
    const {name, value} = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }
  
  const onSubmit = (e) => {
    e.preventDefault()
    insertCustomer()
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      confirmEmail: '',
      password: '',
      confirmPassword: '',
    })
  }
  
  function insertCustomer() {
    axios.post("http://localhost:8080/login/signup", formData)
    .then((res) => {
      console.log(res)
      navigate(-1)
    })
    .catch((err) => console.log(err))
  }

  return (
    <section id='create' className='innerContainer'>
      <form onSubmit={onSubmit}>
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
                  <label htmlFor='firstName'>* First Name</label>
                  <input onChange={onChange} name='firstName' id='firstName' type='text' />
                </td>
                <td>
                  <label htmlFor='lastName'>* Last Name</label>
                  <input onChange={onChange} name='lastName' id='lastName' type='text' />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor='email'>* E-mail</label>
                  <input onChange={onChange} name='email' id='email' type='text' />
                </td>
                <td>
                  <label htmlFor='confirmEmail'>* Confirm E-mail</label>
                  <input onChange={onChange} name='confirmEmail' id='confirmEmail' type='text' />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor='password'>* Password</label>
                  <input onChange={onChange} id='password' type='password'/>
                </td>
                <td>
                  <label htmlFor='confirmPassword'>* Confirm Password</label>
                  <input onChange={onChange} name='confirmPassword' id='confirmPassword' type='password'/>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td><Button type='submit'>SUBMIT</Button></td>
              </tr>
            </tfoot>
        </table>
      </form>
    </section>
  );
}

export default SignUp;