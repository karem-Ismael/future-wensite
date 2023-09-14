import { Button, Col, Rate, Row } from "antd";
import styled from "styled-components";
import CardComponent from "./Card";
const Div=styled.div`
color:#707070;
transform:translateY(-125px);
padding:15px;
.leftSide{

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

const SecondSection=()=>{
return(
    <Div>
        <div className="container" style={{padding:"0px"}}>
            <Row gutter={[16,16]} justify="center">
                <Col lg={8}  md={8} sm={24} xs={24} className="rightSide" style={{alignSelf:"center"}}>
                    <h1 style={{color:"#150941"}}>
                    <p>
                    منصة
                    </p>
                     الوقف النامي
                    </h1>
                 
                    
                </Col>
                <Col lg={12}  md={12} sm={24} xs={24} className="leftSide">
                    <p style={{lineHeight:"2",textAlign:"justify"}}>
                    الوقف النامي منصة الكترونية تربط بين مزودي الخدمات (المحاسبية – الإعلامية – التقنية – القانونية - ...) وبين الأوقاف المحتاجة للخدمات ، وبين المانحين الراغبين في دعم الخدمات للأوقاف ، وبين مستشاري الأوقاف الموثوقين لتقديم الخدمات الاستشارية .ر
                    </p>
                </Col>
            </Row>
        </div>
        </Div>
)
}
export default SecondSection