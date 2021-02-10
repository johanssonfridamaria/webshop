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

        if (res.status === 200) {
          localStorage.setItem('token', res.data.token);
          dispatch(loginSuccess(res.data.token))
          callback();
        }
      })
      .catch(() => {

        dispatch(fail(true))
      })
  }
}

export const loginSuccess = token => {
  return {
    type: actiontypes().user.loginSuccess,
    payload: token
  }
}

export const fail = error => {
  return {
    type: actiontypes().user.fail,
    payload: error
  }
}
export const userExists = error => {
  return {
    type: actiontypes().user.userExists,
    payload: error
  }
}

export const logout = () => {
  localStorage.removeItem('token');
  return {
    type: actiontypes().user.logout,
  }
}

export const registerUser = (user, callback) => {
  return async dispatch => {
    await axios.post('/users/register', user)
      .then(res => {

        if (res.status === 200) {
          dispatch(login(user.email, user.password, callback))
        }

      })
      .catch(() => {
        if (res.status === 400) {
          dispatch(userExists(true))
        } else
          dispatch(fail(true))
      })
  }
}

export const setUser = () => {
  return async dispatch => {
    if (localStorage.getItem('token')) {
      let token = localStorage.getItem('token')
      dispatch(loginSuccess(token))
    } else {
      dispatch(fail(true))
    }
  }
}