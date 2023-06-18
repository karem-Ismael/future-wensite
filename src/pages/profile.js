import CardComponent from "@/Components/Card";
import LayoutComponent from "@/Components/Layout"
import PageTitleBar from "@/Components/PageTitlebar"
import { Button, Col, Pagination, Rate, Row, Tabs } from "antd";
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
function Profile (){
    const router = useRouter()
    const [profile,setProfile]=useState(1)
    const[isopen,setIsOpen]=useState(false)
    const [order,setOrder]=useState()
    const [page,setPage]=useState(1)
  const {orderDetails,tabsView} =useSelector((state)=>state.orders)||{}

    const items = [
        {
          key: '1',
          label: `البروفايل`,
          children: <ProfileImage />,
        },
        {
          key: '2',
          label: `خدمات`,
          children: <OrderList/>,
        },
        {
            key: '3',
            label: `باقات`,
            children: "karem2",
        },
        {
            key: '4',
            label: `استشارات`,
            children: "karem2",
        },
        {
            key: '5',
            label: `المحفظة`,
            children: "karem2",
        },
        {
            key: '6',
            label: `الفواتير`,
            children: "karem2",
        },
        
       
      ];
      console.log(orderDetails,"order profile ")
return(
    <LayoutComponent>
            <BreedCrumb className='container'>
                    
                    <PageTitleBar 
                        lastElement={"حسابي"}
                        match={router.asPath}
                        enableBreadCrumb
                        content={"تركز خدمات وحلول الأوقاف الخاصة بنا على مجموعة واسعة من احتياجات الوقف القانونية والإدارية والمالية."}
                    />
            </BreedCrumb>
            <DIVContent className='container' style={{padding:"0px"}}>
            <Row>
                <Col md={24} sm={24} xs={24}>
                    <CardComponent>
                    <Tabs onChange={(e)=> setProfile(e)} defaultActiveKey={1} items={items}  />
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
                profile == 2 && !tabsView &&
                <>
                     <Row className="mt-3">
            {
             <Col md={24} sm={24} xs={24}>
                   <CardComponent>
                    {/* <CollapsibleTable service={orderDetails.service}/>
                     */}
                     <CollapsibleTable serviceRequestId={orderDetails.id} 
                   setOrder={setOrder}
                   Delivery={orderDetails && !orderDetails.service_request_deliveries.length? JSON.parse(orderDetails?.service?.stages_of_delivery) :  orderDetails && orderDetails.service_request_deliveries.length ?orderDetails.service_request_deliveries :[]}
                   />
                   <div>
                <h3 className="title" style={{position:"relative"}}>
                ملاحظات الطلب
                </h3>
              </div>
              <div>
                <ul style={{listStyleType:"none"}}>
                  {
                    orderDetails?.service_request_note?.map((note)=>(
                      <li>
                       <div style={{color:"#005D5E"}}>
                       <img src={"/assets/images/ic-message.png"} style={{width:"19px"}}/>
                        {""}
                        {note.type}
                        {moment(order?.updated_at).locale("ar").format('DD MMM YYYY')}
                       </div>
                       <div style={{padding:"0px 20px",color:"#828282"}}>
                        {note.content}
                       </div>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className="row justify-content-between mt-4 mb-2  ">
              <div className="col-md-6" style={{textAlign:"end"}}>
              
              <Pagination 
                size="small"
                defaultCurrent={page}
                current={page}  
                onChange={(page)=>setPage(page)}
                pageSize={10}
                 total={orderDetails.service_request_note_count}
                  />
              
            
              </div>
                <div className="col-md-6" style={{textAlign:"end"}}>
                  <Button size="large" onClick={()=>setIsOpen(!isopen)} className="btn" style={{background:"#D4B265",widthh:"fit-content",color:"#fff"}}> 
                  اضف ملاحظة  
                  </Button>
                </div>
            </div>
     
                     </CardComponent>
              
             </Col>       
            }
            </Row>
                          <Row gutter={[16,16]} className="mt-3">
            
            <Col md={8} sm={24} xs={24}>
                  <CardComponent>
               
                   <div>
                         <h3 className="title" style={{position:"relative"}}>
                         مزود الخدمة
                         </h3>
                       </div>
                       <div className="d-flex" style={{gap:"10px"}} >
                       <img src="assets/images/no-image.jpg" style={{border:""}} height={"100px"}  width={"auto"}/>
                           <span style={{alignSelf:"center"}}>
                             {/* {order?.service_provider?.company_name_ar} */}
                             {orderDetails?.service_provider?.company_name_ar}
                           </span>
                       </div>
                       <Button size="large" className="w-100" style={{background:"#005D5E",color:"#fff"}}>
                             طلب اجتماع  
                       </Button>
    
                    </CardComponent>
             
            </Col>      
             <Col  lg={16} md={16} sm={24} xs={24}>

             <CardComponent>
                 <h3 className={styless.title}>
                 تقييم الوقف
                 </h3>
                 <Row>
                     <Col  lg={16} md={16} sm={24} xs={24}>
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
           
           </Row>
           <Row className="mt-3">
            {
             <Col md={24} sm={24} xs={24}>
                   <CardComponent>
                   <div>
                <h3 className="title" style={{position:"relative"}}>
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
    

                  </tbody>
              </table>
              </div>
                     </CardComponent>
              
             </Col>       
            }
            </Row>
                
                </>
            }
          
   
           
            </DIVContent>
            <NoteModal isopen={isopen}  setIsOpen={setIsOpen} serviceRequestId={1} setOrder={setOrder}/>
        </LayoutComponent>
)
}
export default Profile