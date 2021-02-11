import React, { useRef, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/actions/userActions';

const LoginForm = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const [inputError, setInputError] = useState(false)
  let error = useSelector(state => state.userReducer.error);

  const email = useRef();
  const password = useRef();

  const isValid = () => {
    if (email.current.value !== '' && password.current.value !== '') {
      return true
    } else {
      return false
    }
  }

  const onSub = e => {
    e.preventDefault();

    if (isValid()) {
      dispatch(login(email.current.value, password.current.value,
        () => {
          try { history.push(history.go(-1)) }
          catch { history.push('/') }
        }
      ));
      setInputError(false)
    } else {
      return setInputError(true)
    }
  };

  return (
    <form onSubmit={onSub}>
      <div className="form__group mb-1">
        <label className="form__label" htmlFor="email">Email:</label>
        <input type="email" id="email" ref={email} className="form__input" />
      </div>

      <div className="form__group mb-1">
        <label className="form__label" htmlFor="password">Password:</label>
        <input type="password" id="password" className="form__input" ref={password} />
      </div>
      {inputError &&
        (<div className="error"><small>Please fill in all fields!</small></div>)
      }
      {error && !inputError &&
        (
          <div className="error"><small>Email or password is incorrect!</small></div>
        )
      }
      <div className="mt-2"><small >Don't have an account? <Link to="/register">Register</Link> </small></div>
      <button type="submit" className="btn-secondary mt-1">Sign in</button>
    </form>
  )
}

export default LoginForm
