import actiontypes from '../actiontypes';
import jwt from 'jsonwebtoken';

// const token = window.localStorage.getItem('token');

const initState = {
  loading: true,
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
      state.userId = jwt.decode(action.payload).user.id;
      state.userFirstName = jwt.decode(action.payload).user.firstName;
      state.userLastName = jwt.decode(action.payload).user.lastName;
      state.userEmail = jwt.decode(action.payload).user.email;
      state.token = action.payload;
      state.error = false;
      state.loading = false;
      return state

    case actiontypes().user.fail:
      state.error = action.payload;
      state.loading = false;
      state.token = null;
      return state

    case actiontypes().user.exists:
      state.userAlreadyExists = action.payload;
      state.loading = false;
      state.token = null;
      return state

    case actiontypes().user.logout:
      state.token = null;
      return state

    default:
      return state
  }

}

export default userReducer;