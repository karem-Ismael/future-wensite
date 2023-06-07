import { Button, Drawer, Radio, Space } from 'antd';
import {Dropdown } from 'antd';

import { useState } from 'react';
import {MenuOutlined} from '@ant-design/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { LogOutAction } from '@/store/authentication/action';
import { DownOutlined, UserOutlined } from '@ant-design/icons';

const DrawerComponent = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('right');
  const router = useRouter()
  const {user} =useSelector(state=>state.authentication.login_data) || {}
  const dispatch=useDispatch()

  const showDrawer = () => {
    setOpen(true);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  const onClose = () => {
    setOpen(false);
  };
  const handleMenuClick = (e) => {
    if(e.key == 3){
    dispatch(LogOutAction());
    }
    if(e.key ==1){
      router.push("profile")
    }
  };
  const spaceStyle={
    transform:"translatY(-25px)"
  }
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
  ]
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  return (
    <>
      <Space style={spaceStyle}>
        
        <Button onClick={showDrawer}>
        <MenuOutlined />
        </Button>
      </Space>
      <Drawer
        title="Drawer with extra actions"
        placement={placement}
        width={"80%"}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            
          </Space>
        }
      >
       
      <ul className="drawerlist" style={{listStyleType:"none"}}>
      <li className={router.pathname === "/" ? "active-item list-item" : "list-item"}>
            <Link href={'/'} >
              الرئيسية
            </Link>
          </li>
          <li className="list-item">
            <Link href={'/about'} className="drawer-link">
              من نحن
            </Link>
          </li>

          <li className="list-item">
            <Link href={'/wakf-library'} className="drawer-link">
              مكتبة الوقف
            </Link>
          </li>
          <li className={router.pathname.includes("/services") ? "active-item list-item" : "list-item"}>
            <Link href={'/services'} className="drawer-link">
              خدماتنا
            </Link>
          </li>

          <li className="list-item">
            <Link href={'/wakf-library'} className="drawer-link">
              الباقات
            </Link>
          </li>
          <li className="list-item">
            <Link href={'/wakf-library'} className="drawer-link">
              الاستشارات
            </Link>
          </li>
          <li className="list-item">
            <Link href={'/wakf-library'} className="drawer-link">
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
      </ul>
      </Drawer>
    </>
  );
};
export default DrawerComponent;