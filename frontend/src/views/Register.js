import React from 'react';
import RegisterUser from '../components/user/RegisterUser';

const Register = () => {
  return (
    <div className="form">
      <div>
        <div className="mb-1">
          <h1>Register</h1>
        </div>
        <RegisterUser />
      </div>
    </div>
  )
}

export default Register
