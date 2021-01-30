import actiontypes from '../actiontypes';

const initState = {
  isAuthenticated: false,
  user: {},
  error: null,
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case actiontypes().auth.loginSuccess:
      return {
        user: action.payload,
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