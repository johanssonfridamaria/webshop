import actiontypes from '../actiontypes';
import axios from '../../axios';

export const login = (email, password) => {
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
          dispatch(loginSuccess(res.data))
        } else {
          return dispatch(loginFailed(false))
        }
      })
      .catch(() => {

        dispatch(loginFailed(false))
      })
  }
}

export const loginSuccess = (payload) => {
  console.log(payload)
  return {
    type: actiontypes().auth.loginSuccess,
    payload
  }
}

export const loginFailed = (payload) => {
  return {
    type: actiontypes().auth.loginFailed,
    payload
  }
}

export const logout = () => {
  return {
    type: actiontypes().auth.logout,
    payload: false
  }
}
