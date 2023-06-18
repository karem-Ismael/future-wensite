

import React from "react"
import CollapseComponent from "./CollapseComponent"

const StagesTable=({withcheckbox,service})=>{
    return(
        <>
        <p className="title m-0" style={{position:"relative"}}>
        مراحل التسليم
        </p>
        <table className="table table-hover mt-4" style={{borderBottom:"1px solid #eee"}}>
        <thead>
          <tr data-testid="header-row">
            {withcheckbox && (
              <th>
                <Checkbox
                  // indeterminate={numSelected > 0 && numSelected < rowCount}
                  checked={allchecked}
                  onChange={onSelectAllClick}
                  inputProps={{ "aria-label": "select all desserts" }}
                />
              </th>
            )}
            {["","المرحلة","مدة التنفيذ","مستلم الخدمة"]?.map((header, idx) => (
              <th key={JSON.stringify(idx)} align="center">
                <div
                  key={header}
                  role="button"
                  className={"pointer"}
                  // onKeyDown={() => header?.handleAction()}
                  // onClick={() => header?.handleAction()}
                  tabIndex={0}
                >
                  <span data-testid="capitalized-header" style={{ textTransform: "capitalize" }}>
                   
                  
                      
                    { header?.length ? header : null}
                    
                  
                  </span>
                </div>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          { service && JSON.parse(service?.stages_of_delivery)?.map((record, idx) => (
            <>
                <CollapseComponent  idx={idx} service={service} record={record}/>
            </>

          ))}
        </tbody>
      </table>
      </>

    )
}
export default StagesTable