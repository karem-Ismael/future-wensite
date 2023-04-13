import HeaderComponent from "./Header"
import styled from "styled-components";
import { Layout, Space,Row,Col,Button} from 'antd';

const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  textAlign: 'left',
  gap:"15px",
  color: '#fff',
  height: 60,
  paddingInline: 60,
  lineHeight: '64px',
  backgroundColor: '#005D5E',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  // backgroundImage:url(`${mailImage}`),
  background:"url(/assets/images/slide.png)",
  backgroundRepeat:"no-repeat",
  backgroundPosition:"50% 50%",
  minHeight:"84vh"
};
const HeaderImages={
  gap:"15px",
  height:"100%",

}
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#3ba0e9',
};
const footerStyle = {
  textAlign: 'right',
  color: '#fff',
  backgroundColor: '#D3B166',
};
const footer1={
  textAlign: 'right',
  color: '#fff',
  backgroundColor: '#005D5E',
}
const BtnStyle={
  padding:"9px 5px",
  borderRadius:"0px"
}

const LayoutComponent =({children})=>{
    return(
        <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
    size={[20, 20]}
  >
    <Layout>
      <Header style={headerStyle}>
      <div className="container" style={{padding:"0px"}}>

        <Row style={HeaderImages} justify="start">
          <div style={HeaderImages} >
            <Button style={BtnStyle}><img src="/assets/images/ico-twitter.png" width={18} height={16}  alt="twitter icon"/> </Button>
          </div>  
          <div style={HeaderImages}>
          <Button style={BtnStyle}> <img src="/assets/images/ico-insta.png" width={18} height={16} alt="instgram icon"/></Button>
          </div>  
          <div style={HeaderImages}>
          <Button style={BtnStyle}> 
            <img src="/assets/images/linkedin.png"  width={18} height={16}  alt="Linkedon icon"/>
          </Button>
          </div>  
          <div style={HeaderImages}>
          <Button style={BtnStyle}>
            <img src="/assets/images/mail.png" width={18} height={16} alt="mail icon"/>
            </Button>
          </div>  
        
        </Row>
      </div>

      </Header>
      <Content style={contentStyle}>
        <HeaderComponent /> 
      </Content>
      {children}
      <Footer style={footer1}>
        <div>

        </div>
      </Footer>
      <Footer style={footerStyle}>
        <div>
      حقوق النشر 2023 تعود لـ شركة استثمار المستقبل المحدودة 〈وقف الأوقاف〉

        </div>
      </Footer>
    </Layout>
  </Space>
    )
}
export default LayoutComponent