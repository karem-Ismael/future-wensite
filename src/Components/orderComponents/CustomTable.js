/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable eqeqeq */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/**
 * Custom Table
 */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Spin } from 'antd';

import { Alert } from "./constants";
import CellData from "./CellData";
function CustomTable({
  tableData,
  tableRecords,
  actions,
  dropdownActions,
  loading,
  actionsArgs,
  setCarIds,
  carIds,
  AssignBooking,
  RefundBooking,
  withcheckbox = false,
  setAllChecked,
  allchecked,
  
 
}) {
  const [open, setOpen] = useState(false);
  const locale="ar"
  const handleClose = () => setOpen(false);
  const onSelectAllClick = (e) => {
    if (e.target.checked) {
      setAllChecked(true);
      const ids = [];
      tableRecords.map((record) => ids.push(record.id));
      setCarIds(ids);
    } else {
      setAllChecked(false);
      setCarIds([]);
    }
  };
  const onSingleCheck = (e, index, record) => {
    const ids = [...carIds];
    if (e.target.checked) {
      setCarIds([...carIds, record.id]);
    } else {
      const filteredids = ids.filter((id) => id != record.id);
      setCarIds(filteredids);
    }
  };
  return (
    <>
      <div className="table-responsive" style={{position:"relative"}}>
        <table className="table table-hover">
          <thead>
            <tr data-testid="header-row">
            
              {tableData?.map((header, idx) => (
                <th key={JSON.stringify(idx)} align="center">
                  <div
                    key={header?.headerId}
                    role="button"
                    className={`${header?.withAction ? "pointer" : ""}`}
                    // onKeyDown={() => header?.handleAction()}
                    // onClick={() => header?.handleAction()}
                    tabIndex={0}
                  >
                    <span data-testid="capitalized-header" style={{ textTransform: "capitalize" }}>
                     
                    
                        {
                          header?.headerId
                        }
                      
                    
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {tableRecords?.map((record, idx) => (
              <tr key={JSON.stringify(idx)} data-testid={`data-tr-${idx}`}>
               
                {tableData.map((data, index) => (
                  <>
                    <td key={JSON.stringify(index)} align={`${data?.align || ""}`}>
                      {CellData({
                        data,
                        record,
                        locale,
                        actions,
                        actionsArgs,
                        dropdownActions,
                        AssignBooking,
                        RefundBooking,
                      })}
             
                    </td>
                  </>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {tableRecords && tableRecords.length === 0 && (
          <div className="text-center mt-3 mb-4">
            No data found
          </div>
        )}
      </div>
      { loading && (
        <div className="d-flex justify-content-center align-items-center" >
          <Spin />
        </div>
      )}
    </>
  );
}

CustomTable.propTypes = {
  tableData: PropTypes.array,
  tableRecords: PropTypes.array,
  actionsArgs: PropTypes.array,
  actions: PropTypes.any,
  loading: PropTypes.bool,
};

export default CustomTable;

