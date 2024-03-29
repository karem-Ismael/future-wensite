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
function OrderDetails({ services, ServicesDetails }) {
    const screens = useBreakpoint();
    const [clientServices, setClientServices] = useState(services)
    const [excutivetime, setExcutivetime] = useState()
    const [borderSelected,setBorderSelected]=useState([])
    const router = useRouter()
  const dispatch=useDispatch()

    const [calculations,setCalculations]=useState()
    const onChange = async(e,borderItem) => {
        
        if(e.target.checked){
            const existborder=borderSelected.filter(border=>border.title  == borderItem.title)
            if(existborder.length){
                return
            }else{
                const allborder=[...borderSelected,borderItem].map((border)=>border.title)
                // const response = await fetch(`https://estithmar.arabia-it.net/api/service/${router.query.id}?calc=true&extra=${[allborder]}`)
                // const data = await response.json()
                axios.get(`https://estithmar.arabia-it.net/api/service/${router.query.id}`,{
                    params:{
                        calc:true,
                        extra:allborder,
                    }
                }).then(res=>setCalculations(res.data.data))
                setBorderSelected([...borderSelected,borderItem])
            }
        }else{
            const AllbordersSelected = borderSelected.filter(borderitem=>borderitem.price != borderItem.price)
            const allborderList=borderSelected.filter(borderitem=>borderitem.title != borderItem.title).map((border)=>border.title)
            axios.get(`https://estithmar.arabia-it.net/api/service/${router.query.id}`,{
                params:{
                    calc:true,
                    extra:allborderList,
                }
            }).then(res=>setCalculations(res.data.data))
          
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
                 <BreedCrumb className='container'>
             
                        <PageTitleBar 
                            title={"الخدمات"}
                            match={router.asPath}
                            enableBreadCrumb
                            content={"تركز خدمات وحلول الأوقاف الخاصة بنا على مجموعة واسعة من احتياجات الوقف القانونية والإدارية والمالية."}
                            lastElement={ServicesDetails?.data.title}
                            
                        />
                 </BreedCrumb>
            <DIVContent className='container' style={{ padding: "0px" }}>
                <Row gutter={[16, 16]}>
                    <Col lg={16} md={14} sm={24} xs={24}>
                        <Col lg={24} md={24} sm={24} xs={24}>

                            <CardComponent>
                                <h3 className={styless.title}>
                                    {
                                        ServicesDetails?.data.title
                                    }
                                </h3>
                                <Row>
                                    <Col md={16} sm={12} xs={24}>
                                        <Row >
                                            <Col md={5} sm={12} xs={24}>
                                                <img src="/assets/images/logo-com.png" width={100} height={100} />
                                            </Col>
                                            <Col md={16} sm={12} xs={24} style={{ alignSelf: "center" }} >
                                                <p style={{ color: "#150941" }}>
                                                    مقدم الخدمة :
                                                </p>
                                                <p className={styless.cadrTitle}>
                                                    {
                                                        ServicesDetails?.data?.service_provider?.company_name_ar
                                                    }
                                                </p>
                                            </Col>

                                        </Row>

                                    </Col>
                                    <Col md={8} sm={12} xs={24} style={{ alignSelf: "center" }}>
                                        <ul>
                                            <li>
                                                <span style={{ color: "#150941" }}>
                                                    تصنيف الخدمة :
                                                </span>
                                                <span style={{ color: "#707070" }}>
                                                     
                                                    {
                                                         ServicesDetails?.data?.field?.name
                                                    }
                                                </span>
                                            </li>
                                            <li>
                                                <span style={{ color: "#150941" }}>
                                                    مدة الخدمة :
                                                </span>
                                                <span style={{ color: "#707070" }}>
                                                    {ServicesDetails?.data?.executive_time} {ServicesDetails?.data?.executive_time_type =="day" ? "يوم" :ServicesDetails?.data?.executive_time_type =="month" ? "شهر" : "سنة"  }

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
                                    {
                                        ServicesDetails?.data?.description
                                        
                                    }
                                    </p>
                                </div>
                                <div>
                                    <h3 className={styless.title}>
                                        خطوات التنفيذ
                                    </h3>
                                    <ul className={styless.list}>
                                        {
                                            JSON.parse(ServicesDetails?.data?.executive_steps)?.map((step)=>(
                                                <li key={step} className={styless.listItem}>
                                                <img src={"/assets/images/ico-check.png"} width={20} height={20} />
    
                                                <span>
                                                    {step}
                                                </span>
                                            </li> 
                                            ))
                                        }
                                    </ul>
                                </div>
                                <div>
                                    <h3 className={styless.title}>
                                    مخرجات الخدمة/ مواصفات التسليمات
                                    </h3>
                                    <ul className={styless.list}>
                                    {
                                            JSON.parse(ServicesDetails?.data?.executive_result)?.map((result)=>(
                                                <li key={result} className={styless.listItem}>
                                                <img src={"/assets/images/ico-check.png"} width={20} height={20} />
    
                                                <span>
                                                    {result}
                                                </span>
                                            </li> 
                                            ))
                                        }
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
                                            <span>
                                            تكلفة الملحقات
                                            </span>
                                            <span className='text-center val' style={{fontSize:"30px"}}>
                                            {
                                                sumArray(borderSelected)
                                            }
                                            <sub className='currency'>
                                                ر.س

                                            </sub>
                                        </span>
                                        </Col>
                                    </Row>
                                    {       
                                              JSON.parse(ServicesDetails?.data?.service_border)?.map((border,index)=>(
                                                      <div className='d-flex'>
                                        <Checkbox onChange={(e)=>onChange(e,border)}></Checkbox>
                                        <div>
                                            <p className='m-0'>  
                                            {border.title}
                                            </p>
                                            <p className='m-0'>
                                                {border.price} {"ر.س"}
                                            </p>
                                        </div>

                                    </div>
                                              ))      
                                      }
                                </div>

                            </CardComponent>
                        </Col>
                        <Col  lg={24} md={24} sm={24} xs={24}>

                            <CardComponent>
                                <h3 className={styless.title}>
                                    تقييم المستفيدين
                                </h3>
                                <Row>
                                    <Col className="rate" lg={16} md={16} sm={24} xs={24}>
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
                                {/* <Row gutter={[16, 16]} justify="center" align="middle" style={{ padding: "10px 0px", borderBottom: "1px solid #ccc" }}>
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
                                </Row> */}
                                <Row gutter={[16, 16]} justify="center" align="middle" style={{ padding: "50px 0px", borderBottom: "1px dashed #D3B166" }}>
                                    <Col md={12} sm={24} xs={24}>
                                        <h3 className='text-center heading' >
                                            تكلفة الخدمة
                                        </h3>
                                        <p className='text-center val' style={{fontSize:"30px"}}> 
                                            {
                                               borderSelected.length ?  calculations?.cost : ServicesDetails.data.cost
                                             }
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
                                            {
                                                sumArray(calculations?.extra)
                                            }
                                            <sub className='currency'>
                                                ر.س

                                            </sub>
                                        </p>
                                    </Col>
                                </Row>
                                <Row gutter={[16, 16]} justify="center" align="middle" style={{ padding: "30px 0px"}}>
                                    <Col md={24} sm={24} xs={24}  style={{paddinTop:"23px"}}>
                                        <h3 className='text-center heading'>
                                            إجمالي التكاليف
                                        </h3>
                                        <p className='text-center val' style={{fontSize:"35px", marginBottom:"70px"}}>
                                            { borderSelected.length ?  calculations?.total : ServicesDetails.data.total}
                                            <sub className='currency'>
                                                ر.س

                                            </sub>
                                        </p>
                                        <div className="btn-details">
                                            <Button onClick={() => {
                                                localStorage.setItem("cost" ,borderSelected.length ?  calculations.cost :ServicesDetails.data.cost )
                                                localStorage.setItem("total" ,borderSelected.length ?  calculations.total :ServicesDetails.data.cost )
                                                localStorage.setItem("borders", sumArray(borderSelected)  )
                                                dispatch(AddBorders(borderSelected));
                                                setTimeout(()=>{
                                                router.push(`/services/service-order?id=${router.query.id}`)
                                                },300)
                                                
                                            }} style={{ width: "50%", background: "#150941", color: "#fff", border: "none", borderRadius: "0px" }} size={"large"}>طلب الخدمة</Button>

                                        </div>
                                        <div className="btn-details">
                                            <Button onClick={() => router.push(`/services`)} style={{ width: "50%", background: "#fff", color: "#150941", border: "2px solid #150941", borderRadius: "0px" }} size={"large"}>طلب اجتماع</Button>

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
                                    {
                                              
                                              JSON.parse(ServicesDetails?.data?.stages_of_delivery)?.map((delivery)=>(
                                                <li className={styless.listItem}>
                                                <img src={"/assets/images/ico-check.png"} width={20} height={20} />
    
                                                <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
                                                    <span>
                                                        {
                                                            delivery.title
                                                        }
                                                    </span>
                                                    <span style={{ color: "#150941" }}>
                                                        {
                                                            delivery.count
                                                        }
                                                        {
                                                            delivery.count_type == "day" ? "يوم" : 
                                                            delivery.count_type  == "month" ? "شهر" : "سنة"
                                                        }
    
                                                    </span>
                                                </div>
                                            </li>
                                              ))      
                                      }
                                        
                                       



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
                                        {
                                              
                                                ServicesDetails?.data?.service_requirment?.map((result)=>(
                                                    <li key={result.id} className={styless.listItem}>
                                                    <img src={"/assets/images/ico-check.png"} width={20} height={20} />
        
                                                    <span>
                                                        {result.title}
                                                    </span>
                                                </li> 
                                                ))      
                                        }
                                      
                                    </ul>
                                </div>
                            </CardComponent>
                        </Col>
                    </Col>

                </Row>
                <div style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
                    <h3 style={{ minWidth:"196px",width: "20%", maxWidth: "20%", color: "#150941", fontSize: "30px" }}>
                        خدمات ذات صلة
                    </h3>
                    <hr style={{ width: "80%", height: "0px", border: " 1px solid #D3B166", alignSelf: "center" }} />
                </div>
               
                <div>
                   {
                    ServicesDetails?.data?.suggested.length ? 
                    <Slider clientServices={ServicesDetails?.data?.suggested} /> : 
                    <p className='text-center'>
                        لا توجد بيانات 
                    </p>
                   }
                   
                </div>
            </DIVContent>

        </LayoutComponent>
    )
}
export default OrderDetails
export async function getServerSideProps(context) {
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