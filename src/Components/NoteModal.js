import React, { useState } from "react"
import { Button, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap"
import Select from "react-select";
import axios from "axios"
import { useSelector } from "react-redux";

const client = axios.create({
    baseURL: "https://estithmar.arabia-it.net/api/admin",
  });
const NoteModal =({isopen,setIsOpen,serviceRequestId,setOrder})=>{
    const toggle=()=>setIsOpen(!isopen)
  const {orderDetails} =useSelector((state)=>state.orders)||{}

    const [data, setData] = useState(
        {
          add_note : true,
          type : "استفسار",
          title : "عنوان اختباري",
          content : "محتوي اختباري"
        }
      );
    const addNote=()=>{
        client
        .put(`service-request/${orderDetails.id}`, {
            ...data
        }).then(res=>{
            console.log(res,"res")
            if(!res.errors){
                // NotificationManager.success("تم تسجيل الملاحظة بنجاح")
                client.get(`/service-request/${orderDetails.id}`).then(res=>{
                  setOrder(res.data.data)
                setIsOpen(!isopen)

                   
                })
            }else{
                
            }
        })
    }
    console.log(orderDetails,"orderDetails")
    return(
        <Modal size="lg" id="modal-note" isOpen={isopen} toggle={toggle} style={{padding:"10px"}}>
        <ModalHeader toggle={toggle}>  الملاجظات </ModalHeader>
        <ModalBody >
        <div className="row">
            <FormGroup className="w-100">
                 <Label for="exampleSelect">نوع الملاحظة</Label>
                 {
                    <Select options={[
                        {label:"استفسار",value:"استفسار"},
                        {label:"شكوي",value:"شكوي"},
                        {label:"مقترح",value:"مقترح"},


                    ]} 
                    placeholder="اختر نوع الملاحظة"
                    onChange={(sel)=>{
                        setData({
                            ...data,
                            type:sel.value
                        })
                    }}
                    />         
                 }
               </FormGroup>
            </div>
            <div className="row">
            <FormGroup className="w-100">
                 <Label for="exampleSelect">عنوان الملاحظة</Label>
                 {
                   <Input
                   id="exampleSelect"
                   name="select"
                   type="text"
                   placeholder='عنوان الملاحظة'
                   style={{ borderColor: "#D4B265" }}
                   onChange={(e)=>{
                    setData({
                        ...data,
                        title:e.target.value
                    })
                   }}
                 
                 />
                
                 }
               </FormGroup>
            </div>
            <div className="row">
            <FormGroup className="w-100">
                 {
                   <Input
                   id="exampleText"
                   name="text"
                   type="textarea"
                   style={{ borderColor: "#D4B265" }}
                   onChange={(e)=>{
                    setData({
                            ...data,
                            content:e.target.value
                        })
                   }}

                />
                
                 }
               </FormGroup>
            </div>
           
        </ModalBody>
        <ModalFooter className="d-flex justify-content-center" style={{justifyContent:"center"}}>
         <div className="col-md-4 col-sm-12">
         <Button className="w-100" onClick={()=>addNote()}  style={{color:"#fff",background:"#005D5E"}}>
          ارسال
          </Button>{' '}
         </div>
          <div className="col-md-4 col-sm-12">
          <Button className="w-100" onClick={()=>setIsOpen(!isopen)} style={{color:"#fff",background:"#005D5E"}} >
          الغاء
          </Button>{' '}
          </div>
          {/* <Button color="secondary" onClick={toggle}>
            Cancel
          </Button> */}
        </ModalFooter>
      </Modal>
    )
}
export default NoteModal;