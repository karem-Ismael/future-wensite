import moment from "moment"
import CardComponent from "./Card"
import { Button, Col, Rate, Row } from "antd"
import styless from '@/styles/ServiceDetails.module.css'
import { useSelector } from "react-redux"

const InvoiceDetailsComponent=({InvoiceDetails})=>{
    const {profileImage,profileInfo} =useSelector((state)=>state.profile) || {}

console.log(InvoiceDetails,"InvoiceDetails")
const {provider}=JSON.parse(InvoiceDetails?.meta)
console.log(JSON.parse(InvoiceDetails?.meta),"provider")
console.log(JSON.parse(InvoiceDetails?.meta),"meta data ")
console.log(profileInfo?.asset_owner?.asset_name_ar,"profileInfo profileInfo")
return(
    <div>
          <div className="mt-3 row">
            <div className="d-flex justify-content-between">
            <h3 className="title" style={{ position: "relative" }}>
            الفواتير
            </h3>
            </div>
            <div className="d-flex mt-3" style={{gap:"10px" ,padding:"20px"}}>
                <h5>
                فاتورة ضريبية
                </h5>
                <span>
{
    InvoiceDetails.code
}
                </span>
            </div>
            <div className="d-flex " style={{gap:"10px",padding:"20px"}}>
                <h5>
                تاريخ الفاتورة
                </h5>
                <span>
                    {
                                moment(InvoiceDetails?.created_at).locale("ar").format('DD MMM YYYY h:mm:ss a')

                    }
                </span>
            </div>
          <Row gutter={[16, 16]} className="mt-3 mb-3">

<Col md={8} sm={24} xs={24}>
    <CardComponent>

      
        <div className="d-flex" style={{ gap: "10px" }} >
            <img src="assets/images/logoheader.png" style={{ border: "" }} height={"100px"} width={"auto"} />
            <span style={{ alignSelf: "center" }}>
                {/* {order?.service_provider?.company_name_ar} */}
            </span>
        </div>
       <ul>
        <li className="list-item d-flex justify-content-between ">
            <p>
            رقم التسجيل الضريبي
            </p>
            <p>
            ٧٧٤٧٧٥٧٧٥٧٥٨٨٧
            </p>
       
        </li>
        <li className="list-item d-flex justify-content-between">
        <p>
        الدولة
        </p>
        <p>
        السعودية
        </p>
        </li>
        <li className="list-item d-flex justify-content-between">
        <p>
        المدينة
        </p>
        <p>
        الرياض
        </p>
        </li>
        <li className="list-item d-flex justify-content-between">
        <p>
        الحي
        </p>
        <p>
        المنصورة
        </p>
        </li>
        <li className="list-item d-flex justify-content-between">
        <p>
        الشارع
        </p>
        <p>
        الملاح
        </p>
        </li>
       </ul>

    </CardComponent>

</Col>
<Col md={8} sm={24} xs={24}>
    <CardComponent>

      
        <div className="d-flex" style={{ gap: "10px" }} >
            <img src={profileImage} style={{ border: "" }} height={"100px"} width={"auto"} />
            <span style={{ alignSelf: "center" }}>
                {/* {order?.service_provider?.company_name_ar} */}
                {
                    profileInfo?.asset_owner?.asset_name_ar
                }
            </span>
        </div>
       <ul>
        <li className="list-item d-flex justify-content-between ">
            <p>
            رقم التسجيل الضريبي
            </p>
            <p>
            {
               profileInfo?.asset_owner?.civil_registry_nom
            }
            </p>
       
        </li>
        <li className="list-item d-flex justify-content-between">
        <p>
        الدولة
        </p>
        <p>
        السعودية
        </p>
        </li>
        <li className="list-item d-flex justify-content-between">
        <p>
        المدينة
        </p>
        <p>
        {
               profileInfo?.asset_owner?.city

        }
        </p>
        </li>
        <li className="list-item d-flex justify-content-between">
        <p>
        الحي
        </p>
        <p>
        {
            profileInfo?.asset_owner?.district
        }
        </p>
        </li>
        <li className="list-item d-flex justify-content-between">
        <p>
        الشارع
        </p>
        <p>
        {
               profileInfo?.asset_owner?.street

        }
        </p>
        </li>
       </ul>

    </CardComponent>

</Col>
{/* <Col lg={16} md={16} sm={24} xs={24}>

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
</Col> */}


</Row>

              <table className="table table-hover w-100">
                <thead>
                    <th>
                     الخدمة
                    </th>
                    <th>
                    تصنيف الخدمة
                    </th>
                    <th>
                    تاريخ بدء الخدمة 
                    </th>
                    <th>
                    تكلفة الخدمة
                    </th>
                    <th>
                    الضرائب (15%)
                    </th>
                    <th>
                    التكلفة شاملة الضريبة
                    </th>
                    <th>
                    المبلغ المستحق
                    </th>
                  </thead>
                  <tbody>
                    <tr>
                        <td>
                            {
                                InvoiceDetails?.service_name
                            }
                        </td>
                        <td>

                        </td>
                        <td>
                            {
                                moment(InvoiceDetails?.created_at).locale("ar").format('DD MMM YYYY h:mm:ss a')

                                // moment(JSON.parse(InvoiceDetails?.meta)?.service?.created_at).locale("ar").format('DD MMM YYYY h:mm:ss a')
                            }
                        </td>
                        <td>
                        {
                                InvoiceDetails?.cost - InvoiceDetails?.tax
                            }
                        </td>
                        <td>
                            {
                                 InvoiceDetails?.tax
                            }
                        </td>
                        <td>
                        {
                            InvoiceDetails?.cost
                            }
                        </td>
                        <td>
                        {
                            InvoiceDetails?.cost
                         }
                        </td>
                        {console.log(JSON.parse(InvoiceDetails?.meta),"kareem")}
                    </tr>
                  </tbody>
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

                    </td>

                  </tbody> */}
              </table>
              <Row className="mt-2 mb-2">
              <Col md={8} sm={24} xs={24}>
                            <CardComponent>
                                <div>
                                    <h3 className="title" style={{position:"relative"}}>  
                                    تفاصيل التكلفة
                                    </h3>
                                    <ul>
        <li className="list-item d-flex justify-content-between">
       <span>
       تكلفة الخدمة
       </span>
       <span>
       {
                                InvoiceDetails?.cost - InvoiceDetails?.tax
        }
       </span>
        </li>
        <li className="list-item d-flex justify-content-between">
        <span>
        ضريبة القيمة المضافة (15%)
        </span>
        <span>
        {
                        InvoiceDetails?.tax
                            }
        </span>
        </li>
        <li className="list-item d-flex justify-content-between">
      <span>
      التكلفة شاملة الضريبة
      </span>
      <span>
      {
                              InvoiceDetails?.cost
                            }
      </span>
        </li>
        <li className="list-item d-flex justify-content-between">
       <span>
       المبلغ المستحق
       </span>
        <span>
        {
              InvoiceDetails?.cost
                            }
        </span>
        </li>
        
       </ul>
                                    {/* <ul className={styless.list}>
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
                                      
                                    </ul> */}
                                </div>
                            </CardComponent>
</Col>
              </Row>
              </div>
    </div>
)
}
export default InvoiceDetailsComponent