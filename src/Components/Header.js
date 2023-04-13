import React from "react"
import Image from 'next/image'
// import logo from "/assets/images/logo-waqf.png"
import styled from "styled-components";
import { Layout, Space,Row,Col,Button} from 'antd';
import Link from "next/link";
import { useRouter } from "next/router";
const Nav = styled.div`
  display: flex;
  gap:30px;
  justify-content: space-between;
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
const RowStyle={
    background:"#fff",
    width:"80%",
    margin:"auto",
    padding:"15px",
    direction:"rtl",
    color:"#005D5E",
    gap:"80px",
    height:"120px",
    transform: "translateY(-14px)"

}
const ImageStyle={
    height:"-wevkit-fill-available",
}
const HeaderComponent=()=>{
    const router=useRouter()

    return(

        <Row style={RowStyle}>
            <img src="/assets/images/logo-waqf.png" height={100}/>
        <Nav>

           <li className={router.pathname ==="/" ? "active-item" :null}>
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
            <li className={router.pathname ==="/services" ? "active-item" :null}>
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
            تسجيل الدخول
            </li>
            </Nav>

        </Row>

    )
}
export default HeaderComponent