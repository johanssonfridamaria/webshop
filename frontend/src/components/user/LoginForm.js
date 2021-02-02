import React, { useRef, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/actions/userActions';

const LoginForm = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  let error = useSelector(state => state.userReducer.error);
  let token = useSelector(state => state.userReducer.token)

  const email = useRef();
  const password = useRef();

  const onSub = e => {
    console.log(error)
    e.preventDefault();
    if (email.current.value !== '' && email.current.value !== '') {
      dispatch(login(email.current.value, password.current.value,
        () => {
          // if (token) {
          //   email.current.value = '';
          //   password.current.value = '';
          //   history.push('/')
          // }
          try { history.push(history.location.state.from.pathname) }
          catch { history.push('/') }
        }
      ));
    } else
      return error = true;
  };

  // useEffect(() => {
  //   if (token) {
  //     email.current.value = '';
  //     password.current.value = '';
  //     history.push('/')
  //   }
  // }, [token, history])


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
      {/* {!error && (
          <div className="form__error"><small>Please fill in all fields!</small></div>
        )
        }
        {!error &&
          (
            <div className="form__error"><small>Email or password is incorrect!</small></div>
          )
        } */}
      <div className="mt-2"><small >Don't have an account? <Link to="/register">Register</Link> </small></div>
      <button type="submit" className="btn-secondary mt-1">Sign in</button>
    </form>
  )
}

export default LoginForm
