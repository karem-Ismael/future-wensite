import { useState } from "react";
import { Radio } from 'antd';
import { Input,Button } from 'antd';
import axios from "axios"
import OrderModal from "./OrderModal";
const { TextArea } = Input;

const AvailableAppointments = ({ filteredAppointments }) => {
    const [value2, setValue2] = useState('Apple');
    const [isModalOpen,setIsModalOpen]=useState(false)
    const onChange2 = ({ target: { value } }) => {
        setValue2(value);
    };
    const handelReservation= ()=>{
        const client = axios.create({
            baseURL: "https://estithmar.arabia-it.net/api/",
          });
          client
          .put(`asset-owner/advisor-appointment/${value2}`, {
              token:localStorage.getItem("token")
          }).then(res=>{
              if(!res.errors){
                //   NotificationManager.success("تم تسجيل حجز الاستشارة   بنجاح")
                //   client.get(`/service-request/${serviceRequestId}`).then(res=>{
                //     setOrder(res.data.data)
                //   setIsOpen(!isopen)
  
                     
                //   })
                setIsModalOpen(true)
              }else{
                  
              }
          })
    }
    return (
        <div>
            <p className="choose-time">
                اختر موعد الاتصال
            </p>
            <div className="row justify-content-between">

                <Radio.Group options={filteredAppointments.map((appointment) => ({
                    label: appointment.time.split(":")[0] < 12 ? `${appointment.time}` +"Am" :  appointment.time +"pm", 
                    value: appointment.id
                }))} onChange={onChange2} value={value2}
                    optionType="button"
                    buttonStyle="solid"

                />

            </div>
            <div>
                <p style={{color:"#150941"}}>
                اضف تعليق
                </p>
                <TextArea rows={4} />

            <div className='w-100 mt-2 ' style={{textAlign:"center"}}> 
             <Button className="w-50" disabled={!localStorage.getItem("token")} onClick={() => handelReservation()} style={{ width: "50%", background: "#D3B166", color: "#fff", border: "2px solid #D3B166", borderRadius: "0px" }} size={"large"}> 
             طلب استشارة
             </Button>

             </div>
             {
                isModalOpen && 
             <OrderModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>

             }

            </div>
        </div>
    )
}
export default AvailableAppointments