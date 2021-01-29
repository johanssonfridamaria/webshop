import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../store/actions/userActions';
import { useHistory } from 'react-router-dom';

const RegiserUser = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const password = useRef();

  const onSub = e => {
    e.preventDefault();

    const user = {
      firstName = firstName.current.value,
      lastName = lastName.current.value,
      email = email.current.value,
      password = password.current.value,
    }

    dispatch(register(user));
    email.current.value = '';
    password.current.value = '';
    firstName.current.value = '';
    lastName.current.value = '';
    history.push('/login')
  }

  return (
    <div>
      <div className="mb-1">
        <h1>Register</h1>
      </div>
      <form onSubmit={onSub}>
        <div className="form__group mb-1">
          <label className="form__label" htmlFor="firstName">First name:</label>
          <input type="text" id="firstName" ref={firstName} className="form__input" />
        </div>

        <div className="form__group mb-1">
          <label className="form__label" htmlFor="lastName">Last name:</label>
          <input type="text" id="lastName" ref={lastName} className="form__input" />
        </div>

        <div className="form__group mb-1">
          <label className="form__label" htmlFor="email">Email:</label>
          <input type="email" id="email" ref={email} className="form__input" />
        </div>

        <div className="form__group mb-1">
          <label className="form__label" htmlFor="password">Password:</label>
          <input type="password" id="password" className="form__input" ref={password} />
        </div>

        <div className="form__error"><small>Please fill in all fields!</small></div>

        <button type="submit" className="btn-secondary mt-3">Register</button>
      </form>
    </div>
  )
}

export default RegiserUser

