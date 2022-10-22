import '../App.css';
import styled from 'styled-components'
import loginimage from '../assets/loginimage.png'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LogIn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  overflow: auto;

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
  .bottom {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
  }
  .forgot:hover, .create:hover {
    font-size: large;
  }
`
const LogInInput = styled.div`
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

const Login = () => {

  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })

  const [passwordType, setpasswordType] = useState("password")
  const [passwordInputType, setpasswordInputType] = useState('')

  const handlepassword = (e) => {
    setpasswordInputType(e.target.value)
  }
  const togglePassword = (e) => {
    e.preventDefault()
    if (passwordType === 'password') {
      setpasswordType('text')
      return
    }
    setpasswordType ("password")
  }

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    })
  }

  console.log(loginData)

  const handleSubmit = (e) => {
    e.preventDefault()
    let user = JSON.parse(sessionStorage.getItem('user'))
    console.log(user)
    console.log(loginData)
    if (loginData?.email === user?.email && loginData?.password === user?.password) {
      toast.success("Login Successful")
      setInterval(() => {
        window.location = '/dashboard'
      }, 2000)
    }
    else {
      toast.error("Wrong email or password")
    }
  }

  return (
    <div style={{display: 'flex', height:'100vh', overflowY: 'hidden', background: 'rgba(255, 255, 255, 0.83)'}} className="login">
      <ToastContainer />

      <div role='img'>
        <img src={loginimage} alt="icon" />
      </div>

      <LogIn role='contentinfo'> 
        <h3>Welcome Back!</h3>

        <form onSubmit={handleSubmit}>
          
          <LogInInput role='alert'>
            <input type="email" placeholder='Your Email Address' name='email' onChange={handleChange} />
            <span>
            <input type="password" placeholder='Your password' name='password' onChange={handleChange}/>
            </span>{' '}
            <br/>
            <button> LOGIN </button>
          </LogInInput>

          <div className='bottom'>
            <div className='create'><Link to='/register' style={{color: "#00302E", textDecoration: "none"}}>Create an account</Link></div>
            <div className='forgot'><Link to='/register' style={{color: "#00302E", textDecoration: "none"}}>Forgot password</Link></div>
          </div>
          
        </form>

      </LogIn>

    </div>
  )
}

export default Login
