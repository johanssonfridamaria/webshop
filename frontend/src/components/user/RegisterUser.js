import React, { useRef } from 'react';
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

  let error = useSelector(state => state.userReducer.error);

  const onSub = e => {
    e.preventDefault();

    const user = {
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      email: email.current.value,
      password: password.current.value,
    }

    if (firstName !== '' && lastName !== '' && email !== '' && password !== 0) {
      dispatch(registerUser(user, () => {
        try { history.push(history.location.state.from.pathname) }
        catch { history.push('/') }
      }));
      email.current.value = '';
      password.current.value = '';
      firstName.current.value = '';
      lastName.current.value = '';
    } else
      error = true;
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

      {/* {!error && (
          <div className="form__error"><small>Please fill in all fields!</small></div>
        )
        }
        {!error &&
          (
            <div className="form__error"><small>User already exists</small></div>
          )
        } */}
      <div className="mt-2"><small >Already have an account? <Link to="/login">Sign in</Link> </small></div>
      <button type="submit" className="btn-secondary mt-1">Register</button>
    </form>
  )
}

export default RegisterUser

