import React from 'react'
import Authform from '../components/Auth/Authform'
import { sendAdminAuthRequest } from '../api-helpers/api-helpers';
import { useDispatch } from 'react-redux';
import { adminActions } from '../store';

const Admin = () => {

  const dispatch = useDispatch();
  const getData = (data)=>{
   console.log("admin",data);
   sendAdminAuthRequest(data.inputs)
   .then((res)=>console.log(res))
   .then(()=>dispatch(adminActions.login()))
   .catch(err=>console.log(err));
  };
  return (
    <div>
      <Authform onSubmit={getData} isAdmin={true}/>
    </div>
  )
}

export default Admin
