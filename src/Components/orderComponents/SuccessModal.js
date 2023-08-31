import { RemoveBorders } from '@/store/orders/action';
import { Button, Modal,Result  } from 'antd';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
const SuccessModal = ({isModalOpen,setIsModalOpen}) => {
    const dispatch=useDispatch()
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const router=useRouter()
  return (
    <>
      <Modal  open={isModalOpen} 
      footer={[]}
      >
      <Result
    status="success"
    title="تم إتمام طلبك وارساله بنجاح"
    extra={[
      <Button className="w-50"  size="large" style={{color:"#D3B166",borderColor:"#D3B166"}}key="buy">طلباتي</Button>,
      <Button  onClick={()=>{
        dispatch(RemoveBorders())
        router.push("/")
      }}className="w-50" size="large" style={{background:"#150941",color:"#fff"}} key="console">
        تصفح المنصة
      </Button>,
    ]}
  />
      </Modal>
    </>
  );
};
export default SuccessModal;