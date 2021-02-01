import actiontypes from '../actiontypes';
import jwt from 'jsonwebtoken';

const initState = {
  isAuthenticated: false,
  userId: null,
  error: null,
  token: null,
  userFirstName: null
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case actiontypes().auth.loginSuccess:
      console.log(action.payload)
      state.userId = jwt.decode(action.payload).user.id
      state.userFirstName = jwt.decode(action.payload).user.firstName
      return {
        token: action.payload,
        isAuthenticated: true,
        error: false
      }

    case actiontypes().auth.loginFailed:
      return {
        isAuthenticated: action.payload,
        error: true
      }

    case actiontypes().auth.logout:
      return {
        isAuthenticated: action.payload,
      }

    default:
      return state
  }

}

export default authReducer;