import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/actions/userActions';

const LoginForm = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  let error = useSelector(state => state.userReducer.error);
  let isAuthenticated = useSelector(state => state.userReducer.isAuthenticated)

  const email = useRef();
  const password = useRef();

  const onSub = e => {
    console.log(error)
    e.preventDefault();
    if (email.current.value !== '' && email.current.value !== '') {
      dispatch(login(email.current.value, password.current.value,
        //   () => {
        //   if (isAuthenticated) {
        //     email.current.value = '';
        //     password.current.value = '';
        //     history.push('/')
        //   }
        // }
      ));
    } else
      return error = true;
  };

  useEffect(() => {
    if (isAuthenticated) {
      email.current.value = '';
      password.current.value = '';
      history.push('/')
    }
  }, [isAuthenticated, history])


  return (
    <div>
      <div className="mb-1">
        <h1>Sign In</h1>
      </div>
      <form onSubmit={onSub}>
        <div className="form__group mb-1">
          <label className="form__label" htmlFor="email">Email:</label>
          <input type="email" id="email" ref={email} className="form__input" />
        </div>

        <div className="form__group mb-1">
          <label className="form__label" htmlFor="password">Password:</label>
          <input type="password" id="password" className="form__input" ref={password} />
        </div>
        {error &&
          <div className="form__error"><small>Please fill in all fields!</small></div>
        }
        {!isAuthenticated &&
          <div className="form__error"><small>Email or password is incorrect!</small></div>
        }
        <button type="submit" className="btn-secondary mt-3">Sign in</button>
      </form>
    </div>
  )
}

export default LoginForm
