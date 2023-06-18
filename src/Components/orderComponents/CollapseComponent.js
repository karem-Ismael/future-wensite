import React, { useState } from "react";
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const CollapseComponent = ({idx,service,record}) => {
  const [open, setOpen] = useState(false);
  console.log(record,"record")
console.log(JSON.parse(service?.stages_of_delivery),"karem" , record?.count_type )
  return (
    <>
      <tr key={JSON.stringify(idx)} data-testid={`data-tr-${idx}`}>
        <td key={JSON.stringify(idx)}>
          <IconButton
          style={{border:"1px solid #A5A5A5"}}
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </td>
        {["title", "count", "3"]?.map((data, index) => (
          <>
            <td key={JSON.stringify(index)} align={`${data || ""}`}>
                { index ==1 ? 
                <>
                {record?.[data]}
                { record?.["count_type"] ?  record?.["count_type"] : "s"}
                </>
                : index ==2 ?  <>
                <h1><span class="badge badge-primary">جاري العمل</span></h1>
                </>:  record?.[data]}
            </td>
          </>
        ))}
      </tr>
      <tr>
      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <div className="w-100 text-center">
                لا توجد بيانات
            </div>
            </Collapse>
      </TableCell>
      
      </tr>
    </>
  );
};

export default CollapseComponent;
