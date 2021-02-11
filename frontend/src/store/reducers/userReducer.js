import actiontypes from '../actiontypes';
import jwt from 'jsonwebtoken';


const initState = {
  loading: null,
  userId: null,
  userAlreadyExists: false,
  error: false,
  token: null,
  userFirstName: null,
  userLastName: null,
  userEmail: null,
}

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case actiontypes().user.loginSuccess:

      return {
        ...state,
        userId: jwt.decode(action.payload).user.id,
        userFirstName: jwt.decode(action.payload).user.firstName,
        userLastName: jwt.decode(action.payload).user.lastName,
        userEmail: jwt.decode(action.payload).user.email,
        token: action.payload,
        error: false,
        loading: false
      };

    case actiontypes().user.fail:

      return {
        ...state,
        error: action.payload,
        loading: false,
        token: null
      };

    case actiontypes().user.exists:

      return {
        ...state,
        userAlreadyExists: action.payload,
        loading: false,
        token: null
      }

    case actiontypes().user.logout:
      return {
        ...state,
        token: null
      }

    default:
      return state
  }

}

export default userReducer;