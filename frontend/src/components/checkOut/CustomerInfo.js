import React from 'react';
import { useSelector } from 'react-redux';


const CustomerInfo = () => {

  const firstName = useSelector(state => state.userReducer.userFirstName);
  const lastName = useSelector(state => state.userReducer.userlastName);
  const userEmail = useSelector(state => state.userReducer.userEmail);


  return (
    <div className="checkout__customer">
      <h3>Your info</h3>
      <p>{firstName} {lastName}</p>
      <p>{userEmail}</p>
    </div>
  )
}

export default CustomerInfo
