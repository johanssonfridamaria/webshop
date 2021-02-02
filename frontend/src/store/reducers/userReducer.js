import actiontypes from '../actiontypes';
import jwt from 'jsonwebtoken';

const initState = {
  userId: null,
  error: false,
  token: null,
  userFirstName: null,
  userLastName: null,
  userEmail: null,
}

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case actiontypes().user.loginSuccess:
      console.log(action.payload)
      state.userId = jwt.decode(action.payload).user.id;
      state.userFirstName = jwt.decode(action.payload).user.firstName;
      state.userLastName = jwt.decode(action.payload).user.lastName;
      state.userEmail = jwt.decode(action.payload).user.email;
      state.token = action.payload;
      state.error = false;
      return state

    case actiontypes().user.fail:
      state.error = action.payload;
      return state

    case actiontypes().user.logout:
      state.token = null;
      return state

    // case actiontypes().user.userExists:
    //   state.error = action.payload
    //   return state

    // case actiontypes().user.registerFailed:
    //   state.error = action.payload
    //   return state

    default:
      return state
  }

}

export default userReducer;