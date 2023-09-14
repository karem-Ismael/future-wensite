import { Button, Col, Rate, Row } from "antd";
import styled from "styled-components";
import CardComponent from "./Card";
import Slider from "./Slider";
import Slider2 from "./Slider2";
const Div=styled.div`
background:#150941;
color:#fff;
transform:translateY(-300px);
padding:15px;
.leftSide{
transform:translateY(50px);

}
.rightSide{
    line-height:3;
}
.call-us-btn{
    background:#7EA831;
    color:#fff;
    min-height:50px;
    min-width:224px;
    border:none;
    border-raduis:0px;
}
`;


const FirstSection=({services})=>{
    return(
        <Div>
        <div className="container" style={{padding:"0px"}}>
            <Row gutter={[16,16]} justify="center">
                <Col lg={10}  md={10} sm={24} xs={24} className="rightSide" style={{alignSelf:"center"}}>
                    <h1>
                    الوقف النامي
                    <span className="homespan">
                        {"  "}
                        أمان واستدامة
                    </span>
                     
                    </h1>
                    <p>
                    منصة الكترونية تربط بين الأوقاف الباحثة عن خدمات وبين مزودي الخدمات المرخصين وبين مستشاري الأوقاف الموثوقين لتقديم الخدمات الاستشارية حيث تتم كل عمليات الدفع عن طريق محفظة الكترونية بطريقة آمنة وموثوقة .


                    </p>
                    <Button size="large" className="call-us-btn">
                    تواصل معنا
                    </Button>
                </Col>
                <Col lg={8}  md={8} sm={24} xs={24} className="leftSide">
                <Slider2 inHome={true} clientServices={services?.data?.data?.slice(0,3)} /> 
                </Col>
            </Row>
        </div>
        </Div>
    )
}
export default FirstSection