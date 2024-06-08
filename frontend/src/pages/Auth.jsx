import React from 'react'
import Authform from '../components/Auth/Authform'
import { sendUserAuthRequest } from '../api-helpers/api-helpers';
import { useDispatch } from 'react-redux';
import { userActions } from '../store';


// const Auth = () => {
// const dispatch = useDispatch()
//  const getData =(data)=>{
//  console.log(data);
//  sendUserAuthRequest(data.inputs,data.signup)
//  .then((res)=>console.log(res)
// .then(()=>dispatch(userActions.login()))
// ).catch((err)=>console.log(err));
//   };
  

const Auth = () => {
  const dispatch = useDispatch();
const onResReceived = (data)=>{
  console.log(data);
  if (data && data.user && data.user._id) {
  dispatch(userActions.login());
  localStorage.setItem("userId",data.user._id);
}
else {
  console.error('Invalid response data:', data); // Log if _id is missing
}
};
  const getData = (data) => {
    console.log(data);
    sendUserAuthRequest(data.inputs, data.signup)
     .then(onResReceived)
      .catch((err) => console.log(err));
  };
  
  return (
    <div>
      <Authform onSubmit ={getData} isAdmin={false}/>
    </div>
  )
}

export default Auth
