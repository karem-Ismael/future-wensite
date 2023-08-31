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
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import StagesTable from "@/Components/orderComponents/StagesTable";
import CollapsibleTable from "@/Components/borderTable";
import "moment/locale/ar-sa";
import ConsultList from "@/Components/orderComponents/ConsultsList";
import Wallet from "@/Components/Wallet"
import { Button as AntBtn } from 'antd';
import {
    VideoCameraOutlined
} from '@ant-design/icons';
import { Input } from "reactstrap";
import { useEffect } from "react";
import axios from "axios";
import { WalletBallance, WalletTransactions } from "@/store/Profile/action";
import WalletChargeComponent from "@/Components/WalletCharge";
import BankTransfer from "@/Components/BankTransferComponent";
const selectStyle = {
    width: "220px"
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
function WalletCharge() {
    const router = useRouter()
    const [profile, setProfile] = useState(1)
    const [isopen, setIsOpen] = useState(false)
    const [order, setOrder] = useState()
    const [page, setPage] = useState(1)
    const { orderDetails, tabsView, consultView, consultDetails } = useSelector((state) => state.orders) || {}
    const { WalletTransactionsArr,WalletBalance } = useSelector((state) => state.profile) || {}

    const dispatch = useDispatch()
    const items = [
        {
            key: '1',
            label: `تحويل بنكي`,
            children: <BankTransfer />,
        },
        {
            key: '2',
            label: `بطاقة ائتمانية`,
            children: <WalletChargeComponent />,
        },
      
       


    ];
    console.log(profile, "profile")
    const goToZoomLink = (link) => {
        if (link) {
            window.open(link, "_blank")
        }
    }
    useEffect(() => {
        axios.post(`https://estithmar.arabia-it.net/api/auth/transactions`, {
            token: localStorage.getItem("token")
        }).then((data) => {
            dispatch(WalletTransactions(data.data.data))
            console.log(data.data.data, "profile karem")
        }
        )
        axios.post("https://estithmar.arabia-it.net/api/auth/wallet",{
            token:localStorage.getItem("token")
        }).then((data)=>{
            dispatch(WalletBallance(data.data.data))
        })
        // fetch(`https://estithmar.arabia-it.net/api/auth/transactions?token=${localStorage.getItem("token")}`).then(res=>res.json()).then((data)=>console.log(data,"authentication profille"))
    }, [])
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
                   
                </Row>


               
                

               
                

            </DIVContent>
        </LayoutComponent>
    )
}
export default WalletCharge