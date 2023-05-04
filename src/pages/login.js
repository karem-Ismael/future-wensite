

import { Col, Row } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { Component } from 'react';
import { useState } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { FormGroup, Label, Input, ButtonGroup, Button } from "reactstrap";
import axios from "axios"
import {
    authDataAction,
    AuthFail,
} from '../store/authentication/action';
//Auth File

const Signin =()=>{
   const dispatch=useDispatch()
    const router = useRouter()
  const {errors} =useSelector(state=>state.authentication) || {}
      const [user,setUser] =useState({
         email:"",
         password:""
      })
//    const logo=require('Assets/img/logo-waqf.png')
const handelClick=()=>{
//    dispatch(authDataAction(user,history))
axios.post("https://estithmar.arabia-it.net/api/auth/login",{...user}
  ).then(res=>{
   if(res.status == 200){
   localStorage.setItem("user_id",JSON.stringify(res.data.data))
   localStorage.setItem("token",res.data.data.access_token)
   dispatch(authDataAction(res.data.data,router))
   router.push('/');
   }
  }).catch(res=>{
    dispatch(AuthFail("البريد الالكتروني او كلمة المرور غير صحيح "));
  })
}
      return (
         <Row  style={{height:"100vh" ,textAlign:"right",direction:"ltr"}}>
            <Col md={16} sm={24}  style={{margin:"auto",direction:"rtl",padding:"50px"}}>
                  <p className='title-login' style={{position:"relative"}}>
                  تسجيل دخول
                  </p>
                  <div className='col-md-5 col-sm-12'> 
                  <FormGroup>
                    <Label for="exampleSelect">البريد الالكتروني</Label>
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
                     <div className='row justify-content-between m-0'>
                        <div className='col-md-4 col-sm-12'>
                        <p>
                        تذكرني
                        </p>
                        </div>
                       <div className='col-md-8 col-sm-12'>
                       <Link href="/" style={{color:"#005D5E"}}>
                        نسيت اسم المستخدم / كلمة المرور
                        </Link>
                       </div>
                     </div>
                  </div>
                  {
                     errors ? <div className='col-md-5 col-sm-12 alert alert-danger'>
                              {errors}
                        </div> :null
                  }
                  <div className='col-md-5 col-sm-12' style={{gap:"30px"}}>
                      
                    <button 
                    disabled={!user.password.length || !user.email.length}
                    className="w-100 mt-1"
                    onClick={()=>handelClick()}style={{border:"none",background:"#D4B265",color:"#fff",height:"48px",cursor:"pointer"}}>
                        دخول   
                    </button>
                    <hr style={{background:"#707070" ,margin:"20px"}}/>
                  </div>
                  <div className='row m-0' style={{gap:"30px",width:"fit-content"}}>
                   <span>
                   ليس لدي حساب؟ 
                   </span>
                   <Link href="/signup" style={{color:"#005D5E",width:"fit-content"}}>
                   إنشاء حساب
                   </Link>
                  </div>
            </Col>
            <Col md={8} sm={24} style={{backgroundColor:"#005D5E"}}>
                 <div className='m-auto text-center' style={{placeItems:"center",display:"grid",height:"100%"}}>
                 <img src={"/assets/images/logo-waqf.png"} className="m-auto"/>
                 </div>
            </Col>

         </Row>
      );
   }
export default Signin;