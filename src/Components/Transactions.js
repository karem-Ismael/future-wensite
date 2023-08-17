import { useSelector } from "react-redux"
import moment from "moment";
import { Badge } from "antd";

const Transactions=()=>{
    const { WalletTransactionsArr,WalletBalance } = useSelector((state) => state.profile) || {}

return(
    <div>
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
                                                حالة المعاملة
                                            </th>

                                        </thead>
                                        <tbody>
                                            {
                                                WalletTransactionsArr?.data?.length ?
                                                    WalletTransactionsArr.data?.map((transaction) => (
                                                        <tr>
                                                            <td>

                                                                {
                                                                    JSON.parse(transaction.meta)?.service?.title

                                                                }
                                                            </td>
                                                            <td>

                                                                {
                                                                    JSON.parse(transaction.meta)?.service?.field?.name

                                                                }
                                                            </td>
                                                            <td>

                                                                {
                                                                    transaction?.transaction_amount
                                                                }
                                                            </td>
                                                            <td>

                                                                {
                                                                    moment(transaction?.created_at).locale("ar").format('DD MMM YYYY h:mm:ss a')

                                                                }
                                                            </td>
                                                            <td>

                                                                {
                                                                    transaction.status ==1 ?
                                                                    <Badge count={ "مكتملة"} showZero color='green' />
                                                                    
                                                                    : 
                                                                    transaction.status ==0 ? 
                                                                    <Badge count={ "جاري العمل"} showZero color='#00A8FF' />

                                                                       : 
                                                                    <Badge count={"غير مكتملة" } showZero color='red' />
                                                                       
                                                                       

                                                                }
                                                            </td>
                                                        </tr>


                                                    ))
                                                    : null
                                            }
                                        </tbody>
                     
                                    </table>
    </div>
)
}
export default Transactions