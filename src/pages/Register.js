import '../App.css';
import styled from 'styled-components'
import registerfood from '../assets/registerfood.png'

import React, { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Reg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  h3 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 27px;
    line-height: 33px;
    color: #00302E;
    margin-bottom: 2em;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 33px;
    margin-top: 20px;
    text-align: center;
    color: rgba(0, 48, 46, 0.91);
  }

  button {
    width: 488px;
    height: 60px;
    left: 848px;
    top: 636px;
    background: #00302E;
    border-radius: 5px;
    width: 488px;
    height: 60px;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #FBDDBB;
    border: none;
  }

  button:hover {
    background: #048580;
  }

  span:hover {
    color: #048580;
  }
`
const RegInput = styled.div`
display: flex;
flex-direction: column;

input {
  background: rgba(255, 255, 255, 0.83);
  border: 1px solid rgba(251, 221, 187, 0.51);
  border-radius: 5px;
  width: 488px;
  height: 71px;
  padding: 20px;
  font-weight: 400;
  font-size: 14px;
  line-height: 33px;
  color: #333;
  margin-bottom: 20px
}

`

const Register = () => {

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  console.log(form)

  const handleSubmit = (e) => {
    e.preventDefault()
    sessionStorage.setItem('user', JSON.stringify(form))

    toast.success("Sign Up Successful")

    setInterval(() => {
      window.location= '/login'
    }, 1500);
    
  }

  return (
    <div style={{display: 'flex', height:'100vh', width: '100%', overflow: 'hidden', background: 'rgba(255, 255, 255, 0.83)'}}>
       <ToastContainer />

      <div role='img'>
        <img src={registerfood} alt="icon" />
      </div>

      <Reg role='contentinfo'> 
        <h3 >Welcome to Lilies</h3>

        <form onSubmit={handleSubmit}>
          
          <RegInput role='alert'>
            <input type="text" placeholder='Your First Name' name='name' onChange={handleChange} />
            <input type="email" placeholder='Your Email Address' name='email' onChange={handleChange} />
            <input type="password" placeholder='Your password' name='password' onChange={handleChange}/>
          </RegInput>

          <button> SIGN UP </button>

          <p>Already have an account. <Link style={{color:"#00302E", fontWeight:"700", textDecoration:"none"}} to='/login'><span>LOGIN</span></Link> </p>

        </form>

      </Reg>
      
    </div>
  )
};

export default Register;
