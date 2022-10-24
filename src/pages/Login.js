import '../App.css';
import "../styles/login.css"
import loginimage from '../assets/loginimage.png'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    setLoginData({...loginData, [e.target.name]: e.target.value
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
    else if (loginData?.email === user?.email && loginData?.password !== user?.password) {
      toast.error("Wrong password")
    }
    else if (loginData?.email !== user?.email && loginData?.password === user?.password) {
      toast.error("Wrong email")
    }
    else {
      toast.error("Wrong email and password")
    }
  }

  return (
    <div 
      /*style={{display: 'flex', height:'100vh', overflowY: 'hidden', background: 'rgba(255, 55, 255, 0.83)'}}*/ 
      className="login">
      <ToastContainer />

      <div role='img'>
        <img src={loginimage} alt="icon" />
      </div>

      <div role='contentinfo'> 
        <h3>Welcome Back!</h3>

        <form onSubmit={handleSubmit}>
          
          <div role='alert'>
            <input type="email" placeholder='Your Email Address' name='email' onChange={handleChange} />
            <span>
            <input type="password" placeholder='Your password' name='password' onChange={handleChange}/>
            </span>{' '}
            <br/>
            <button> LOGIN </button>
          </div>

          <div className='bottom'>
            <div className='create'><Link to='/register' style={{color: "#00302E", textDecoration: "none"}}>Create an account</Link></div>
            <div className='forgot'><Link to='/register' style={{color: "#00302E", textDecoration: "none"}}>Forgot password</Link></div>
          </div>
          
        </form>

      </div>

    </div>
  )
}

export default Login
