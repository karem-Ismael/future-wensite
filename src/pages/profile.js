import CardComponent from "@/Components/Card";
import LayoutComponent from "@/Components/Layout"
import PageTitleBar from "@/Components/PageTitlebar"
import { Button, Col, Pagination, Rate, Row, Select, Tabs } from "antd";
import { useRouter } from "next/router";
import styled from 'styled-components';
import ProfileImage from "@/Components/ProfileImage"
import ProfileInputs from "@/Components/ProfileInputs";
import { useState } from "react";
import OrderList from "@/Components/orderComponents/orderList";
import styless from '@/styles/ServiceDetails.module.css'
import NoteModal from "@/Components/NoteModal";
import { useSelector } from "react-redux";
import moment from "moment";
import StagesTable from "@/Components/orderComponents/StagesTable";
import CollapsibleTable from "@/Components/borderTable";
import "moment/locale/ar-sa";
import ConsultList from "@/Components/orderComponents/ConsultsList";
import Wallet from "@/Components/Wallet"
import { Button as AntBtn} from 'antd';
import {
    VideoCameraOutlined 
  } from '@ant-design/icons';
import { Input } from "reactstrap";
const selectStyle={
    width:"220px"
}
const BreedCrumb = styled.div`
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
function Profile() {
    const router = useRouter()
    const [profile, setProfile] = useState(1)
    const [isopen, setIsOpen] = useState(false)
    const [order, setOrder] = useState()
    const [page, setPage] = useState(1)
    const { orderDetails, tabsView, consultView, consultDetails } = useSelector((state) => state.orders) || {}

    const items = [
        {
            key: '1',
            label: `البروفايل`,
            children: <ProfileImage />,
        },
        {
            key: '2',
            label: `خدمات`,
            children: <OrderList />,
        },
        {
            key: '3',
            label: `باقات`,
            children: "karem2",
        },
        {
            key: '4',
            label: `استشارات`,
            children: <ConsultList />,
        },
        {
            key: '5',
            label: `المحفظة`,
            children: <Wallet />,
        },
        {
            key: '6',
            label: `الفواتير`,
            children: "karem2",
        },


    ];
    console.log(profile,"profile")
    const goToZoomLink=(link)=>{
        if(link){
            window.open(link,"_blank")
        }
    }
    return (
        <LayoutComponent>
            <BreedCrumb className='container'>

                <PageTitleBar
                    lastElement={"حسابي"}
                    match={router.asPath}
                    enableBreadCrumb
                    content={"تركز خدمات وحلول الأوقاف الخاصة بنا على مجموعة واسعة من احتياجات الوقف القانونية والإدارية والمالية."}
                />
            </BreedCrumb>
            <DIVContent className='container' style={{ padding: "0px" }}>
                <Row>
                    <Col md={24} sm={24} xs={24}>
                        <CardComponent>
                            <Tabs onChange={(e) => setProfile(e)} defaultActiveKey={1} items={items} />
                        </CardComponent>
                    </Col>
                    {
                        profile == 1 ?
                            <Col md={24} sm={24} xs={24} className="mt-2">
                                <CardComponent>
                                    <ProfileInputs />
                                </CardComponent>
                            </Col>
                            : null
                    }
                </Row>


                {
                    profile == 2 && !tabsView && orderDetails &&
                    <>
                        <Row className="mt-3">
                            {
                                <Col md={24} sm={24} xs={24}>
                                    <CardComponent>
                                        {/* <CollapsibleTable service={orderDetails.service}/>
                     */}
                                        <CollapsibleTable serviceRequestId={orderDetails?.id}
                                            setOrder={setOrder}
                                            Delivery={orderDetails && !orderDetails.service_request_deliveries.length ? JSON.parse(orderDetails?.service?.stages_of_delivery) : orderDetails && orderDetails.service_request_deliveries.length ? orderDetails.service_request_deliveries : []}
                                        />
                                        <div style={{ marginTop: "30px" }}>
                                            <h3 className="title" style={{ position: "relative" }}>
                                                ملاحظات الطلب
                                            </h3>
                                        </div>
                                        <div>
                                            <ul style={{ listStyleType: "none" }}>
                                                {
                                                    orderDetails?.service_request_note?.map((note) => (
                                                        <li>
                                                            <div style={{ color: "#150941" }}>
                                                                <img src={"/assets/images/ic-message.png"} style={{ width: "19px" }} />
                                                                {""}
                                                                {note.type}
                                                                {moment(order?.updated_at).locale("ar").format('DD MMM YYYY')}
                                                            </div>
                                                            <div style={{ padding: "0px 20px", color: "#828282" }}>
                                                                {note.content}
                                                            </div>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                        <div className="row justify-content-between mt-4 mb-2  ">
                                            <div className="col-md-6" style={{ textAlign: "end" }}>

                                                <Pagination
                                                    size="small"
                                                    defaultCurrent={page}
                                                    current={page}
                                                    onChange={(page) => setPage(page)}
                                                    pageSize={10}
                                                    total={orderDetails.service_request_note_count}
                                                />


                                            </div>
                                            <div className="col-md-6" style={{ textAlign: "end" }}>
                                                <Button size="large" onClick={() => setIsOpen(!isopen)} className="btn" style={{ background: "#7EA831", widthh: "fit-content", color: "#fff" }}>
                                                    اضف ملاحظة
                                                </Button>
                                            </div>
                                        </div>

                                    </CardComponent>

                                </Col>
                            }
                        </Row>
                        <Row gutter={[16, 16]} className="mt-3">

                            <Col md={8} sm={24} xs={24}>
                                <CardComponent>

                                    <div>
                                        <h3 className="title" style={{ position: "relative" }}>
                                            مزود الخدمة
                                        </h3>
                                    </div>
                                    <div className="d-flex" style={{ gap: "10px" }} >
                                        <img src="assets/images/no-image.jpg" style={{ border: "" }} height={"100px"} width={"auto"} />
                                        <span style={{ alignSelf: "center" }}>
                                            {/* {order?.service_provider?.company_name_ar} */}
                                            {orderDetails?.service_provider?.company_name_ar}
                                        </span>
                                    </div>
                                    <Button size="large" className="w-100" style={{ background: "#150941", color: "#fff" }}>
                                        طلب اجتماع
                                    </Button>

                                </CardComponent>

                            </Col>
                            <Col lg={16} md={16} sm={24} xs={24}>

                                <CardComponent>
                                    <h3 className={styless.title}>
                                        تقييم الوقف
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
                                            <h4 style={{ color: "#150941" }}>
                                                اجمالي التقييم
                                            </h4>
                                            <Rate allowHalf defaultValue={4} disabled />


                                        </Col>
                                    </Row>
                                </CardComponent>
                            </Col>

                        </Row>
                        <Row className="mt-3">
                            {
                                <Col md={24} sm={24} xs={24}>
                                    <CardComponent>
                                        <div>
                                            <h3 className="title" style={{ position: "relative" }}>
                                                سجل تحديثات الطلب                </h3>
                                        </div>
                                        <div className="mt-3 row">
                                            <table className="table table-hover w-100">
                                                <thead>
                                                    <th>
                                                        حالة الطلب
                                                    </th>
                                                    <th>
                                                        التحديث
                                                    </th>
                                                    <th>
                                                        بواسطة
                                                    </th>
                                                    <th>
                                                        النوع
                                                    </th>
                                                    <th>
                                                        التاريخ
                                                    </th>
                                                    <th>
                                                        ملاحظة
                                                    </th>
                                                </thead>
                                                <tbody>
                                                    {
                                                        orderDetails.logs.map((log, index) => <tr>
                                                            <td>{JSON.parse(log.meta).request_status == 1 ? "مفعل" : JSON.parse(log.meta).request_status == 0 ? "جاري العمل " : "مرفوض"}</td>
                                                            <td>{JSON.parse(log.meta).log_type}</td>
                                                            <td>{JSON.parse(log.meta).name}</td>
                                                            <td>{JSON.parse(log.meta).category == "service-provider" ? "مزود خدمة " : "وقف"}</td>
                                                            <td>{
                                                                moment(log.created_at).locale("ar").format('DD MMM YYYY h:mm:ss a')

                                                            }</td>
                                                            <td></td>


                                                        </tr>)
                                                    }

                                                </tbody>
                                            </table>
                                        </div>
                                    </CardComponent>

                                </Col>
                            }
                        </Row>

                    </>
                }
                {!consultView && consultDetails && profile ==4 && 
                    <>
                     <Row gutter={[16, 16]} className="mt-3 mb-3">
                            <Col md={24} sm={24} xs={24}>
                                <CardComponent>

                                    <div className="mb-4">
                                        <h3 className="title" style={{ position: "relative" }}>
                                        رابط الاستشارة                                        </h3>
                                    </div>
                                    <Row gutter={[16,16]} className="mt-2">
                                        <Col lg={20} md={20} sm={24} xs={24}>
                                        <Input  style={{textAlign:"left"}} type="text" disabled value={consultDetails?.link}/>
                                 
                                        </Col>
                                        <Col lg={4} md={4} sm={24} xs={24}>
                                        <AntBtn 
                                        onClick={()=>goToZoomLink(consultDetails?.link)}
                                        size="large" style={{borderColor:"#A5A5A5",padding:"0px 30px",borderRadius:"0px"}}>
                                            
                                        <VideoCameraOutlined style={{fontSize:"25px",color:"#A5A5A5"}}/>
                                        <span style={{color:"#A5A5A5"}}>
                                            ارسال
                                            </span>
                                   </AntBtn>
                                        </Col>
                                 
                                    </Row>
                                  

                                </CardComponent>

                            </Col>
                        
                        </Row>
                        <Row gutter={[16, 16]} className="mt-3 mb-3">
                            <Col md={12} sm={24} xs={24}>
                                <CardComponent>

                                    <div>
                                        <h3 className="title" style={{ position: "relative" }}>
                                            المستشار                                        </h3>
                                    </div>
                                    <div className="d-flex" style={{ gap: "10px" }} >
                                        <img src={ consultDetails?.advisor?.files[0].path ?  `https://estithmar.arabia-it.net${consultDetails?.advisor?.files[0].path}`:  "assets/images/no-image.jpg"} style={{ border: "" }} height={"100px"} width={"auto"} />
                                        <span style={{ alignSelf: "center" }}>
                                            {/* {order?.service_provider?.company_name_ar} */}
                                            {consultDetails?.advisor?.ar_name}
                                        </span>
                                    </div>
                                    <ul>
                                        <li style={{ padding: "10px" }}>
                                            رقم الجوال : {consultDetails?.advisor?.user?.phone}
                                        </li>
                                        <li style={{ padding: "10px" }}>
                                            البريد الالكتروني : {consultDetails?.advisor?.user?.email}
                                        </li>
                                        <li style={{ padding: "10px" }}>
                                            الاقامة : {consultDetails?.advisor?.resident}
                                        </li>
                                        <li style={{ padding: "10px" }}>
                                            الجنسية : {consultDetails?.advisor?.nationality}
                                        </li>
                                    </ul>

                                </CardComponent>

                            </Col>
                            <Col md={8} sm={24} xs={24}>
                                <CardComponent>

                                    <div>
                                        <h3 className="title" style={{ position: "relative" }}>
                                            الفاتورة                                        </h3>
                                    </div>

                                    <ul className={styless.list}>


                                        <li className={styless.listItem}>

                                            <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
                                                <span>
                                                    تكلفة الاستشارة
                                                </span>
                                                <span style={{ color: "#150941" }}>

                                                    {consultDetails.cost}


                                                    رس


                                                </span>
                                            </div>
                                        </li>
                                        <li className={styless.listItem}>

                                            <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
                                                <span>
                                                    ضريبة القيمة المضافة (15%)
                                                </span>
                                                <span style={{ color: "#150941" }}>

                                                    {consultDetails.cost * .15}


                                                    رس


                                                </span>
                                            </div>
                                        </li>
                                        <li className={styless.listItem}>

                                            <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
                                                <span>
                                                    التكلفة شاملة الضريبة
                                                </span>
                                                <span style={{ color: "#150941" }}>

                                                    {+consultDetails.cost + consultDetails.cost * .15}


                                                    رس


                                                </span>
                                            </div>
                                        </li>
                                        <li className={styless.listItem}>

                                            <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
                                                <span>
                                                    التكلفة النهائية
                                                </span>
                                                <span style={{ color: "#150941" }}>

                                                    {+consultDetails.cost + consultDetails.cost * .15}



                                                    رس


                                                </span>
                                            </div>
                                        </li>





                                    </ul>

                                </CardComponent>

                            </Col>
                        </Row>
                        <Row className="mt-3">
                            {
                                <Col md={24} sm={24} xs={24}>
                                    <CardComponent>
                                        {/* <CollapsibleTable service={orderDetails.service}/>
              */}

                                        <div style={{ marginTop: "30px" }}>
                                            <h3 className="title" style={{ position: "relative" }}>
                                                ملاحظات الطلب
                                            </h3>
                                        </div>
                                        <div>
                                            <ul style={{ listStyleType: "none" }}>
                                                {
                                                    consultDetails?.appointment_note?.map((note) => (
                                                        <li>
                                                            <div style={{ color: "#150941" }}>
                                                                <img src={"/assets/images/ic-message.png"} style={{ width: "19px" }} />
                                                                {""}
                                                                {note.type}
                                                                {moment(order?.updated_at).locale("ar").format('DD MMM YYYY')}
                                                            </div>
                                                            <div style={{ padding: "0px 20px", color: "#828282" }}>
                                                                {note.content}
                                                            </div>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                        <div className="row justify-content-between mt-4 mb-2  ">
                                            <div className="col-md-6" style={{ textAlign: "end" }}>

                                                <Pagination
                                                    size="small"
                                                    defaultCurrent={page}
                                                    current={page}
                                                    onChange={(page) => setPage(page)}
                                                    pageSize={10}
                                                    total={orderDetails?.service_request_note_count}
                                                />


                                            </div>
                                            <div className="col-md-6" style={{ textAlign: "end" }}>
                                                <Button size="large" onClick={() => setIsOpen(!isopen)} className="btn" style={{ background: "#7EA831", widthh: "fit-content", color: "#fff" }}>
                                                    اضف ملاحظة
                                                </Button>
                                            </div>
                                        </div>

                                    </CardComponent>

                                </Col>
                            }
                        </Row>
                        <Row gutter={[16, 16]} className="mt-3">


                            <Col lg={24} md={24} sm={24} xs={24}>

                                <CardComponent>
                                    <h3 className="title mb-2">
                                        تقييم الوقف
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
                                            <h4 style={{ color: "#150941" }}>
                                                اجمالي التقييم
                                            </h4>
                                            <Rate allowHalf defaultValue={4} disabled />


                                        </Col>
                                    </Row>
                                </CardComponent>
                            </Col>

                        </Row>
                        <Row className="mt-3">
                            {
                                <Col md={24} sm={24} xs={24}>
                                    <CardComponent>
                                        <div>
                                            <h3 className="title" style={{ position: "relative" }}>
                                                سجل تحديثات الطلب                </h3>
                                        </div>
                                        <div className="mt-3 row">
                                            <table className="table table-hover w-100">
                                                <thead>
                                                    <th>
                                                        حالة الطلب
                                                    </th>
                                                    <th>
                                                        التحديث
                                                    </th>
                                                    <th>
                                                        بواسطة
                                                    </th>
                                                    <th>
                                                        النوع
                                                    </th>
                                                    <th>
                                                        التاريخ
                                                    </th>
                                                    <th>
                                                        ملاحظة
                                                    </th>
                                                </thead>
                                                <tbody>
                                                    {
                                                        consultDetails?.logs?.map((log, index) => <tr>
                                                            <td>{JSON.parse(log.meta).request_status == 1 ? "مفعل" : JSON.parse(log.meta).request_status == 0 ? "جاري العمل " : "مفعل"}</td>
                                                            <td>{JSON.parse(log.meta).log_type}</td>
                                                            <td>{JSON.parse(log.meta).name}</td>
                                                            <td>{JSON.parse(log.meta).category == "service-provider" ? "مزود خدمة " : "وقف"}</td>
                                                            <td>{
                                                                moment(log.created_at).locale("ar").format('DD MMM YYYY h:mm:ss a')

                                                            }</td>
                                                            <td></td>


                                                        </tr>)
                                                    }

                                                </tbody>
                                            </table>
                                        </div>
                                    </CardComponent>

                                </Col>
                            }
                        </Row>
                    </>

                }

                {
                    profile ==5 ? 
                    <Row>
                        <Col md={24} sm={24} xs={24} className="mt-2">
                            <CardComponent>
                            <p className='title-wallet' style={{position:"relative"}}>
                            المعاملات المالية
                             </p>
                             <Row>
                    <Col md={24} sm={24} xs={24}>
                        <CardComponent color={"#150941"} >
                            <Row gutter={[16,16]}>
                               
                                <Col md={8} sm={12}>
                                    <Row className='select-content'>
                                        <span className='select-title'>المعاملات المالية</span>
                                        <Select
                                        size='large'
                                        style={selectStyle}
                                            showSearch
                                            placeholder="عرض الكل"
                                            optionFilterProp="children"
                                            // onChange={onChange}
                                            // onSearch={onSearch}
                                            filterOption={(input, option) =>
                                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                            }
                                            options={[]}/>
                                    </Row>
                                </Col>


                                <Col md={8} sm={12}>
                                    <Row className='select-content'>
                                        <span className='select-title'>حالة المعاملة</span>
                                        <Select
                                        size='large'
                                        style={selectStyle}
                                            showSearch
                                            placeholder="عرض الكل"
                                            optionFilterProp="children"
                                            // onChange={onChangeTime}
                                            // onSearch={onSearch}
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

                                <Col md={8} sm={12}>
                                    {/* <Row className='select-content'>
                                        <span className='select-title'>التكلفة</span>
                                        <Select
                                        size='large'
                                        style={selectStyle}
                                            showSearch
                                            placeholder="عرض الكل"
                                            optionFilterProp="children"
                                            // onChange={onChange}
                                            // onSearch={onSearch}
                                            filterOption={(input, option) =>
                                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                            }
                                            options={[
                                               
                                            ]}
                                        />
                                    </Row> */}
                                </Col>
                              
                                
                            </Row>
                            <Row>
                                
                            </Row>
                        </CardComponent>
                    </Col>
                </Row>
                <table className="table table-hover table-responsive w-100 table-wallet mt-2">
                <thead>
                    <th>
                    المعاملة
                    </th>
                    <th>
                    نوع الخدمة
                    </th>
                    <th>
                    المبلغ
                    </th>
                    <th>
                    تاريخ المعاملة
                    </th>
                    <th>
                    تاريخ المعاملة
                    </th>
                   
                  </thead>
                  {/* <tbody>
                    <td>
                      {order?.service?.title}
                    </td>
                    <td>
                      {order?.service?.field?.name}
                    </td>
                    <td>
                      {order?.service?.executive_time} {order?.service?.executive_time_type}
                    </td>
                    <td>
                    {order?.total}
                      
                    </td>
                    <td>
                      {order?.service?.support_ratio} {"%"}
                    </td>
                    <td>
    <StatusDropDown notAllowed={true} activationStatus={order?.service?.is_active}   url={`asset-owner/request/${order?.id}`} />

                    </td>

                  </tbody> */}
              </table>
                
                            </CardComponent>
                        </Col>
                   
                    </Row>
                   
                    
                    
                    : null
                }
                {
                    profile == 5 ? 
                    <Row>
                          <Col md={24} sm={24} xs={24} className="mt-2">
                            <CardComponent>
                            <p className='title-wallet' style={{position:"relative"}}>
                            طلب دعم
                             </p>
                             <Row>
                                <Col lg={16} md={16} sm={24} xs={24}>
                                <p style={{fontSize:"25px"}}>
                                يمكنك تقديم طلب دعم بعد ملئ استمارة الطلب
                                </p>
                                </Col>
                                <Col lg={8} md={8} sm={24} xs={24}>
                                    <Button size="large" style={{borderColor:"#7EA831",borderRadius:"0px",color:"#7EA831"}}>
                                    طلب دعم نقدي
                                    </Button>
                                </Col>
                             </Row>
                        </CardComponent>
                        </Col>
                    </Row>
                    :null
                }

            </DIVContent>
            <NoteModal profileIndex={profile} isopen={isopen} setIsOpen={setIsOpen} serviceRequestId={1} setOrder={setOrder}  consultDetails={consultDetails}/>
        </LayoutComponent>
    )
}
export default Profile