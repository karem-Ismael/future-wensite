import React from "react"
import Image from 'next/image'
// import logo from "/assets/images/logo-waqf.png"
import styled from "styled-components";
import { Layout, Space, Row, Col, Button, Breadcrumb, Menu,Dropdown } from 'antd';
// import { , Layout, , theme } from 'antd';

import Link from "next/link";
import { useRouter } from "next/router";
import DrawerComponent from "./drawer";
import { Grid, Tag } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import {
  LogOutAction
} from '../store/authentication/action';
const { useBreakpoint } = Grid;
const Nav = styled.div`
  display: flex;
  gap:30px;
  justify-content: space-between;
  .login{
    background:#D4B265;
    color:#fff;
    border:none;
    height:44px;
    &:hover{
      color:#fff;
    }
  }
  a {
    color: var(--color-1);
    text-decoration: none;
    transition: all ease 0.3s;
    &:hover {
      color: var(--color-3);
    }
  }
  .current {
    position: relative;
  }

  li {
    list-style: none;
    font-weight:bold;
    @media (max-width: 960px) {
      margin: 35px 0;
    }

    &.active-item {
        color:#D4B265;
      a {
        color: var(--color-3);
        @media (min-width: 961px) {
          display: flex;
          position: relative;
          &:after {
            content: "";
            width: 100%;
            height: 2px;
            position: absolute;
            left: 0;
            background: orange;
          }
        }
      }
    }
  }
  .new-deals {
    position: relative;
    span {
      position: relative;
      img {
        object-fit: cover;
        width: 4px;
        position: absolute;
        top: 0;
        
      }
    }
    
  }
`;
const RowStyle = {
  background: "#fff",
 
  padding: "15px",
  direction: "rtl",
  color: "#005D5E",
  height: "120px",
  transform: "translateY(-14px)"

}
const ImageStyle = {
  height: "-wevkit-fill-available",
}


const HeaderComponent = () => {
  const router = useRouter()
  const screens = useBreakpoint();
  const dispatch=useDispatch()
  const {user} =useSelector(state=>state.authentication.login_data) || {}
  const handleMenuClick = (e) => {
    if(e.key == 3){
    dispatch(LogOutAction());
    }
    if(e.key ==1){
      router.push("profile")
    }
  };
  const items = [
    {
      label: 'حسابي',
      key: '1',
    },
    {
      label: 'طلباتي',
      key: '2',
    },
    {
      label: 'تسجيل خروج',
      key: '3',
   
    },
    
  ];
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  return (

    <Row style={RowStyle} className="container">
      

      {
        screens.lg || screens.xl ? null : <Col md={4} sm={4} xs={4} >
          <DrawerComponent /> 
        </Col>
      }  
      <Col lg={8} md={15} sm={15} xs={15} style={{height:"100%"}}>
        <img src="/assets/images/logoheader.png"className="w-75" height={"100%"} style={{aspectRatio:4,padding:"8px 0px"}} />
      </Col>
      <Col lg={16} style={{display: screens.lg || screens.xl  ? "" : "none"}}>
        <Nav>

          <li className={router.pathname === "/" ? "active-item" : null}>
            <Link href={'/'} >
              الرئيسية
            </Link>
          </li>
          <li className="">
            <Link href={'/about'}>
              من نحن
            </Link>
          </li>

          <li className="">
            <Link href={'/wakf-library'}>
              مكتبة الوقف
            </Link>
          </li>
          <li className={router.pathname.includes("/services") ? "active-item" : null}>
            <Link href={'/services'}>
              خدماتنا
            </Link>
          </li>

          <li className="">
            <Link href={'/wakf-library'}>
              الباقات
            </Link>
          </li>
          <li className="">
            <Link href={'/wakf-library'}>
              الاستشارات
            </Link>
          </li>
          <li className="">
            <Link href={'/wakf-library'}>
              اتصل بنا
            </Link>
          </li>
          <li>
            {
              user?.id ?  
              <Dropdown menu={menuProps}>
              <Button>
                <Space>
                  {
                    user.name
                  }
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
              :  
              <Button className="login" onClick={()=>router.push("/login")}>
              تسجيل الدخول
            </Button>
            }
          </li>
        </Nav>

      </Col>

    </Row>



  )
}
export default HeaderComponent