import { CustomerInvoice } from "@/store/Profile/action"
import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import  { EyeOutlined } from '@ant-design/icons';
import InvoiceDetailsComponent from "./InvoiceDetails";
   
const Invoice=()=>{
    const { WalletTransactionsArr,InVoicesArr } = useSelector((state) => state.profile) || {}
    const [InvoiceDetails,setInvoicedDetails]=useState()
    const dispatch=useDispatch()
    useEffect(() => {
        axios.post(`https://estithmar.arabia-it.net/api/auth/invoices`, {
            token: localStorage.getItem("token")
        }).then((data) => {
            dispatch(CustomerInvoice(data.data.data))
        }
        )
   
    }, [])
    return(
            !InvoiceDetails ? 
            
            <table className="table table-hover table-responsive w-100 table-wallet mt-2">
            <thead>
                <th>
                    ID
                </th>
                <th>
                فاتورة ضريبية
                </th>
                <th>
                تاريخ الفاتورة
                </th>
                <th>
                الخدمة
                </th>
                <th>
                المبلغ 
                </th>
                <th>
                 
                </th>
    
            </thead>
            <tbody>
                {
                    InVoicesArr?.data?.length  ?
                    InVoicesArr.data?.map((Invoice) => (
                            <tr>
                                <td>
                                    {Invoice.id}
                                </td>
                                <td>
    
                                    {
                                        // JSON.parse(transaction.meta)?.service?.title
                                        Invoice?.code
    
    
                                    }
                                </td>
                                <td>
    
                                    {
                                        // JSON.parse(transaction.meta)?.service?.field?.name
    
                                    }
                                </td>
                                <td>
    
                                    {
                                        Invoice?.service_name
    
                                        // transaction?.transaction_amount
                                    }
                                </td>
                                <td>
    
                                    {
                                        Invoice?.cost
    
                                        // moment(transaction?.created_at).locale("ar").format('DD MMM YYYY h:mm:ss a')
    
                                    }
                                </td>
                                <td>
    
                                    {
                                        <button onClick={()=>{
                                            setInvoicedDetails(Invoice)
                                          }} className="border-0 w-100" style={{background:"#23D381",color:"#fff"}}>
                                          <i className=" ti-eye m-1"></i>
                                          <EyeOutlined />
                              
                                          </button>
    
                                    }
                                </td>
                            </tr>
    
    
                        ))
                        : null
                }
            </tbody>
         
            </table>
            : <div>
                <InvoiceDetailsComponent  InvoiceDetails={InvoiceDetails}/>
            </div>

       

    )
}
export default Invoice