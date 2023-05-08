import LayoutComponent from '../../Components/Layout';
import { Col, Rate, Row, Select, Button, Carousel } from 'antd';
import styled from 'styled-components';
import CardComponent from '../../Components/Card';
import { Grid, Tag } from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styless from '@/styles/ServiceDetails.module.css'
import orders from "@/styles/serviceorder.module.css"
import { Checkbox } from 'antd';
import { CheckOutlined,CloseOutlined  } from "@ant-design/icons"
import Slider from "../../Components/Slider"
import { useRouter } from 'next/router'
import { Table } from 'reactstrap';

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
function ServiceOrder({ ServicesDetails }) {
    const screens = useBreakpoint();
    const [excutivetime, setExcutivetime] = useState()
    const [borderSelected, setBorderSelected] = useState([])
    const router = useRouter()
    console.log(ServicesDetails, "ServicesDetails")
    const onChange = (e, borderItem) => {

        if (e.target.checked) {
            const existborder = borderSelected.filter(border => border.price == borderItem.price)
            if (existborder.length) {
                return
            } else {
                setBorderSelected([...borderSelected, borderItem])

            }
        } else {
            const AllbordersSelected = borderSelected.filter(borderitem => borderitem.price != borderItem.price)
            setBorderSelected([...AllbordersSelected])
        }

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
    function sumArray(array) {
        const ourArray = [1, 4, 0, 9, -3];
        let sum = 0;

        for (let i = 0; i < borderSelected.length; i += 1) {
            sum += +borderSelected[i].price;
        }

        return sum;
    }
    return (
        <LayoutComponent>
            <DIVContent className='container' style={{ padding: "0px" }}>
                <Row gutter={[16, 16]}>
                    <Col lg={16} md={14} sm={24} xs={24}>
                        <Col lg={24} md={24} sm={24} xs={24}>

                            <CardComponent>
                                <h3 className={styless.title}>
                                    {
                                        ServicesDetails.data.title
                                    }
                                </h3>
                                <Row>

                                    <Table>
                                        <thead>
                                            <tr>

                                                <th>
                                                    مقدم الخدمة
                                                </th>
                                                <th>
                                                    تصنيف الخدمة
                                                </th>
                                                <th>
                                                    مدة الخدمة
                                                </th>
                                                <th>
                                                    اجمالي التكلفة
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>

                                                <td>
                                                    مجموعة ألفا للاستشارات المهنية
                                                </td>
                                                <td>
                                                    خدمات محاسبية
                                                </td>
                                                <td>
                                                    30 يوم
                                                </td>
                                                <td>
                                                    ا703 ر.س
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Row>
                            </CardComponent>
                        </Col>
                        <Col lg={24} md={24} sm={24} xs={24}>

                            <CardComponent>
                                <div>
                                    <h3 className={styless.title}>
                                        متطلبات الاشتراك
                                    </h3>
                                </div>
                                <ul className={styless.list}>
                                    <li className={orders.listItemActive} style={{marginTop:"10px"}}>
                                        <CheckOutlined style={{marginRight:"8px",alignSelf:"center"}} />
                                        <span>
                                            صك الوقفية
                                        </span>
                                    </li>
                                    <li className={orders.listItem} style={{marginTop:"10px"}}>
                                        <CloseOutlined style={{marginRight:"8px",alignSelf:"center"}} />
                                        <span>
                                        عقد التأسيس
                                        </span>
                                    </li>
                                </ul>
                            </CardComponent>
                            <CardComponent>
                                <div>
                                    <p className={styless.title}>
                                    رصيد محفظتك الحالي
                                    <span className='text-center val' style={{margin:"10px"}}>
                                            1000
                                            <sub className='currency'>
                                                ر.س

                                            </sub>
                                        </span>
                                    يكفي لاتمام الطلب
                                    </p>
                                </div>
                                <div className='text-center'>
                                <Button  style={{ width: "50%", maxWidth:"200px", background: "#005D5E", color: "#fff", border: "none", borderRadius: "0px" }} size={"large"}>طلب الخدمة</Button>

                                </div>
                              
                            </CardComponent>
                        </Col>
                    </Col>
                    <Col lg={8} md={10} sm={8} xs={24}>
                        <Col md={24} sm={24} xs={24}>
                            <CardComponent>
                                <Row gutter={[16, 16]} justify="center" align="middle" style={{ padding: "10px 0px", borderBottom: "1px solid #ccc" }}>
                                    <Col md={24} sm={24} xs={24}>
                                    <ul className={styless.list}>
                                        {

                                            JSON.parse(ServicesDetails?.data?.stages_of_delivery)?.map((delivery) => (
                                                <li className={styless.listItem}>

                                                    <div style={{ display: "flex", width: "100%" ,gap:"30px" }}>
                                                    <p className='text-center val' style={{ fontSize: "20px",margin:"0px" }}>
                                            453
                                            <sub className='currency'>
                                                ر.س

                                            </sub>
                                        </p>
                                                        <p style={{ color: "#005D5E",fontSize:"20px",margin:"0px" }}>
                                                        تكلفة الخدمة
                                                        </p>
                                                    </div>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    </Col>
                                   
                                </Row>
                                <Row gutter={[16, 16]} justify="center" align="middle" style={{  borderBottom: "1px dashed #D3B166" }}>
                                <Col md={24} sm={24} xs={24}>
                                    <ul className={styless.list}>
                                        {

                                            JSON.parse(ServicesDetails?.data?.stages_of_delivery)?.map((delivery) => (
                                                <li className={styless.listItem}>

                                                    <div style={{ display: "flex", width: "100%" ,gap:"30px" }}>
                                                    <p className='text-center val' style={{ fontSize: "20px",margin:"0px" }}>
                                            453
                                            <sub className='currency'>
                                                ر.س

                                            </sub>
                                        </p>
                                                        <p style={{ color: "#005D5E",fontSize:"20px",margin:"0px" }}>
                                                        تكلفة الخدمة بعد الخصم

                                                        </p>
                                                    </div>
                                                </li>
                                            ))
                                        }
                                        {
                                             JSON.parse(ServicesDetails?.data?.stages_of_delivery)?.map((delivery) => (
                                                <li className={styless.listItem}>

                                                    <div style={{ display: "flex", width: "100%" ,gap:"30px" }}>
                                                    <p className='text-center val' style={{ fontSize: "20px",margin:"0px" }}>
                                            453
                                            <sub className='currency'>
                                                ر.س

                                            </sub>
                                        </p>
                                                        <p style={{ color: "#005D5E",fontSize:"20px",margin:"0px" }}>
                                                        الملحقات
                                                        </p>
                                                    </div>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    </Col>
                                    
                                </Row>
                                <Row gutter={[16, 16]} justify="center" align="middle" style={{ padding: "30px 0px" }}>
                                    <Col md={24} sm={24} xs={24} style={{ paddinTop: "23px" }}>
                                        <h3 className='text-center heading'>
                                            المبلغ الإجمالي
                                        </h3>
                                        <p className='text-center val' style={{ fontSize: "35px" }}>
                                            453
                                            <sub className='currency'>
                                                ر.س

                                            </sub>
                                        </p>
                                        <div className='text-center' style={{color:"#005D5E"}}>
                                            التكاليف شاملة الضريبة
                                        </div>

                                    </Col>

                                </Row>
                            </CardComponent>
                        </Col>
                       
                       
                    </Col>
                </Row>
                <div>
                </div>
            </DIVContent>

        </LayoutComponent>
    )
}
export default ServiceOrder
export async function getServerSideProps(context) {
    console.log(context, "context")
    const response = await fetch(`https://estithmar.arabia-it.net/api/service/${context?.query?.id}`)
    const data = await response.json()

    return {
        props: {
            ServicesDetails: data,
        }
    }
}