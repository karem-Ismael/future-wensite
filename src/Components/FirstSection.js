import { Button, Col, Rate, Row } from "antd";
import styled from "styled-components";
import CardComponent from "./Card";
const Div=styled.div`
background:#150941;
color:#fff;
transform:translateY(-225px);
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


const FirstSection=()=>{
    return(
        <Div>
        <div className="container" style={{padding:"0px"}}>
            <Row gutter={[16,16]} justify="center">
                <Col lg={10}  md={10} sm={24} xs={24} className="rightSide" style={{alignSelf:"center"}}>
                    <h1>
                    سعياً نحو
                    <span className="homespan">
                        {"  "}
                    تنمية الأوقاف
                    </span>
                     
                    </h1>
                    <p>
                    تقديم الخدمات والاستشارات الاستثمارية المتكاملة التي تلبي احتياجات القطاع الوقفي الصغير والمتوسط وفقاً لأعلى المعايير وأفضل الممارسات مما يساهم في تحسين عوائد القطاع
                    </p>
                    <Button size="large" className="call-us-btn">
                    تواصل معنا
                    </Button>
                </Col>
                <Col lg={8}  md={8} sm={24} xs={24} className="leftSide">
                <CardComponent>
                                                   
                                                    <p className='card-title' style={{textAlign:"right"}}>
                                                    الحصاد محاسبون
                                                    </p>
                                                    <h3 className='service-title' style={{margin:"auto"}}>
                                                    إدارة التحقيق والمراجعة
                                                    </h3>
                                                    <p className='service-description'>
                                                    إدارة عمليات التحقيق الداخلي والتنسيق مع لجنة المراجعة الداخلية ومراجع الحسابات الخارجي
                                                    </p>
                                                    <hr style={{color:"#9C9C9C"}}/>
                                                 
                                                    
                                                    
                                                    <div className='rate' >
                                                    <Rate allowHalf defaultValue={2.5} disabled />
                                                    </div>
                                                    <div className="btn-details" style={{position:"absolute",bottom:"0px",width:"100%",marginBottom:"10px"}}>
                                                    <Button    style={{width:"50%" ,background:"#150941",color:"#fff",border:"none",borderRadius:"0px"}}size={"large"}>التفاصيل</Button>
                                                    </div>
                                </CardComponent>
                </Col>
            </Row>
        </div>
        </Div>
    )
}
export default FirstSection