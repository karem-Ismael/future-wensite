import { useSelector } from "react-redux"
import moment from "moment";
import { Badge } from "antd";

const WalletChargeTransactions=()=>{
    const { WalletTransactionsArr,WalletBalance,AllWalletTransactionsArr } = useSelector((state) => state.profile) || {}
return(
    <div>
         <table className="table table-hover table-responsive w-100 table-wallet mt-2">
                                        <thead>
                                            <th>
                                                المعاملة
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
                                                AllWalletTransactionsArr?.length ?
                                                AllWalletTransactionsArr?.map((transaction) => (
                                                        <tr>
                                                            <td>

                                                                {
                                                                   transaction?.description

                                                                }
                                                            </td>
                                                         
                                                            <td>

                                                                {
                                                                    transaction?.amount
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
                                                                       transaction.status == -1 ?
                                                                    <Badge count={"غير مكتملة" } showZero color='red' />
                                                                    :transaction?.status =="paid" ? 
                                                                    <Badge count={transaction?.status} showZero color='green' /> :
                                                                    transaction?.status =="failed" ? 
                                                                    <Badge count={transaction?.status} showZero color='red' /> 
                                                                       
                                                                       : transaction?.status =="waiting" ? 
                                                                    <Badge count={transaction?.status} showZero color='#EEB656' /> 
                                                                    :transaction?.status
                                                                       

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
export default WalletChargeTransactions