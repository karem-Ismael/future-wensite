import { Button, Drawer, Radio, Space } from 'antd';
import { useState } from 'react';
import {MenuOutlined} from '@ant-design/icons';
const DrawerComponent = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('right');
  const showDrawer = () => {
    setOpen(true);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  const onClose = () => {
    setOpen(false);
  };
  const spaceStyle={
    transform:"translatY(-25px)"
  }
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
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};
export default DrawerComponent;