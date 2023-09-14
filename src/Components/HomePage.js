import { Button, Col, Rate, Row } from "antd";
import styled from "styled-components";
import CardComponent from "./Card";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import ForthSection from "./ForthSection";
import LastSection from "./LastSection";

const Div=styled.div`
background:#150941;
color:#fff;
transform:translateY(-225px);
padding:15px;
.rightSide{
transform:translateY(50px);
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
const HomePage=()=>{
return(
 <>
  <FirstSection />
  <SecondSection />
  <ThirdSection />
  <div style={{minHeight:"200px"}}>
</div>
<ForthSection />
<LastSection />

 </>
)
}
export default HomePage