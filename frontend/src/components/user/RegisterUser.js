import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { registerUser } from '../../store/actions/userActions';

const RegisterUser = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const password = useRef();

  const [inputError, setInputError] = useState(false)

  let existsError = useSelector(state => state.userReducer.userAlreadyExists);

  const isValid = () => {
    if (firstName.current.value !== '' && lastName.current.value !== '' && email.current.value !== '' && password.current.value !== '') {
      return true
    } else {
      return false
    }
  }

  const onSub = e => {
    e.preventDefault();

    const user = {
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      email: email.current.value,
      password: password.current.value,
    }

    if (isValid()) {
      dispatch(registerUser(user, () => {
        history.push('/')
      }));
      firstName.current.value = '';
      lastName.current.value = '';
      email.current.value = '';
      password.current.value = '';
      setInputError(false)
    } else {
      return setInputError(true)
    }
  }



  return (
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

      {inputError && (
        <div className="error"><small>Please fill in all fields!</small></div>
      )
      }
      {existsError && !inputError &&
        (
          <div className="error"><small>Can not register user! Try again</small></div>
        )
      }
      <div className="mt-2"><small >Already have an account? <Link to="/login">Sign in</Link> </small></div>
      <button type="submit" className="btn-secondary mt-1">Register</button>
    </form>
  )
}

export default RegisterUser

