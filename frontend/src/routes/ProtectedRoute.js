import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const UserRoute = ({ component: Component, ...rest }) => {

  const user = useSelector(state => state.userReducer.token);

  return (
    <Route {...rest} render={props => {
      if (user) {
        return <Component {...props} />
      } else {
        return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      }
    }} />
  )
}