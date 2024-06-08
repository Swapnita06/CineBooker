import React from 'react'
import Authform from '../components/Auth/Authform'
import { sendUserAuthRequest } from '../api-helpers/api-helpers';
import { useDispatch } from 'react-redux';
import { userActions } from '../store';


const Auth = () => {
const dispatch = useDispatch()
 const getData =(data)=>{
 console.log(data);
 sendUserAuthRequest(data.inputs,data.signup)
 .then((res)=>console.log(res)
.then(()=>dispatch(userActions.login()))
).catch((err)=>console.log(err));
  };
  return (
    <div>
      <Authform onSubmit ={getData} isAdmin={false}/>
    </div>
  )
}

export default Auth
