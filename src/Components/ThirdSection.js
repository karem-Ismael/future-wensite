import { Button, Col, Rate, Row } from "antd";
import styled from "styled-components";
import CardComponent from "./Card";
import Slider from "./Slider"

const Div=styled.div`
background:#150941;
transform:translateY(-125px);
padding:15px;
.container{
transform:translateY(100px);

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

const ThirdSection=()=>{
return(
    <Div>
        <div className="container" style={{padding:"0px"}}>
            <Row gutter={[16,16]} justify="start">
            <div className="w-100" style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
                    <h3 style={{ minWidth:"196px", color: "#7EA831", fontSize: "30px" }}>
                    أحدث الخدمات
                    </h3>
                    <hr style={{ width: "80%", height: "0px", border: " 1px solid #7EA831", alignSelf: "center" }} />
                    <Button size="large" style={{vorder:"none",background:"#7EA831",color:"#fff",width:"200px",minHeight:"50px"}}>  
                    عرض الكل
                    </Button>
                </div>
                <Col lg={24} sm={24} md={24}>
                <Slider inHome={true} clientServices={[
                    {
                        name:"karem"
                    },
                    {
                        name:"karem"
                    },
                    {
                        name:"karem"
                    },
                    {
                        name:"karem"
                    },
                    {
                        name:"karem"
                    },
                    {
                        name:"karem"
                    },
                    {
                        name:"karem"
                    },
                    {
                        name:"karem"
                    },
                    {
                        name:"karem"
                    }
                ]} /> 
                </Col>
                
            </Row>
        </div>
        </Div>
)
}
export default ThirdSection