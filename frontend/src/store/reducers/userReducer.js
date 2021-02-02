import actiontypes from '../actiontypes';
import jwt from 'jsonwebtoken';

const initState = {
  userId: null,
  error: false,
  token: null,
  userFirstName: null
}

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case actiontypes().user.loginSuccess:
      console.log(action.payload)
      state.userId = jwt.decode(action.payload).user.id;
      state.userFirstName = jwt.decode(action.payload).user.firstName;
      state.token = action.payload;
      state.error = false;
      return state

    case actiontypes().user.loginFailed:
      state.error = true;
      return state

    case actiontypes().user.logout:
      state.token = null;
      return state


    default:
      return state
  }

}

export default userReducer;