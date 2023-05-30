import CardComponent from "@/Components/Card";
import LayoutComponent from "@/Components/Layout"
import PageTitleBar from "@/Components/PageTitlebar"
import { Col, Row, Tabs } from "antd";
import { useRouter } from "next/router";
import styled from 'styled-components';
import ProfileImage from "@/Components/ProfileImage"
import ProfileInputs from "@/Components/ProfileInputs";
const BreedCrumb =styled.div`
transform:translateY(-400px);
direction:rtl;
    padding:50px;
.select-title{
    color:#fff;
    align-self:center;
    min-width:70px;
}
.select-content{
    gap:10px;
}
.ant-select-arrow{
    color:#005D5E
}
`;
const DIVContent = styled.div`
transform:translateY(-300px);
direction:rtl;
    padding:50px;
.select-title{
    color:#fff;
    align-self:center;
    min-width:70px;
}
.select-content{
    gap:10px;
}
.ant-select-arrow{
    color:#005D5E
}
`;
function Profile (){
    const router = useRouter()
    const items = [
        {
          key: '1',
          label: `البروفايل`,
          children: <ProfileImage />,
        },
        {
          key: '2',
          label: `خدمات`,
          children: "karem2",
        },
        {
            key: '3',
            label: `باقات`,
            children: "karem2",
        },
        {
            key: '4',
            label: `استشارات`,
            children: "karem2",
        },
        {
            key: '5',
            label: `المحفظة`,
            children: "karem2",
        },
        {
            key: '6',
            label: `الفواتير`,
            children: "karem2",
        },
        
       
      ];
return(
    <LayoutComponent>
            <BreedCrumb className='container'>
                    
                    <PageTitleBar 
                        lastElement={"حسابي"}
                        match={router.asPath}
                        enableBreadCrumb
                        content={"تركز خدمات وحلول الأوقاف الخاصة بنا على مجموعة واسعة من احتياجات الوقف القانونية والإدارية والمالية."}
                    />
            </BreedCrumb>
            <DIVContent className='container' style={{padding:"0px"}}>
            <Row>
                <Col md={24} sm={24} xs={24}>
                    <CardComponent>
                    <Tabs defaultActiveKey={1} items={items}  />
                    </CardComponent>
                </Col>
                <Col md={24} sm={24} xs={24} className="mt-2">
                    <CardComponent>
                        <ProfileInputs />
                    </CardComponent>
                </Col>
            </Row>
            </DIVContent>
        </LayoutComponent>
)
}
export default Profile