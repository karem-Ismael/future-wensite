import { Button, Card, Col, Rate, Row } from "antd";
import styled from "styled-components";
import CardComponent from "./Card";
import Slider from "./Slider"

const Div=styled.div`
background:#F1F1F1;
color:#fff;
transform:translateY(-1Slider25px);
padding:15px;
.container{

}
.leftSide{

}
.rightSide{
    line-height:3;
}
.call-us-btn{
    background:#7EA831;
    color:#fff;
    min-height:50px;
    min-width:Slider2Slider24px;
    border:none;
    border-raduis:0px;
}
`;

const LastSection=()=>{
return(
    <Div>
        <div className="container" style={{padding:"0px"}}>
            <Row gutter={[16,16]} justify="start">
            <Col lg={24}  md={24} sm={24}  style={{lineHeight:3}}>
                <h2 style={{color:"#7EA831"}}>
                طلب الخدمة
                </h2>
                <p style={{color:"#150941"}}>
                مراحل تسجيلك في المنصة والاستفادة من الخدمات المعروضة
                </p>
               
             </Col>
                <Col lg={24} md={24} sm={24} >
                    <Row gutter={[16,16]} className="mt-2 mb-2" justify="space-evenly">
                    <Col md={8} sm={24} >
                    <Card  style={{border:"1px solid #7EA831",height:"146px",color:"#FFFFFF",position:"relative",background:"#7EA831",width:"300px"}}> 
                <img src="/assets/images/user.png"  className="img-service"/>
                      <div className="d-flex justify-content-between">
                      <p className="p-card">
                       إنشاء حساب
                       </p>
                       <p className="watermark">
                        1
                       </p>
                      </div>
                    </Card>
                    </Col>
                    <Col md={8} sm={24} >
                    <Card  className="class-2" style={{border:"1px solid #FFFFFF",color:"#7EA831",height:"146px",position:"relative",background:"#FFFFFF",width:"300px"}}> 
                    
                    <img src="/assets/images/mark.png"  className="img-service"/>
                      <div className="d-flex justify-content-between"> 
                      <p className="p-card">
                      
                       اختيار الخدمة
                       </p>
                       <p className="watermark ">
                        2
                       </p>
                      </div>
                    </Card>
                    </Col>
                    <Col md={8} sm={24} >
                    <Card  style={{border:"1px solid #7EA831",color:"#FFFFFF",position:"relative",height:"146px",background:"#7EA831",width:"300px"}}> 
                <img src="/assets/images/service.png"  className="img-service"/>
                      <div className="d-flex justify-content-between">
                      <p className="p-card">

                     طلب الخدمة/اجتماع 
                       </p>
                       <p className="watermark">
                        3
                       </p>
                      </div>
                    </Card>
                    </Col>
                    <Col md={8} sm={24} >
                    <Card  style={{border:"1px solid #FFFFFF",color:"#7EA831",position:"relative",height:"146px",background:"#FFFFFF",width:"300px"}}> 
                    
                    <img src="/assets/images/wallet.png" className="img-service"/>
                      <div className="d-flex justify-content-between"> 
                      <p className="p-card">
                      
                      شحن المحفظة
                       </p>
                       <p className="watermark">
                        4
                       </p>
                      </div>
                    </Card>
                    </Col>
                    <Col md={8} sm={24} >
                    <Card  className="class-2" style={{border:"1px solid #7EA831",color:"#FFFFFF",position:"relative",height:"146px",background:"#7EA831",width:"300px"}}> 
                <img src="/assets/images/confirm.png" className="img-service"/>
                      <div className="d-flex justify-content-between">
                      <p className="p-card">
                      
                      تأكيد الشحن 
                       </p>
                       <p className="watermark">
                        5
                       </p>
                      </div>
                    </Card>
                    </Col>
                    <Col md={8} sm={24} >
                    <Card  style={{border:"1px solid #FFFFFF",color:"#7EA831",position:"relative",height:"146px",background:"#FFFFFF",width:"300px"}}> 
                    
                    <img src="/assets/images/beigin.png" className="img-service"/>
                      <div className="d-flex justify-content-between"> 
                      <p className="p-card">
                      
                      بدء الخدمة
                       </p>
                       <p className="watermark">
                        6
                       </p>
                      </div>
                    </Card>
                    </Col>
                    
                    
                    
                    </Row>
                </Col>
                
            </Row>
        </div>
        </Div>
)
}
export default LastSection