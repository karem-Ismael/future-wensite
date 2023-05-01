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
function ServiceDetails({ services, ServicesDetails }) {
    const screens = useBreakpoint();
    const [clientServices, setClientServices] = useState(services)
    const [excutivetime, setExcutivetime] = useState()
    const router = useRouter()

    const onChange = (value) => {

        setField(value)
        axios.get("https://estithmar.arabia-it.net/api/service", {
            params: {
                field_id: value,
                executive_time_type: excutivetime ? excutivetime : undefined,

            }
        }).then((res) => {
            setClientServices(res.data)
        })

    };
    const onChangeTime = (value) => {
        setExcutivetime(value)
        axios.get("https://estithmar.arabia-it.net/api/service", {
            params: {
                field_id: field ? field : undefined,
                executive_time_type: value,
            }
        }).then((res) => {
            setClientServices(res.data)
        })
    }
    const onSearch = (value) => {
        console.log('search:', value);
    };
    const onChangeSlide = (currentSlide) => {
        console.log(currentSlide);
    };
    // useEffect(async()=>{
    //     if(field){
    //         // const response =await fetch("https://estithmar.arabia-it.net/api/service")
    //         // const data =await response.json()
    //         // setClientServices(data)
    //     }
    // },[field])
    // useEffect(async()=>{
    //     console.log("karem")
    //     const serviceres =await fetch("https://estithmar.arabia-it.net/api/service")
    //     const data =await serviceres.json()
    //     setClientServices(data)
    // },[field])
    return (
        <LayoutComponent>
            <DIVContent className='container' style={{ padding: "0px" }}>
                <Row gutter={[16, 16]}>
                    <Col lg={16} md={14} sm={24} xs={24}>
                        <Col lg={24} md={24} sm={24} xs={24}>

                            <CardComponent>
                                <h3 className={styless.title}>
                                    بناء السياسات والإجراءات للإدارة المالية
                                </h3>
                                <Row>
                                    <Col md={16} sm={12} xs={24}>
                                        <Row >
                                            <Col md={5} sm={12} xs={24}>
                                                <img src="/assets/images/logo-com.png" width={100} height={100} />
                                            </Col>
                                            <Col md={16} sm={12} xs={24} style={{ alignSelf: "center" }} >
                                                <p style={{ color: "#005D5E" }}>
                                                    مقدم الخدمة :
                                                </p>
                                                <p className={styless.cadrTitle}>
                                                    مجموعة ألفا للاستشارات المهنية
                                                </p>
                                            </Col>

                                        </Row>

                                    </Col>
                                    <Col md={8} sm={12} xs={24} style={{ alignSelf: "center" }}>
                                        <ul>
                                            <li>
                                                <span style={{ color: "#005D5E" }}>
                                                    تصنيف الخدمة :
                                                </span>
                                                <span style={{ color: "#707070" }}>
                                                    خدمات محاسبية

                                                </span>
                                            </li>
                                            <li>
                                                <span style={{ color: "#005D5E" }}>
                                                    مدة الخدمة :
                                                </span>
                                                <span style={{ color: "#707070" }}>
                                                    30 يوم

                                                </span>
                                            </li>
                                        </ul>
                                    </Col>

                                </Row>
                            </CardComponent>
                        </Col>
                        <Col lg={24} md={24} sm={24} xs={24}>

                            <CardComponent>
                                <div>
                                    <h3 className={styless.title}>
                                        وصف الخدمة
                                    </h3>
                                    <p className={styless.description}>
                                        إعداد الإجراءات والأدلة واللوائح المالية والمتعلقة بالعمليات المحاسبية والمالية للعميل
                                    </p>
                                </div>
                                <div>
                                    <h3 className={styless.title}>
                                        خطوات التنفيذ
                                    </h3>
                                    <ul className={styless.list}>
                                        <li className={styless.listItem}>
                                            <img src={"/assets/images/ico-check.png"} width={20} height={20} />

                                            <span>
                                                إنشاء اللائحة المالية للعميل
                                            </span>
                                        </li>
                                        <li className={styless.listItem}>
                                            <img src={"/assets/images/ico-check.png"} width={20} height={20} />

                                            <span>
                                                إنشاء اللائحة المالية للعميل
                                            </span>
                                        </li>
                                        <li className={styless.listItem}>
                                            <img src={"/assets/images/ico-check.png"} width={20} height={20} />

                                            <span>
                                                إنشاء اللائحة المالية للعميل
                                            </span>
                                        </li>
                                        <li className={styless.listItem}>
                                            <img src={"/assets/images/ico-check.png"} width={20} height={20} />

                                            <span>
                                                إنشاء اللائحة المالية للعميل
                                            </span>
                                        </li>
                                        <li className={styless.listItem}>
                                            <img src={"/assets/images/ico-check.png"} width={20} height={20} />

                                            <span>
                                                إنشاء اللائحة المالية للعميل
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className={styless.title}>
                                        خطوات التنفيذ
                                    </h3>
                                    <ul className={styless.list}>
                                        <li className={styless.listItem}>
                                            <img src={"/assets/images/ico-check.png"} width={20} height={20} />

                                            <span>
                                                إنشاء اللائحة المالية للعميل
                                            </span>
                                        </li>
                                        <li className={styless.listItem}>
                                            <img src={"/assets/images/ico-check.png"} width={20} height={20} />

                                            <span>
                                                إنشاء اللائحة المالية للعميل
                                            </span>
                                        </li>
                                        <li className={styless.listItem}>
                                            <img src={"/assets/images/ico-check.png"} width={20} height={20} />

                                            <span>
                                                إنشاء اللائحة المالية للعميل
                                            </span>
                                        </li>
                                        <li className={styless.listItem}>
                                            <img src={"/assets/images/ico-check.png"} width={20} height={20} />

                                            <span>
                                                إنشاء اللائحة المالية للعميل
                                            </span>
                                        </li>
                                        <li className={styless.listItem}>
                                            <img src={"/assets/images/ico-check.png"} width={20} height={20} />

                                            <span>
                                                إنشاء اللائحة المالية للعميل
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </CardComponent>
                        </Col>

                        <Col lg={24} md={24} sm={24} xs={24}>

                            <CardComponent>
                                <div>
                                    <h3 className={styless.title}>
                                        حدود النطاق
                                    </h3>
                                    <Row gutter={[50, 20]} className={styless.title}>
                                        <Col lg={12} md={12} sm={24} xs={24}>
                                            الأمور التي خارج النطاق

                                        </Col>
                                        <Col lg={12} md={12} sm={24} xs={24}>
                                            تكلفة الملحقات
                                        </Col>
                                    </Row>
                                    <div className='d-flex'>
                                        <Checkbox onChange={onChange}></Checkbox>
                                        <div>
                                            <p>
                                                وضع النماذج المالية والمحاسبية

                                            </p>
                                            <p>
                                                ا 326 ر.س
                                            </p>
                                        </div>

                                    </div>
                                </div>

                            </CardComponent>
                        </Col>
                        <Col lg={24} md={24} sm={24} xs={24}>

                            <CardComponent>
                                <h3 className={styless.title}>
                                    تقييم المستفيدين
                                </h3>
                                <Row>
                                    <Col lg={16} md={16} sm={24} xs={24}>
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
                                        <h4 style={{ color: "#005D5E" }}>
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
                                    <Col lg={12} md={12} sm={24} xs={24}>
                                        <h3 style={{ color: "#005D5E" }}>
                                            شارك الباقة
                                        </h3>
                                    </Col>
                                    <Col lg={12} md={12} sm={24} xs={24} style={{ textAlign: "left" }}>
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
                                <Row gutter={[16, 16]} justify="center" align="middle" style={{ padding: "10px 0px", borderBottom: "1px solid #ccc" }}>
                                    <Col md={12} sm={24} xs={24} style={{ borderLeft: "1px dashed #9C9C9C" }}>
                                        <h5 className={`text-center heading`}>
                                            نسبة دعم الخدمة
                                        </h5>
                                        <p className='text-center val' style={{fontSize:"30px"}}>
                                            50%
                                        </p>
                                    </Col>
                                    <Col md={12} sm={24} xs={24}>
                                        <h5 className='text-center heading'>
                                            مقدار دعم الخدمة
                                        </h5>
                                        <p className='text-center val' style={{fontSize:"30px"}}>
                                            453
                                            <sub className='currency'>
                                                ر.س

                                            </sub>
                                        </p>
                                    </Col>
                                </Row>
                                <Row gutter={[16, 16]} justify="center" align="middle" style={{ padding: "30px 0px", borderBottom: "1px dashed #D3B166" }}>
                                    <Col md={12} sm={24} xs={24}>
                                        <h3 className='text-center heading' >
                                            تكلفة الخدمة
                                        </h3>
                                        <p className='text-center val' style={{fontSize:"30px"}}> 
                                            ا453
                                            <sub className='currency'>
                                                ر.س

                                            </sub>
                                        </p>
                                    </Col>
                                    <Col md={12} sm={24} xs={24}>
                                        <h6 className='text-center heading'>
                                            الملحقات
                                        </h6>
                                        <p className='text-center val' style={{fontSize:"30px"}}>
                                            ا453
                                            <sub className='currency'>
                                                ر.س

                                            </sub>
                                        </p>
                                    </Col>
                                </Row>
                                <Row gutter={[16, 16]} justify="center" align="middle" style={{ padding: "30px 0px", borderBottom: "1px dashed #D3B166" }}>
                                    <Col md={24} sm={24} xs={24}>
                                        <h3 className='text-center heading'>
                                            إجمالي التكاليف
                                        </h3>
                                        <p className='text-center val' style={{fontSize:"35px", marginBottom:"70px"}}>
                                            453
                                            <sub className='currency'>
                                                ر.س

                                            </sub>
                                        </p>
                                        <div className="btn-details">
                                            <Button onClick={() => router.push(`/services`)} style={{ width: "50%", background: "#005D5E", color: "#fff", border: "none", borderRadius: "0px" }} size={"large"}>طلب الخدمة</Button>

                                        </div>
                                        <div className="btn-details">
                                            <Button onClick={() => router.push(`/services`)} style={{ width: "50%", background: "#fff", color: "#005D5E", border: "2px solid #005D5E", borderRadius: "0px" }} size={"large"}>دعم الخدمة</Button>

                                        </div>
                                    </Col>

                                </Row>
                            </CardComponent>
                        </Col>
                        <Col md={24} sm={24} xs={24}>
                            <CardComponent>
                                <div>
                                    <h3 className={styless.title}>
                                        مدة التنفيذ
                                    </h3>
                                    <ul className={styless.list}>
                                        <li className={styless.listItem}>
                                            <img src={"/assets/images/ico-check.png"} width={20} height={20} />


                                            <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
                                                <span>
                                                    تسليم المسودة الأولى
                                                </span>
                                                <span style={{ color: "#005D5E" }}>
                                                    10 يوم

                                                </span>
                                            </div>
                                        </li>
                                        <li className={styless.listItem}>
                                            <img src={"/assets/images/ico-check.png"} width={20} height={20} />

                                            <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
                                                <span>
                                                    مراجعة التسليم
                                                </span>
                                                <span style={{ color: "#005D5E" }}>
                                                    10 يوم

                                                </span>
                                            </div>
                                        </li>
                                        <li className={styless.listItem}>
                                            <img src={"/assets/images/ico-check.png"} width={20} height={20} />
                                            <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
                                                <span>
                                                    تسليم المنتج النهائي
                                                </span>
                                                <span style={{ color: "#005D5E" }}>
                                                    10 يوم

                                                </span>
                                            </div>

                                        </li>
                                        <li className={styless.listItem}>
                                            <img src={"/assets/images/ico-check.png"} width={20} height={20} />
                                            <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
                                                <span>
                                                    مدة التنفيذ المتوقعة
                                                </span>
                                                <span style={{ color: "#005D5E" }}>
                                                    10 يوم
                                                </span>
                                            </div>

                                        </li>



                                    </ul>
                                </div>
                            </CardComponent>
                        </Col>
                        <Col md={24} sm={24} xs={24}>
                            <CardComponent>
                                <div>
                                    <h3 className={styless.title}>
                                        متطلبات الاشتراك
                                    </h3>
                                    <ul className={styless.list}>
                                        <li className={styless.listItem}>
                                            <img src={"/assets/images/ico-check.png"} width={20} height={20} />

                                            <span>
                                                صك الوقفية.
                                            </span>
                                        </li>
                                        <li className={styless.listItem}>
                                            <img src={"/assets/images/ico-check.png"} width={20} height={20} />

                                            <span>
                                                شهادة التسجيل في ضريبة القيمة المضافة – إن كان مسجلاً .
                                            </span>
                                        </li>
                                        <li className={styless.listItem}>
                                            <img src={"/assets/images/ico-check.png"} width={20} height={20} />

                                            <span>
                                                الترخيص من وزارة الموارد البشرية والشؤون الاجتماعية – إن كان ينطبق -.
                                            </span>
                                        </li>
                                        <li className={styless.listItem}>
                                            <img src={"/assets/images/ico-check.png"} width={20} height={20} />

                                            <span>
                                                السجل التجاري – إن كان ينطبق
                                            </span>
                                        </li>
                                        <li className={styless.listItem}>
                                            <img src={"/assets/images/ico-check.png"} width={20} height={20} />

                                            <span>
                                                عقد التأسيس.
                                            </span>
                                        </li>
                                        <li className={styless.listItem}>
                                            <img src={"/assets/images/ico-check.png"} width={20} height={20} />

                                            <span>
                                                شرح لنشاطه الرئيسي ولأي مصادر إيرادات أخرى، مكتوبة بالتفصيل أو من خلال عقد اجتماع.
                                            </span>
                                        </li>
                                        <li className={styless.listItem}>
                                            <img src={"/assets/images/ico-check.png"} width={20} height={20} />

                                            <span>
                                                اللوائح والسياسات والإجراءات المعتمدة الحالية – إن وجدت-.
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </CardComponent>
                        </Col>
                    </Col>

                </Row>
                <div style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
                    <h3 style={{ width: "20%", maxWidth: "20%", color: "#005D5E", fontSize: "30px" }}>
                        خدمات ذات صلة
                    </h3>
                    <hr style={{ width: "80%", height: "0px", border: " 1px solid #D3B166", alignSelf: "center" }} />
                </div>
                <Row gutter={[16, 16]}>
                    {
                        clientServices?.data?.data.map((oneservice) => (
                            <Col key={oneservice.id} md={24} sm={24} xs={24}>

                                {/* <CardComponent>
                                    <span className='discount'>
                                        {oneservice.support_ratio} % <br />
                                        دعم
                                    </span>
                                    <p className='card-title'>
                                        {oneservice.service_provider.company_name_ar}
                                    </p>
                                    <h2 className='service-title'>
                                        {oneservice.title}
                                    </h2>
                                    <p className='service-description'>
                                        {oneservice.description}
                                    </p>
                                    <hr />
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
                                    <div className="btn-details">
                                        <Button onClick={() => router.push(`/services/${oneservice.id}`)} style={{ width: "50%", background: "#005D5E", color: "#fff", border: "none", borderRadius: "0px" }} size={"large"}>التفاصيل</Button>
                                    </div>
                                </CardComponent> */}
                            </Col>
                        ))
                    }
                </Row>
                <div>
                    <Slider clientServices={clientServices} />
                </div>
            </DIVContent>

        </LayoutComponent>
    )
}
export default ServiceDetails
export async function getServerSideProps(context) {
    console.log(context, "oneservice")
    const response = await fetch(`https://estithmar.arabia-it.net/api/service/${context.params.id}`)
    const data = await response.json()
    const response1 = await fetch(`https://estithmar.arabia-it.net/api/service?service_provider_id=${context.query.service_provider}`)
    const data1 = await response1.json()
    return {
        props: {
            services: data1,
            ServicesDetails: data,
        }
    }
}