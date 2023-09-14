import { Button, Card, Col, Rate, Row } from "antd";
import styled from "styled-components";
import CardComponent from "./Card";
import Slider from "./Slider"

const Div=styled.div`
background:#150941;
color:#fff;
transform:translateY(-125px);
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
    min-width:224px;
    border:none;
    border-raduis:0px;
}
`;

const ForthSection=()=>{
return(
    <Div>
        <div className="container" style={{padding:"0px"}}>
            <Row gutter={[16,16]} justify="start">
            <Col lg={6}  md={6} sm={24} className="text-center" style={{lineHeight:3}}>
                <h2 style={{color:"#7EA831"}}>
                خدماتنا
                </h2>
                <p >
                منصة الوقف النامي تربط بين مزودي الخدمات وبين الأوقاف المحتاجة للخدمات ، وبين المانحين الراغبين في دعم الخدمات للأوقاف
                </p>
                <Button size="large" style={{background:"#7EA831",color:"#fff" ,borderRadius:"0px",width:"100%",maxWidth:"200px",border:"none",minHeight:"50px"}}>
                عرض الخدمات
                </Button>
             </Col>
                <Col lg={16} md={16} sm={24} style={{background:"#fff"}} >
                    <Row gutter={[16,16]} className="mt-2 mb-2" justify="space-evenly">
                    <Col md={5} sm={24} >
                    <Card className="text-center" style={{border:"1px solid #150941",color:"#150941"}}> 
                <img src="/assets/images/019-office-building.png"/>
                       <p>
                       الخدمات المحاسبية
                       </p>
                    </Card>
                    </Col>
                    <Col md={5} sm={24} >
                    <Card className="text-center" style={{border:"1px solid #7EA831",background:"#7EA831",color:"#fff"}}> 
                    
                    <img src="/assets/images/legal.png"/>
                       <p>
                       الخدمات القانونية
                       </p>
                    </Card>
                    </Col>
                    <Col md={5} sm={24} >
                    <Card className="text-center" style={{border:"1px solid #150941",color:"#150941"}}> 
                    
                    <img src="/assets/images/019-office-building.png"/>
                       <p>
                       الخدمات التقنيــة
                       </p>
                    </Card>
                    </Col>
                    <Col md={5} sm={24} >
                    <Card className="text-center" style={{border:"1px solid #150941",color:"#150941"}}> 
                    
                    <img src="/assets/images/video.png"/>
                       <p>
                       الخدمات الاعلامية
                       </p>
                    </Card>
                    </Col>
                    <Col md={5} sm={24} >
                    <Card className="text-center" style={{border:"1px solid #150941",color:"#150941"}}> 
                    
                    <img src="/assets/images/019-office-building.png"/>
                       <p>
                       الخدمات المحاسبية
                       </p>
                    </Card>
                    </Col>
                    <Col md={5} sm={24} >
                    <Card className="text-center" style={{border:"1px solid #150941",color:"#150941"}}> 
                    <img src="/assets/images/legal2.png"/>
                       <p>
                       الخدمات القانونية
                       </p>
                       
                    </Card>
                    </Col>
                    <Col md={5} sm={24} >
                    <Card className="text-center" style={{border:"1px solid #150941",color:"#150941"}}> 
                    <img src="/assets/images/019-office-building.png"/>
                       <p>
                       الخدمات التقنيــة
                       </p>
                       
                    </Card>
                    </Col>
                    <Col md={5} sm={24} >
                    <Card className="text-center" style={{border:"1px solid #150941",color:"#150941"}}> 
                    <img src="/assets/images/video.png"/>
                       <p>
                       الخدمات الاعلامية
                       </p>
                       
                    </Card>
                    </Col>
                    
                 
                  
                   
                    
                    </Row>
                </Col>
                
            </Row>
        </div>
        </Div>
)
}
export default ForthSection