/** Bookings List */
import React, { useEffect,useState } from "react";
// import { Link, useRoute } from "react-router-dom";
import PropTypes from "prop-types";
import {Tooltip } from "antd";
import { Pagination } from 'antd';
import  { EyeOutlined } from '@ant-design/icons';

import CardComponent from "../Card";
import CustomTable from "./CustomTable";
import { OrderData } from "./OrderData";
import StatusDropDown from "./StatusDropDown"

import axios from "axios"
import Link from "next/link";
import { useRouter } from "next/router";
import { FiltersAndSearches } from "./FiltersAndSearches";
import OrderDetailsComponent from "../OrderDetailsComponent";
import { OrderDetails, OrderDetailsAction } from "@/store/orders/action";
import { useDispatch, useSelector } from "react-redux";
const client = axios.create({
  baseURL: "https://estithmar.arabia-it.net/api" 
 
});
function OrderList({ allowners, loading, limit, setLimit ,status}) {
  const router = useRouter();
  const dispatch=useDispatch()
  const [query,setQuery]=useState({})
  const[page,setPage]=useState(1)
  const[tableview,setTableView]=useState(true)
  const {orderDetails} =useSelector((state)=>state.orders)||{}
  const [owners, setOwners] = useState({
    collection: [],
    metadata: {},
  });
  const { collection ,metadata} = owners;
  const[orderid,setOrderId]=useState()
  useEffect(() => {
    
    if(localStorage.getItem("token")){
   
      client.get(`/asset-owner/request?token=${localStorage.getItem("token")}`,
      {
        params:{
          limit:10,
          page,
          service_provider_id: query.service_provider_id ? query.service_provider_id : undefined,
          status: query.status ? query.status : undefined,
        }
      }
      ).then(data=>{
        setOwners({
      collection: data?.data.data.data,
      metadata: {
        totalCount:data?.data.data.total,
        currentPage:data?.data.data.current_page
      }, 
    });
      })
    }
  }, [query,page]);


const getOrderDetails=(id)=>{
  client.get(`/asset-owner/request/${id}?token=${localStorage.getItem("token")}`).then((res)=>{
  
    dispatch(OrderDetailsAction(res.data.data))
  setTableView(false)

  })
}
  const actions = ({ id }) => (
    <div className="d-flex align-items-center m-2" style={{ gap: "5px" }}>
      {/* Redirects to Car details */}

      
        <Tooltip title={ "common.edit"} placement="top">
          {/* <Link href={`orderDetails/${id}`} className="w-100 tex-center"> */}
            <button onClick={()=>{
              getOrderDetails(id)
              
            }} className="border-0 w-100" style={{background:"#23D381",color:"#fff"}}>
            <i className=" ti-eye m-1"></i>
            <EyeOutlined />

            </button>
          {/* </Link>  */}
        </Tooltip>
    </div>
  );
  const dropdownActions =(record)=>(
    <StatusDropDown inorder={true} status={status} activationStatus={record.status} id={record.id} client={client} url={`asset-owner/request/${record.id}`}/>
  )
  return (
    <>
    <div component="div" style={{ padding: "10px", marginTop: "20px" }}>
      {
        tableview ? 
        <>
        <div>
          <CardComponent>
          <div className="row">
                <FiltersAndSearches
                  make="make"
                  submitbtnid="search.filter"
                  filters={["status","service_provider"]}
                  query={query}
                  setPage={setPage}
                  setQuery={setQuery}
                
                />
              </div>
            <CustomTable
              tableData={OrderData}
              loading={loading}
              tableRecords={collection}
              actions={actions}
              actionsArgs={["id"]}
              dropdownActions={dropdownActions}
            />
          </CardComponent>
        </div>
        <div className="d-flex justify-content-around">
          {metadata?.currentPage && (
            <>
            
                <Pagination 
                size="small"
                defaultCurrent={page}
                // current={page}
                onChange={(page)=>setPage(page)}
                pageSize={10}
                showSizeChanger={false}
                 total={metadata.totalCount}
                  />
              
            </>
          )}
        </div>
        </>
        
        
        : <OrderDetailsComponent order={orderDetails}/>
      }
    </div>
      
    </>
    
  );
}

OrderList.propTypes = {
  setPage: PropTypes.func,
  setLimit: PropTypes.func,
  refetch: PropTypes.func,
  loading: PropTypes.bool,
  allservices: PropTypes.object,
  limit: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default OrderList;
