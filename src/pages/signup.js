/**
 * Sign Up With Firebase
 */

import React, { Component } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { FormGroup, Label, Input, ButtonGroup, Button } from "reactstrap";
import Select from "react-select";
import {
    authDataAction,
    AuthFail,
    AuthSuccess
} from '../store/authentication/action';
import {
    RadiusBottomleftOutlined,
    RadiusBottomrightOutlined,
    RadiusUpleftOutlined,
    RadiusUprightOutlined,
  } from '@ant-design/icons';
import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from "axios"
import { notification } from 'antd';

 const Signup =()=>  {
const [user,setUser]=useState({
  category:"asset-owner"
})
const dispatch =useDispatch()
const router = useRouter()
const openNotification = () => {
    notification.open({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };
  const handelClick=()=>{
//    dispatch(HandelSignUp(user,router))
axios.post("https://estithmar.arabia-it.net/api/auth/register",{...user}
 ).then(res=>{
  if(!res.data.errors){
  localStorage.setItem("user_id",JSON.stringify(res?.data?.data))
  localStorage.setItem("token",res.data?.data?.access_token)
  dispatch(authDataAction(res?.data?.data));
  dispatch(AuthSuccess());
   router.push('/');

  }else{
     dispatch(AuthFail(res.data.errors));
  }
 }).catch(err=>console.log(err.message))
  } 
  const {errors} =useSelector(state=>state.authentication) || {}
      return (
         <div className='row' style={{height:"100vh" ,textAlign:"right",direction:"ltr"}}>
         <div className='col-md-8 col-sm-12' style={{margin:"auto",direction:"rtl",paddingRight:"50px"}}> 
               <div className='col-md-5 col-sm-12'> 
               <p className='title-login' style={{position:"relative"}}>
               معلومات الحساب
               </p>
               <FormGroup>
                 <Label for="exampleSelect"> اسم المستخدم</Label>
                 {
                   <Input
                   id="exampleSelect"
                   name="select"
                   type="text"
                   placeholder='اسم المستخدم'
                   style={{ borderColor: "#D4B265" }}
                   onChange={(e)=>{
                     setUser({
                        ...user,
                        name:e.target.value
                     })
                   }}
                 />
                 }
               </FormGroup>
               </div>
               <div className='col-md-5 col-sm-12' >
               <FormGroup>
                 <Label for="exampleSelect"> البريد الالكتروني</Label>
                 {
                   <Input
                   id="exampleSelect"
                   name="select"
                   type="email"
                   placeholder='البريد الالكتروني'
                   style={{ borderColor: "#D4B265" }}
                   onChange={(e)=>{
                     setUser({
                        ...user,
                        email:e.target.value
                     })
                   }}
                 />
                 }
               </FormGroup>
               </div>
               <div className='col-md-5 col-sm-12'> 
               <FormGroup>
                 <Label for="exampleSelect">كلمة المرور</Label>
                 {
                   <Input
                   id="exampleSelect"
                   name="select"
                   type="password"
                   placeholder='كلمة المرور'
                   style={{ borderColor: "#D4B265" }}
                   onChange={(e)=>{
                     setUser({
                        ...user,
                        password:e.target.value
                     })
                   }}
                 />
                 }
               </FormGroup>
               </div>
               <div className='col-md-5 col-sm-12'> 
               <FormGroup>
                 <Label for="exampleSelect">تأكيد كلمة المرور</Label>
                 {
                   <Input
                   id="exampleSelect"
                   name="select"
                   type="password"
                   placeholder='تأكيد كلمة المرور'
                   style={{ borderColor: "#D4B265" }}
                   onChange={(e)=>{
                     setUser({
                        ...user,
                        password_confirmation:e.target.value
                     })
                   }}
                 />
                
                 }
               </FormGroup>
               </div>
               <div className='col-md-5 col-sm-12 '> 
                  { 
                  errors ? 
                    Object.keys(errors)?.map((key,value)=>(
                      <div className=''> 
                        {errors[key]?.map(err=>(
                        <div className='alert alert-danger'>
                          {key} {err}
                        </div>
                        ))
                        }
                      </div>
                    ))
                    : null
                  }
               </div>
             
               <div className='col-md-5 col-sm-12' style={{gap:"30px"}}>
                 <button onClick={()=>handelClick()} style={{border:"none",background:"#D4B265",color:"#fff",height:"48px",cursor:"pointer",width:"100%"}}>
                 تسجيل   
                 </button>
               </div>
               
         </div>
         <div className='col-md-4 col-sm-12 logo' style={{backgroundColor:"#005D5E"}}>
         <div className='m-auto text-center' style={{placeItems:"center",display:"grid",height:"100%"}}>
            <img src="/assets/images/logo-waqf.png" className="m-auto"/>          
        </div>
         </div>

      </div>
      );
   }

// map state to props
// const mapStateToProps = ({ authUser }) => {
//    const { loading } = authUser;
//    return { loading };
// };

// export default connect(mapStateToProps, {
//    signupUserInFirebase,
//    signinUserWithFacebook,
//    signinUserWithGoogle,
//    signinUserWithGithub,
//    signinUserWithTwitter
// })(Signup);
export default Signup