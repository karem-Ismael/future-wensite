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
import { CheckOutlined, CloseOutlined, PlusOutlined } from "@ant-design/icons"
import Slider from "../../Components/Slider"
import { useRouter } from 'next/router'
import { Table } from 'reactstrap';
import { useSelector } from 'react-redux';
import FileUpload from '@/Components/FileUpload';
import PageTitleBar from '@/Components/PageTitlebar';
import OrderModal from '@/Components/OrderModal';

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
function ServiceOrder({ ServicesDetails }) {
    const screens = useBreakpoint();
    const [excutivetime, setExcutivetime] = useState()
    const [borderSelected, setBorderSelected] = useState([])
    const [AssetFiles, setAssetFiles] = useState()
    const [ServiceDetails, setServiceDetails] = useState(ServicesDetails)
    const router = useRouter()
    const { user } = useSelector(state => state.authentication.login_data) || {}
  const {borders} =useSelector(state=>state.orders) || {}
  const { WalletTransactionsArr,WalletBalance } = useSelector((state) => state.profile) || {}

    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("token")) {
            axios.get(`https://estithmar.arabia-it.net/api/asset-owner/files?token=${localStorage.getItem("token")}`).then((res) => setAssetFiles(res.data.data.map(file => file.title), "res"))
        }
    }, [user])
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

    function sumArray(array) {
        const ourArray = [1, 4, 0, 9, -3];
        let sum = 0;

        for (let i = 0; i < borderSelected.length; i += 1) {
            sum += +borderSelected[i].price;
        }

        return sum;
    }
    const UploadFile = (file, name) => {
        const formdata = new FormData();
        formdata.append("title", name);
        formdata.append("store_file", true);
        formdata.append("file", file);

        axios.post(`https://estithmar.arabia-it.net/api/asset-owner/files?token=${localStorage.getItem("token")}`, formdata, {
            headers: {
                "Content-Type": "multipart/form-data; ",
            },
        })
            .then((res) => {
                ReCallServiceDetalis()
            });
    }
    const ReCallServiceDetalis = () => {
        axios.get(`https://estithmar.arabia-it.net/api/asset-owner/files?token=${localStorage.getItem("token")}`).then((res) => setAssetFiles(res.data.data.map(file => file.title), "res"))

    }
    const SaveOrder=()=>{
        axios.post("https://estithmar.arabia-it.net/api/asset-owner/request",{
                token:localStorage.getItem("token"),
                service_id:router.query.id,
                service_border:borders
        }).then((res)=>{
            if(!res.data.errors){
                setIsModalOpen(!isModalOpen)
            }else{

            }
        })
    }
    return (
        <LayoutComponent>
            <BreedCrumb className='container'>

                <PageTitleBar
                    title={"الخدمات"}
                    match={router.asPath}
                    enableBreadCrumb
                    content={"         تركز خدمات وحلول الأوقاف الخاصة بنا على مجموعة واسعة من احتياجات الوقف القانونية والإدارية والمالية."}
                />
            </BreedCrumb>
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
                                                    {
                                                        ServicesDetails.data.service_provider.company_name_ar
                                                    }
                                                </td>
                                                <td>
                                                    {
                                                        ServicesDetails.data.field.name
                                                    }
                                                </td>
                                                <td>
                                                    {
                                                        ServicesDetails.data.executive_time

                                                    }
                                                    {
                                                        ServicesDetails.data.executive_time_type == "day" ? "يوم" :
                                                            ServicesDetails.data.executive_time_type == "month" ? "شهر" : "سنة"

                                                    }
                                                </td>
                                                <td>
                                                    {
                                                      localStorage.getItem("total") ? localStorage.getItem("total") :  ServicesDetails.data.cost
                                                    }
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
                                    {

                                        ServicesDetails.data.service_requirment.map((service) => (
                                            AssetFiles?.includes(service.title) ?
                                                <li className={orders.listItemActive} style={{ marginTop: "10px" }}>
                                                    <CheckOutlined style={{ marginRight: "8px", alignSelf: "center" }} />
                                                    <span>
                                                        {service.title}
                                                    </span>
                                                </li>
                                                :
                                                <li className={orders.listItem} style={{ marginTop: "10px", justifyContent: "space-between", padding: "10px 4px" }}>
                                                    <div style={{ display: "flex", gap: "10px" }}>
                                                        <CloseOutlined style={{ marginRight: "8px", alignSelf: "center" }} />
                                                        <span>
                                                            {service.title}
                                                        </span>
                                                    </div>

                                                    {
                                                        user?.id ?
                                                            <FileUpload
                                                                setImage={(file) => {
                                                                    UploadFile(file, service.title)
                                                                }}
                                                            />
                                                            : null
                                                    }


                                                </li>
                                        ))
                                    }
                                   
                                </ul>
                            </CardComponent>
                            <CardComponent>
                                <div>
                                    <p className={styless.title}>
                                        رصيد محفظتك الحالي
                                        <span className='text-center val' style={{ margin: "10px" }}>
                                        {WalletBalance?.valid_balance}
                                            <sub className='currency'>
                                                ر.س

                                            </sub>
                                        </span>
                                        {localStorage.getItem("total") &&  localStorage.getItem("total") > WalletBalance?.valid_balance ? 
                                        
                                        "لا يكفي لاتمام الطلب"
                                        : ServicesDetails.data.cost  > WalletBalance?.valid_balance ? 
                                        " يكفي لاتمام الطلب"
                                            : " يكفي لاتمام الطلب"
                                        }

                                    </p>
                                </div>
                                <div className='text-center'>
                                    <Button 
                                    onClick={()=>SaveOrder()}
                                    style={{ width: "50%", maxWidth: "200px", background: "#150941", color: "#fff", border: "none", borderRadius: "0px" }} 
                                    size={"large"}
                                    disabled={ !user?.id || ServicesDetails.data.service_requirment.map((service)=>AssetFiles?.includes(service.title)).includes(false)}
                                    
                                    >
                                        إتمام الطلب</Button>

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


                                            <li className={styless.listItem}>

                                                <div style={{ display: "flex", width: "100%", gap: "30px" }}>
                                                    <p className='text-center val' style={{ fontSize: "20px", margin: "0px" }}>
                                                        {localStorage.getItem("cost") ? localStorage.getItem("cost") : ServicesDetails.data.cost}
                                                        <sub className='currency'>
                                                            ر.س

                                                        </sub>
                                                    </p>
                                                    <p style={{ color: "#150941", fontSize: "18px", margin: "0px" }}>
                                                        تكلفة الخدمة
                                                    </p>
                                                </div>
                                            </li>


                                            <li className={styless.listItem}>

                                                <div style={{ display: "flex", width: "100%", gap: "30px" }}>
                                                    <p className='text-center val' style={{ fontSize: "20px", margin: "0px" }}>
                                                        {localStorage?.getItem("borders") ? localStorage?.getItem("borders") : 0}
                                                        <sub className='currency'>
                                                            ر.س

                                                        </sub>
                                                    </p>
                                                    <p style={{ color: "#150941", fontSize: "18px", margin: "0px" }}>
                                                        تكلفة الملحقات
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </Col>

                                </Row>

                                <Row gutter={[16, 16]} justify="center" align="middle" style={{ padding: "30px 0px" }}>
                                    <Col md={24} sm={24} xs={24} style={{ paddinTop: "23px" }}>
                                        <h3 className='text-center heading'>
                                            المبلغ الإجمالي
                                        </h3>
                                        <p className='text-center val' style={{ fontSize: "35px" }}>
                                            {localStorage.getItem("total") ? localStorage.getItem("total") : ServicesDetails.data.cost}

                                            <sub className='currency'>
                                                ر.س

                                            </sub>
                                        </p>
                                        <div className='text-center' style={{ color: "#150941" }}>
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
                <OrderModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
            </DIVContent>

        </LayoutComponent>
    )
}
export default ServiceOrder
export async function getServerSideProps(context) {
    const response = await fetch(`https://estithmar.arabia-it.net/api/service/${context?.query?.id}`)
    const data = await response.json()
    return {
        props: {
            ServicesDetails: data,
        }
    }
}