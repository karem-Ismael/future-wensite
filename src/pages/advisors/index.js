import LayoutComponent from '../../Components/Layout';
import { Col, Rate, Row, Button, Carousel } from 'antd';
import styled from 'styled-components';
import CardComponent from '../../Components/Card';
import { FormGroup, Label, Placeholder } from "reactstrap";
import { Input } from 'antd';

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
import Select, { components } from "react-select";
const { TextArea } = Input;

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
    color:#005D5E
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
    color:#005D5E
}
`;
function Advisors({advisors }) {
    const screens = useBreakpoint();
    const router = useRouter()
  const dispatch=useDispatch()


  
    return (
        <LayoutComponent>
                 <BreedCrumb className='container'>
             
                        <PageTitleBar 
                            title={"الاستشارات"}
                            match={router.asPath}
                            enableBreadCrumb
                            content={"خبراء متخصصين ومستشارين متعاونين يملكون خلفيات علمية مهنية عالية ومنظورًا فريدًا اكتسبوه من خلال الخبرات الواسعة والمتراكمة"}
                            lastElement={"الاستشارات"}
                            
                        />
                 </BreedCrumb>
            <DIVContent className='container' style={{ padding: "0px" }}>
                <Row gutter={[16, 16]}>
                    <Col lg={16} md={14} sm={24} xs={24}>
                        <Row gutter={[16,16]}>
                            {
                                advisors.map((advisor)=>(
                                    <Col lg={12} md={12} sm={24} xs={24}
                                    >
                                        <CardComponent height={true}>
                                            <div className='d-flex justify-content-between'>
                                                <div className='w-50'>
                                                    <img src={ advisor.files.length ?  `https://estithmar.arabia-it.net${advisor?.files[0]?.path}`: "/assets/images/no-image.jpg"} width={175} height={175}/>
                                                </div>
                                                <div className='w-50 ' style={{alignSelf:"center"}}>
                                                    <p>
                                                    {advisor?.ar_name || advisor?.en_name}

                                                    </p>
                                                    <div className='w-100' style={{textAlign:"center"}}> 
                                            <Button className="w-100" onClick={() => router.push(`/advisors/${advisor.user_id}`)} style={{ width: "50%", background: "#005D5E", color: "#fff", border: "2px solid #005D5E", borderRadius: "0px" }} size={"large"}> التفاصيل</Button>

                                            </div>
                                                </div>
                                            </div>
                                            
                                                         
                                        </CardComponent>
                                    </Col>
                                ))
                            }
                           
                            

                        </Row>
                  
                       
                       
                       
                       
                    </Col>
                    <Col lg={8} md={10} sm={8} xs={24}>
                        <Col md={24} sm={24} xs={24}>
                            <CardComponent>
                                   <h3 style={{color:"#005D5E" ,borderBottom:"1px solid #ccc",padding:"10px 0px"}}>
                                   رشح لي مستشار
                                   </h3>
                                   <FormGroup>
              <Label for="exampleEmail">
              مجال الاستشارة
              </Label>
              <Select options={
                [
                  {
                    label:"البنك الاهلي ",
                    value:"AhlyBank"
                  }
                ]
                
              } 
            
             placeholder="اختر مجال"
              
              />
            </FormGroup>
            <TextArea rows={6} />

            <div className='w-100 mt-2 ' style={{textAlign:"center"}}> 
             <Button className="w-50" onClick={() => router.push(`/advisorDetails/1`)} style={{ width: "50%", background: "#D3B166", color: "#fff", border: "2px solid #D3B166", borderRadius: "0px" }} size={"large"}> ارسال</Button>

             </div>

                            </CardComponent>
                        </Col>
                    
                       
                    </Col>

                </Row>
             
            </DIVContent>

        </LayoutComponent>
    )
}
export default Advisors
export async function getServerSideProps(context) {
    const response = await fetch(`https://estithmar.arabia-it.net/api/advisor`)
    const data = await response.json()
   
    return {
        props: {
            advisors: data.data.data,
        }
    }
}