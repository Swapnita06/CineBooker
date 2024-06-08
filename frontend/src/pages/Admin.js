import React from 'react'
import Authform from '../components/Auth/Authform'
import { sendAdminAuthRequest } from '../api-helpers/api-helpers';
import { useDispatch } from 'react-redux';
import { adminActions } from '../store';

const Admin = () => {

  const dispatch = useDispatch();
  const onResReceived = (data)=>{

    if (!data || !data.id || !data.token) {
      console.log("Invalid response data:", data);
      return;
  }

    console.log(data);
    dispatch(adminActions.login());
    localStorage.setItem("adminId",data.id);
    localStorage.setItem("token",data.token);
  }

  const getData = (data)=>{
   console.log("admin",data);
   sendAdminAuthRequest(data.inputs)
   .then(onResReceived)
   .catch(err=>console.log(err));
  };
  return (
    <div>
      <Authform onSubmit={getData} isAdmin={true}/>
    </div>
  )
}

export default Admin
