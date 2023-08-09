import moment from "moment";
import { Progress } from "reactstrap";
import StatusDropDown from "./StatusDropDown";
const ConsultDetailsComponent=({order})=>{
  console.log(order,"consult details")
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
                      order?.request_date &&
                    moment(order?.request_date).locale("ar").format('DD MMM YYYY h:mm:ss a')
                   }
                  </span>
                </div>
                <div style={{width:"fit-content"}}>
    <StatusDropDown inorder={true}  activationStatus={order?.status} id={order?.id}  url={`asset-owner/request/${order?.id}`}/>
                </div>
              </div>
              {/* <div className="row mt-2">
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
              </div> */}
              <div className="mt-3 row">
              <table className="table table-hover w-100">
                <thead>
                    <th>
                    مجال الاستشارة
                    </th>
                    <th>
                    تاريخ الاستشارة
                    </th>
                    <th>
                    مدة الاستشارة
                    </th>
                    
                    <th>
                    تكلفة الاستشارة
                    </th>
                   
                  </thead>
                  <tbody>
                    <td>
                      {order?.advisor?.fields?.map((field)=>field.name + " ")}
                    </td>
                    <td>
                    {
                    moment(order?.date).locale("ar").format('DD MMM YYYY') + " / " +
                    order.time

                      }
                    </td>
                    <td>
                      {
                    
                      }
                    
                    </td>
                    <td>
                    {order?.cost}  
                    </td>
                    
                  

                  </tbody>
              </table>
              </div>
            
        </div>
    )
}
export default ConsultDetailsComponent