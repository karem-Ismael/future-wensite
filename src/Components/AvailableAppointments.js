import { useState } from "react";
import { Radio } from 'antd';
import { Input,Button } from 'antd';

const { TextArea } = Input;

const AvailableAppointments = ({ filteredAppointments }) => {
    const [value2, setValue2] = useState('Apple');
    const onChange2 = ({ target: { value } }) => {
        setValue2(value);
    };
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
                <p style={{color:"#005D5E"}}>
                اضف تعليق
                </p>
                <TextArea rows={4} />

            <div className='w-100 mt-2 ' style={{textAlign:"center"}}> 
             <Button className="w-50" onClick={() => router.push(`/advisorDetails/1`)} style={{ width: "50%", background: "#D3B166", color: "#fff", border: "2px solid #D3B166", borderRadius: "0px" }} size={"large"}> 
             طلب استشارة
             </Button>

             </div>

            </div>
        </div>
    )
}
export default AvailableAppointments