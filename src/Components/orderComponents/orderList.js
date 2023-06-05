/** Bookings List */
import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { Typography, Tooltip } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import useSetState from "Hooks/useSetState";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import CustomTable from "Components/shared/CustomTable";
import { OrderData } from "./OrderData";
import StatusDropDown from "Components/shared/StatusDropDown"
import PerPage from "Components/shared/PerPage";

import axios from "axios"
const client = axios.create({
  baseURL: "https://estithmar.arabia-it.net/api/admin" 
 
});
function OrderList({ allowners, loading, setPage, limit, setLimit ,status}) {
  const history = useHistory();
  const [owners, setOwners] = useSetState({
    collection: [],
    metadata: {},
  });
  const { collection ,metadata} = owners;
  useEffect(() => {
    setOwners({
      collection: allowners?.data,
      metadata: {
        totalCount:allowners?.total,
        currentPage:allowners?.current_page
      }, 
    });
  }, [allowners]);



  const actions = ({ id }) => (
    <div className="d-flex align-items-center" style={{ gap: "5px" }}>
      {/* Redirects to Car details */}

      
        <Tooltip title={ "common.edit"} placement="top">
          <Link to={`/app/orders/${id}`}>
            <button className="border-0" style={{background:"#23D381",color:"#fff"}}>
            <i className=" ti-eye m-1"></i>

            </button>
          </Link>
        </Tooltip>
    </div>
  );
  const dropdownActions =(record)=>(
    <StatusDropDown inorder={true} status={status} activationStatus={record.status} id={record.id} client={client} url={`service-request/${record.id}`}/>
  )
  return (
    <Typography component="div" style={{ padding: "10px", marginTop: "20px" }}>
      <div>
        <RctCollapsibleCard fullBlock table>
          <CustomTable
            tableData={OrderData}
            loading={loading}
            tableRecords={collection}
            actions={actions}
            actionsArgs={["id"]}
            dropdownActions={dropdownActions}
          />
        </RctCollapsibleCard>
      </div>
      <div className="d-flex justify-content-around">
        {metadata?.currentPage && (
          <>
            <Pagination
              count={Math.ceil(metadata?.totalCount / limit)}
              page={metadata?.currentPage}
              onChange={(e, value) => {
                setPage(value);
                history.replace({ hash: `page=${value}` });
              }}
            />
            <PerPage
              specialPagination={[10, 20, 40, 80, 100]}
              handlePerPageChange={(value) => setLimit(value)}
              perPage={limit}
              setPage={setPage}
            />
          </>
        )}
      </div>
    </Typography>
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
