import React from 'react'
import logo from '../assets/logo.svg'
export const Login = () => {
  return (
    <div className='container' >
        <div className="logo-container">
            <div><img src={logo} alt='logo'/></div>
            <div>Log In</div>
        </div>
        <form>
        <div className="form-group">
          <label htmlFor="email">Email :</label>
          <input
          placeholder='Email'
            type="email"
            id="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password :</label>
          <input
          placeholder='Password'
            type="password"
            id="password"
          />
        </div>
        <div className='button-form'>

        <button>
            Log In
        </button>
        </div>

        </form>
    </div>
  )
}
