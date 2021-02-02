import actiontypes from '../actiontypes';
import axios from '../../axios';

export const login = (email, password, callback) => {
  return async dispatch => {
    const user = {
      email,
      password
    }
    await axios.post('/users/login', user)
      .then(res => {
        console.log(res);

        if (res.status === 200) {
          localStorage.setItem('token', res.data.token);
          console.log(res.data)
          dispatch(loginSuccess(res.data.token))
          callback();
        } else {
          return dispatch(loginFailed(false))
        }
      })
      .catch(() => {

        dispatch(loginFailed(false))
      })
  }
}

export const loginSuccess = token => {
  console.log(token)
  return {
    type: actiontypes().user.loginSuccess,
    payload: token
  }
}

export const loginFailed = (payload) => {
  return {
    type: actiontypes().user.loginFailed,
    payload
  }
}

export const logout = payload => {
  localStorage.removeItem('token');
  console.log('payload', payload)
  return {
    type: actiontypes().user.logout,
    payload
  }
}

export const registerUser = () => {
  return {

  }
}