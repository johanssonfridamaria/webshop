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
          return dispatch(loginFailed(true))
        }
      })
      .catch(() => {

        dispatch(loginFailed(true))
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

export const loginFailed = error => {
  return {
    type: actiontypes().user.loginFailed,
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
        console.log(res);

        if (res.status === 200) {
          dispatch(login(user.email, user.password, callback))
        }

        else if (res.status === 400) {
          dispatch(userExists(true))
        }
        else {
          dispatch(registerFailed(true))
        }
      })
      .catch(() => {
        dispatch(registerFailed(true))
      })
  }

}

export const userExists = error => {
  return {
    type: actiontypes().user.userExists,
    payload: error
  }
}

export const registerFailed = error => {
  return {
    type: actiontypes().user.registerFailed,
    payload: error
  }
}