import React from 'react'
import './CSS/LoginSignUp.css'

function LoginSignUp() {
  return (
    <div className='loginSignup'>
      <div className="loginSignup-container">
        <h1>Sign Up</h1>
        <div className="loginSignup-fields">
          <input type="text" placeholder='Enter Your Name' name="" id="" />
          <input type="email" placeholder='Enter Your Email ID' name="" id="" />
          <input type="password" placeholder='Enter Password' name="" id="" />
        </div>
        <button>Continue</button>
        <p className="loginSignup-login">Already have an Account? <span>Login Here</span></p>
        <div className="loginSignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree tothe terms of use & Privacy Policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignUp