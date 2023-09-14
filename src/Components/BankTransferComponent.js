import { Button, Col, Row } from "antd"
import axios from "axios";
import { useRef, useState } from "react";
import { FormGroup, Label, Input } from "reactstrap";
import OrderModal from "./OrderModal";
import SuccessModal from "./orderComponents/SuccessModal";
const client = axios.create({
  baseURL: "https://estithmar.arabia-it.net/api",
});
const BankTransfer=()=>{
  const inputFile = useRef(null);
  const [FileImage,setFileImage]=useState()
  const[transferNumber,setTransferNumber]=useState()
  const[reciever,setReciever]=useState()
  const[bankAcc,setBankAcc]=useState()
  const[amount,setAmount]=useState()
  const [isModalOpen,setIsModalOpen]=useState(false)

  const ChargeWallet=()=>{
    const formdata = new FormData();
    formdata.append("transfer_number", transferNumber);
    formdata.append("transfear_document", FileImage);
    formdata.append("amount", amount);

    formdata.append("token",localStorage.getItem("token") );
    client
    .post(`/auth/bank-transfear`, formdata, {
      headers: {
        "Content-Type": "multipart/form-data; ",
      },
    })
    .then((res) => {
      setIsModalOpen(true)
    });
  }
  const uploadEnimage = (file,row) => {
    setLoader(true);
    const formdata = new FormData();
    formdata.append("request_deliveries_id", row.id);
    formdata.append("file", file);
    formdata.append("token",localStorage.getItem("token") );

    formdata.append("_method","PUT")
    
    client
      .post(`/asset-owner/request/${serviceRequestId}`, formdata, {
        headers: {
          "Content-Type": "multipart/form-data; ",
        },
      })
      .then((res) => {
       
       
      });
  };
return(
    <div>
        <Row gutter={[16,16]}>
            <Col md={8}>
            <FormGroup>
              <Label for="exampleEmail">
         المستلم الموجه اليه الحوالة
              </Label>
              <Input
                style={{ borderColor: "#7EA831" }}
                type="text"
                onChange={(e)=>setReciever(e.target.value)}
              
              />
            </FormGroup>
            </Col>
            <Col md={8}>
            <FormGroup>
              <Label for="exampleEmail">
         الحساب البنكي الموجه اليه الحوالة
              </Label>
              <Input
                style={{ borderColor: "#7EA831" }}
                type="text"
                onChange={(e)=>setBankAcc(e.target.value)}
              
              />
            </FormGroup>
            </Col>
        </Row>
        <Row>
        <Col md={8}>
            <FormGroup>
              <Label for="exampleEmail">
         المبلغ
              </Label>
              <Input
                style={{ borderColor: "#7EA831" }}
                type="text"
                onChange={(e)=>setAmount(e.target.value)}
              
              />
            </FormGroup>
            </Col>
        </Row>
        <Row gutter={[16,16]}>
            <Col md={8}>
            <FormGroup>
              <Label for="exampleEmail">
         رقم الحوالة
              </Label>
              <Input
                style={{ borderColor: "#7EA831" }}
                type="text"
              onChange={(e)=>setTransferNumber(e.target.value)}
              />
            </FormGroup>
            </Col>
            <Col md={4} style={{alignSelf:"center"}}>
            <Button size="large" onClick={()=>{
                inputFile.current.click()
            }}>
                <img src="/assets/images/ic-upload.png"  style={{width:"19px",marginInline:"3px"}}/>
            ارفاق صورة الحوالة
            </Button>
            <input
                                  style={{display:"none"}}
                                    ref={inputFile}
                                    type="file"
                                    accept="image/jpeg, jpeg, png, image/png, gif, image/gif"
                                    onChange={(e) => {
                                      const file = e.target.files[0];
                                      // uploadEnimage(file,row)
                                      setFileImage(file)
                                      // setImage(file)
                                    }}
                            />
            </Col>
        </Row>
        <Row justify={"center"} className="mt-3">
            <Col md={12} sm={24} xs={24} className="text-center">
                <Button 
                onClick={()=>{
                  ChargeWallet()
                }}
                size="large" style={{background:"#7EA831",color:"#fff",border:"none",borderRadius:"0px",paddingTop:"14px",paddingBottom:"40px"}} >
                شحن محفظتي
                </Button>
            </Col>
        </Row>
        {
                isModalOpen && 
             <SuccessModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>

             }
    </div>
)
}
export default BankTransfer