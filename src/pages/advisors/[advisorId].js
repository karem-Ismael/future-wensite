import LayoutComponent from '../../Components/Layout';
import { Col, Rate, Row, Select, Button, Carousel } from 'antd';
import styled from 'styled-components';
import CardComponent from '../../Components/Card';
import { Grid, Tag } from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styless from '@/styles/ServiceDetails.module.css'
import { Checkbox } from 'antd';
import { FacebookFilled, TwitterSquareFilled, LinkedinFilled } from "@ant-design/icons"
import Slider from "../../Components/Slider"
import { useRouter } from 'next/router'
import PageTitleBar from '@/Components/PageTitlebar';
import {AddBorders} from "../../store/orders/action"
import { useDispatch } from 'react-redux';
import CalenderComponent from '@/Components/CalenderComponent';
import AvailableAppointments from '@/Components/AvailableAppointments';
const { useBreakpoint } = Grid;

const selectStyle = {
    width: "220px"
}
const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
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
    color:#150941
}
`;
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
    color:#150941
}
`;
function AdvisorDetails({AdvisorDetailsRes }) {
    const screens = useBreakpoint();
    const [excutivetime, setExcutivetime] = useState()
    const [borderSelected,setBorderSelected]=useState([])
    const [filteredAppointments,setFilteredAppointments]=useState([])
    const router = useRouter()
  const dispatch=useDispatch()   
  console.log(AdvisorDetailsRes,"AdvisorDetailsRes")
    return (
        <LayoutComponent>
                 <BreedCrumb className='container'>
             
                        <PageTitleBar 
                            title={"الخدمات"}
                            match={router.asPath}
                            enableBreadCrumb
                            content={"تركز خدمات وحلول الأوقاف الخاصة بنا على مجموعة واسعة من احتياجات الوقف القانونية والإدارية والمالية."}
                            lastElement={AdvisorDetailsRes?.data?.ar_name}
                            
                        />
                 </BreedCrumb>
            <DIVContent className='container' style={{ padding: "0px" }}>
                <Row gutter={[16, 16]}>
                    <Col lg={16} md={14} sm={24} xs={24}>
                        <Col lg={24} md={24} sm={24} xs={24}>

                            <CardComponent>
                              
                                <Row gutter={[16,16]}>
                                    <Col md={24} sm={24} xs={24}>
                                        <Row >
                                            <Col md={8} sm={12} xs={24}>
                                                <img src={AdvisorDetailsRes?.data?.files?.length ? `https://estithmar.arabia-it.net${AdvisorDetailsRes?.data?.files[0]?.path}`: "/assets/images/no-image.jpg"} width={200} height={200} />
                                            </Col>
                                            <Col md={16} sm={12} xs={24} style={{ alignSelf: "start" }} >
                                            <h3 className={styless.title}>
                                            المعلومات الشـخصية
                                            </h3>
                                            <ul className={styless.list}>
                                            <li className={styless.listItem}>
                                       <img src={"/assets/images/ico-check.png"} width={20} height={20} />

                                       <span>
                                          الاسم :{AdvisorDetailsRes?.data?.ar_name}
                                       </span>
                                   </li> 
                                        
                                             <li className={styless.listItem}>
                                             <img src={"/assets/images/ico-check.png"} width={20} height={20} />
                                             
                                             <span>
                                             الإقامة: المملكة العربية السعودية 
                                             </span>
                                         </li> 
                                          <li className={styless.listItem}>
                                          <img src={"/assets/images/ico-check.png"} width={20} height={20} />

                                          <span>
                                          الجنسية: {AdvisorDetailsRes?.data?.nationality}

                                          </span>
                                      </li> 
                                     
                                        
                                      
                                    </ul>
                                            </Col>

                                        </Row>
                                        <Row>
                                        <Col md={24} sm={24} xs={24} style={{ alignSelf: "start" }} >
                                            <h3 className={styless.title}>
                                            الشهادات العلمية
                                            </h3>
                                            <ul className={styless.list}>
                                                {
                                                   AdvisorDetailsRes?.data?.meta &&  JSON.parse(AdvisorDetailsRes?.data?.meta)?.edu_certificates?.map((edu)=>(
                                                        <li key={edu} className={styless.listItem}>
                                                        <img src={"/assets/images/ico-check.png"} width={20} height={20} />
                 
                                                        <span>
                                                           {edu}
                                                        </span>
                                                    </li> 
                                                    ))
                                                }
                                         
                                        
                                            
                                        
                                     
                                        
                                      
                                    </ul>
                                            
                                        </Col>
                                        <Col md={24} sm={24} xs={24} style={{ alignSelf: "start" }} >
                                            <h3 className={styless.title}>
                                            المناصب الوظيفية
                                            </h3>
                                            <ul className={styless.list}>
                                                {
                                                   AdvisorDetailsRes?.data?.meta && JSON.parse(AdvisorDetailsRes?.data?.meta)?.work_positions?.map((position)=>(
                                                        <li key={position} className={styless.listItem}>
                                                        <img src={"/assets/images/ico-check.png"} width={20} height={20} />
                 
                                                        <span>
                                                            {position}
                                                        </span>
                                                    </li> 
                                                    ))
                                                }
                                         
                                        
                                            
                                        
                                     
                                        
                                      
                                    </ul>
                                        </Col>
                                        </Row>

                                    </Col>
                                  

                                </Row>
                            </CardComponent>
                        </Col>
                       
                       
                        <Col  lg={24} md={24} sm={24} xs={24}>

                            <CardComponent>
                                <h3 className={styless.title}>
                                    تقييم المستفيدين
                                </h3>
                                <Row>
                                    <Col className="rate" lg={15} md={15} sm={24} xs={24}>
                                        <Row>
                                            <Col lg={12} md={12} sm={24} xs={24}>
                                                <p className={styless.RateTitle}>
                                                    سرعة التجاوب
                                                </p>
                                            </Col>
                                            <Col lg={12} md={12} sm={24} xs={24}>
                                                <Rate allowHalf defaultValue={4} disabled />
                                            </Col>
                                            <Col lg={12} md={12} sm={24} xs={24}>
                                                <p className={styless.RateTitle}>
                                                    جودة الخدمات
                                                </p>
                                            </Col>
                                            <Col lg={12} md={12} sm={24} xs={24}>
                                                <Rate allowHalf defaultValue={4} disabled />
                                            </Col>
                                            <Col lg={12} md={12} sm={24} xs={24}>
                                                <p className={styless.RateTitle}>
                                                    السعر
                                                </p>
                                            </Col>
                                            <Col lg={12} md={12} sm={24} xs={24}>
                                                <Rate allowHalf defaultValue={4} disabled />
                                            </Col>
                                            <Col lg={12} md={12} sm={24} xs={24}>
                                                <p className={styless.RateTitle}>
                                                    مدى الاستفادة من الخدمة
                                                </p>

                                            </Col>
                                            <Col lg={12} md={12} sm={24} xs={24}>
                                                <Rate allowHalf defaultValue={4} disabled />
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col className='text-center' lg={8} md={8} sm={24} xs={24} style={{ alignSelf: "center" }}>
                                        <h4 style={{ color: "#150941" }}>
                                            اجمالي التقييم
                                        </h4>
                                        <Rate allowHalf defaultValue={4} disabled />


                                    </Col>
                                </Row>
                            </CardComponent>
                        </Col>
                        <Col md={24} sm={24} xs={24}>
                            <CardComponent>
                                <Row>
                                    <Col lg={12} md={12} sm={12} xs={12}>
                                        <h3 style={{ color: "#150941" }}>
                                            شارك الباقة
                                        </h3>
                                    </Col>
                                    <Col lg={12} md={12} sm={12} xs={12} style={{ textAlign: "left" }}>
                                        <FacebookFilled style={{ fontSize: "20px", color: "#1976D2" }} />
                                        <TwitterSquareFilled style={{ fontSize: "20px", color: "#0A93E2" }} />
                                        <LinkedinFilled style={{ color: "#0B86CA", fontSize: "20px" }} />
                                    </Col>
                                </Row>
                            </CardComponent>
                        </Col>
                    </Col>
                    <Col lg={8} md={10} sm={8} xs={24}>
                        <Col md={24} sm={24} xs={24}>
                            <CardComponent>
                            <h3 className={styless.title}>
                            تكلفة الاستشارة
                            </h3>
                            {
                                AdvisorDetailsRes?.data?.appointments[0]?.cost ? 
                                <div className='d-flex justify-content-between'>
                                <p className=' val' style={{fontSize:"30px"}}> 
                                                  {
                                                      AdvisorDetailsRes?.data?.appointments[0]?.cost
                                                  }
                                                  <sub className='currency'>
                                                      ر.س
      
                                                  </sub>
                                              </p>
                                              <p className='text-start' style={{alignSelf:"center"}}>
                                                  تكلفة الساعة                            
              
                                              </p>    
                                  </div>           :null
                            }
                                      
                            </CardComponent>
                        </Col>
                        
                        <Col md={24} sm={24} xs={24}>
                            <CardComponent>
                                <div>
                                    <h3 className={styless.title}>
                                    طلب استشارة
                                    </h3>
                                    <CalenderComponent setFilteredAppointments={setFilteredAppointments}  appointments={AdvisorDetailsRes?.data?.appointments}/>
                                    <AvailableAppointments filteredAppointments={filteredAppointments} />
                                  
                                </div>
                            </CardComponent>
                        </Col>
                    </Col>

                </Row>
            </DIVContent>

        </LayoutComponent>
    )
}
export default AdvisorDetails
export async function getServerSideProps(context) {
    const response = await fetch(`https://estithmar.arabia-it.net/api/advisor/${context.params.advisorId}`)
    const data = await response.json()
   
    return {
        props: {
            AdvisorDetailsRes: data,
        }
    }
}