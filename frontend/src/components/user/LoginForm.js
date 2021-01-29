import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../store/actions/authActions';
import { useHistory } from 'react-router-dom';

const LoginForm = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const email = useRef();
  const password = useRef();

  const onSub = e => {
    e.preventDefault();
    dispatchEvent(login(email.current.value, password.current.value));
    email.current.value = '';
    password.current.value = '';
    history.push('/')
  }

  return (
    <form onSubmit={onSub}>
      <div className="form__group mb-1">
        <label className="form__label" htmlFor="email">Email:</label>
        <input type="email" id="email" ref={email} className="form__input" />
      </div>

      <div className="form__group mb-3">
        <label className="form__label" htmlFor="password">Password:</label>
        <input type="password" id="password" className="form__input" ref={password} />
      </div>

      <p>Email or password is not correct</p>

      <button type="submit" className="btn-secondary">Sign in</button>
    </form>
  )
}

export default LoginForm
