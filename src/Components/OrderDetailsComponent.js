import moment from "moment";
import StatusDropDown from "./orderComponents/StatusDropDown"
import { Progress } from "reactstrap";
const OrderDetailsComponent=({order})=>{
    return(
        <div className="col-md-12">
      
              <div className="row justify-content-between">
                <div style={{width:"fit-content"}}>
                  <span>
                  رقم الطلب:
                  </span>
                  <span>
                    {order?.code}
                  </span>
                </div>
                <div style={{width:"fit-content"}}>
                  <span>
                  تاريخ الإنشاء:
                  </span>
                  <span>
                    {
                    moment(order?.created_at).locale("ar").format('DD MMM YYYY h:mm:ss a')
                   }
                  </span>
                </div>
                <div style={{width:"fit-content"}}>
    <StatusDropDown inorder={true}  activationStatus={order?.status} id={order?.id}  url={`asset-owner/request/${order?.id}`}/>
                </div>
              </div>
              <div className="row mt-2">
                <div className="row w-100 m-0 justify-content-between">
                  <div style={{width:"fit-content"}}> 
                  البدء:
                  {order?.start_date}
                  </div>
                  <div style={{width:"fit-content"}}>
                  التسليم:
                  {order?.end_date}
                  
                  </div>
                </div>
              <Progress
                value={50}
                className="w-100"
                color="success"
                />
              </div>
              <div className="mt-3 row">
              <table className="table table-hover w-100">
                <thead>
                    <th>
                    اسم الخدمة
                    </th>
                    <th>
                    تصنيف الخدمة
                    </th>
                    <th>
                    مدة التنفيذ
                    </th>
                    <th>
                    التكلفة
                    </th>
                    <th>
                    الدعم
                    </th>
                    <th>
                    حالة الخدمة
                    </th>
                  </thead>
                  <tbody>
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

                  </tbody>
              </table>
              </div>
            
        </div>
    )
}
export default OrderDetailsComponent