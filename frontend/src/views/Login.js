import React from 'react'
import LoginForm from '../components/user/LoginForm'

const Login = () => {

  return (
    <div className="form">
      <div>
        <div className="mb-1">
          <h1>Sign In</h1>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}

export default Login
