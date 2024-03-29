import LayoutComponent from '../../Components/Layout';
import { Col, Rate, Row,Select,Button  } from 'antd';
import styled from 'styled-components';
import CardComponent from '../../Components/Card';
import { Grid, Tag } from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'
import PageTitleBar from '@/Components/PageTitlebar';
import { Pagination } from 'antd';

const { useBreakpoint } = Grid;

const selectStyle={
    width:"220px"
}
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
function Services({services,fields}) {
    const screens = useBreakpoint();
    const [clientServices,setClientServices]=useState(services)
    const [field,setField]=useState()
    const [excutivetime,setExcutivetime]=useState()
    const router = useRouter()
console.log(clientServices,"clientServices")
    const onChange = (value) => {
        
        setField(value)
        axios.get("https://estithmar.arabia-it.net/api/service",{
            params:{
                field_id:value,
                executive_time_type:excutivetime ? excutivetime :undefined,

            }
        }).then((res)=>{
            setClientServices(res.data)
        })
        
    };
    const onChangeTime=(value)=>{
        setExcutivetime(value)
        axios.get("https://estithmar.arabia-it.net/api/service",{
            params:{
                field_id:field ? field :undefined,
                executive_time_type:value,
            }
        }).then((res)=>{
            setClientServices(res.data)
        })
    }
    const onSearch = (value) => {
        console.log('search:', value);
    };
 const  handelPageClick=async(page)=>{
    const response =await fetch(`https://estithmar.arabia-it.net/api/service?page=${page}`)
    const data =await response.json()
    setClientServices(data)
 }
    return (
        <LayoutComponent>
             <BreedCrumb className='container'>
             
             <PageTitleBar 
                 title={"الخدمات"}
                 match={router.asPath}
                 enableBreadCrumb
                 content={"تركز خدمات وحلول الأوقاف الخاصة بنا على مجموعة واسعة من احتياجات الوقف القانونية والإدارية والمالية."}
             />
                 </BreedCrumb>
            <DIVContent className='container' style={{padding:"0px"}}>
                <Row>
                    <Col md={24} sm={24} xs={24}>
                        <CardComponent color={"#150941"} >
                            <Row gutter={[16,16]}>
                                <Col md={6} sm={12}>
                                    <Row className='select-content'>
                                        <span className='select-title'>التصنيف</span>
                                        <Select
                                        size='large'
                                        style={selectStyle}
                                            showSearch
                                            placeholder="عرض الكل"
                                            optionFilterProp="children"
                                            onChange={onChange}
                                            onSearch={onSearch}
                                            filterOption={(input, option) =>
                                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                            }
                                            
                                            options={
                                                fields.data.data.map((field)=>{
                                                    return({
                                                        value:field.id,
                                                        label:field.name
                                                    })
                                                })
                                            }
                                        />
                                    </Row>
                                </Col>

                                <Col md={6} sm={12}>
                                    <Row className='select-content'>
                                        <span className='select-title'>مقدار الدعم</span>
                                        <Select
                                        size='large'
                                        style={selectStyle}
                                            showSearch
                                            placeholder="عرض الكل"
                                            optionFilterProp="children"
                                            onChange={onChange}
                                            onSearch={onSearch}
                                            filterOption={(input, option) =>
                                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                            }
                                            options={[]}/>
                                    </Row>
                                </Col>


                                <Col md={6} sm={12}>
                                    <Row className='select-content'>
                                        <span className='select-title'>مدة التنفيذ</span>
                                        <Select
                                        size='large'
                                        style={selectStyle}
                                            showSearch
                                            placeholder="عرض الكل"
                                            optionFilterProp="children"
                                            onChange={onChangeTime}
                                            onSearch={onSearch}
                                            filterOption={(input, option) =>
                                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                            }
                                            options={[
                                                {
                                                    label:"يوم",
                                                    value:"day"
                                                },
                                                {
                                                    label:"شهر",
                                                    value:"month"
                                                },
                                                {
                                                    label:"سنة",
                                                    value:"year"
                                                }
                                            ]}
                                        />
                                    </Row>
                                </Col>

                                <Col md={6} sm={12}>
                                    <Row className='select-content'>
                                        <span className='select-title'>التكلفة</span>
                                        <Select
                                        size='large'
                                        style={selectStyle}
                                            showSearch
                                            placeholder="عرض الكل"
                                            optionFilterProp="children"
                                            onChange={onChange}
                                            onSearch={onSearch}
                                            filterOption={(input, option) =>
                                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                            }
                                            options={[
                                               
                                            ]}
                                        />
                                    </Row>
                                </Col>
                              
                                
                            </Row>
                        </CardComponent>
                    </Col>
                </Row>
                <Row  gutter={[16, 16]} className="mt-3">
                    {
                        clientServices?.data?.data.map((oneservice)=>(
                            <Col key={oneservice.id} md={8} sm={12} xs={24} style={{position:"relative"}}>
                            <CardComponent>
                                                <span className='discount'>
                                                {oneservice.support_ratio} % <br/>
                                                دعم
                                                </span>
                                                <p className='card-title'>
                                                    {oneservice.service_provider.company_name_ar}
                                                </p>
                                                <h3 className='service-title'>
                                                 {oneservice.title}
                                                </h3>
                                                <p className='service-description'>
                                                    {oneservice.description}
                                                </p>
                                                <hr/>
                                                <li className='item'>
                                                <span className='list-title'>
                                                التصنيف :     
                                                </span>
                                                <span className='list-value'>
                                                {oneservice.field.name}
                                                </span>
                                                </li>
                                                <li className='item'>
                                                    <span className='list-title'>
                                                    التكلفة :
                                                    </span>
                                                    <span className='list-value'>
                                                     حسب طلب الوقف
                                                    </span>
                                                </li>
                                                <li className='item'>
                                                    <span className='list-title'>
                                                    مدة التنفيذ :
                                                    </span>
                                                    <span className='list-value'>
                                                     {oneservice.executive_time}{oneservice.executive_time_type} 
                                                    </span>
                                                </li>
                                                <div className='rate' >
                                                <Rate allowHalf defaultValue={2.5} disabled />
                                                </div>
                                                <div className="btn-details" style={{position:"absolute",bottom:"0px",width:"100%",marginBottom:"10px"}}>
                                                <Button   onClick={()=>router.push(`/services/${oneservice.id}?service_provider=${oneservice.service_provider.user_id}`)} style={{width:"50%" ,background:"#150941",color:"#fff",border:"none",borderRadius:"0px"}}size={"large"}>التفاصيل</Button>
                                                </div>
                            </CardComponent>
                        </Col>
                        ))
                    }
                </Row>
                <Row align={"middle"} className='mt-5'>
                <Pagination current={clientServices.data.current_page} pageSize={15} total={clientServices.data.total} 
                
                onChange={(page)=>handelPageClick(page)}
                />

                </Row>
            </DIVContent>

        </LayoutComponent>
    )
}
export default Services
export async function getServerSideProps(){
    const response =await fetch("https://estithmar.arabia-it.net/api/service")
    const data =await response.json()
    const response2=await fetch("https://estithmar.arabia-it.net/api/admin/service-provider-fields")
    const data2=await response2.json()
    return{
        props:{
            services:data,
            fields:data2
        }
    }
}