// import { makeStyles } from '@material-ui/core/styles';
import React,{useRef, useState} from"react";
import PropTypes from 'prop-types';
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
import { useDispatch, useSelector } from 'react-redux';
import StatusDropDown from './orderComponents/StatusDropDown';
import { OrderDetailsAction } from '@/store/orders/action';
import axios from 'axios';
import {
  DownloadOutlined,
  DeleteOutlined
} from '@ant-design/icons'
import moment from "moment"
const client = axios.create({
  baseURL: "https://estithmar.arabia-it.net/api",
});
// const useRowStyles = makeStyles({
//   root: {
//     '& > *': {
//       borderBottom: 'unset',
//     },
//   },
// });

function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
    
    ],
  };
}

function Row(props) {
  const { row ,serviceRequestId,setOrder} = props;
  const [open, setOpen] = React.useState(false);
  // const classes = useRowStyles();
  const [loader,setLoader]=useState()
  const [EnImage,setEnImage]=useState()
  const inputFile = useRef(null);
  const {user} =useSelector(state=>state.authentication.login_data) || {}
  const {orderDetails,tabsView} =useSelector((state)=>state.orders)||{}

const dispatch=useDispatch()
  const uploadEnimage = (file,row) => {
    setLoader(true);
    const formdata = new FormData();
    formdata.append("request_deliveries_id", row.id);
    formdata.append("file", file);
    formdata.append("token",localStorage.getItem("token") );

    formdata.append("_method","PUT")
    
    client
      .post(`/asset-owner/request/${serviceRequestId}`, formdata, {
        headers: {
          "Content-Type": "multipart/form-data; ",
        },
      })
      .then((res) => {
       
        client.get(`/asset-owner/request/${serviceRequestId}?token=${localStorage.getItem("token")}`).then((res)=>{
  
          dispatch(OrderDetailsAction(res.data.data))
      
        })
     
      });
  };
  const DeleteFile=(id)=>{
    client.delete(`/asset-owner/request/${id}?delete_file=true&token=${localStorage.getItem("token")}`).then((res)=>{
      client.get(`/asset-owner/request/${orderDetails.id}?token=${localStorage.getItem("token")}`).then(res=>{
        setOrder(res.data.data)
        dispatch(OrderDetailsAction(res.data.data))

      })
    })
  
  }
  return (
    <React.Fragment>
      <TableRow style={{marginBottom:"30px"}}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.title}
        </TableCell>
        <TableCell align="right">{row.count || row.days_of_work} { row?.days_of_work  ? "يوم":row["count_type"]}</TableCell>
        <TableCell align="right">
          {/* <StatusDropDown /> */}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1} style={{marginBottom:"50px"}}>
              <div className='container'>
              <div className='row justify-content-between'>
                <div style={{width:"fit-content"}}>
                  <p>
                  مزود الخدمة
                  </p>
                  <p>
                  حالة المرحلة
                </p>
                <div>
                <StatusDropDown borderId={row.id} inbordertable={true} notAllowed={user.category!="service-provider" ? true :false} activationStatus={row?.provider_status} />
                </div>
                </div>
                <div style={{width:"fit-content"}}>
                <p>
                  الوقف     
                </p>
                <p>
                  حالة المرحلة
                </p>
                <div>
                <StatusDropDown  inWakfStatus={true} borderId={row.id} orderId={orderDetails.id}  wakf={true} activationStatus={row?.owner_status} />
                </div>
                </div>
               
              </div>
              {
                <>
                <div>
                   <table className="table table-hover w-100 mt-2">
                <thead>
                    <th>
                     ID
                    </th>
                    <th>
                     الملف
                    </th>
                    <th>
                    بواسطة
                    </th>
                    <th>
                    التاريخ
                    </th>
                    <th>
                    </th>
                   
                  </thead>
                  <tbody>
                    {
                        row.request_delivery_files.map((file,index)=><tr>
                            <td>{index +1}</td>
                            <td>{file?.title}</td>
                            <td>{file?.user?.name}</td>
                            <td>{moment(file.created_at).locale("ar").format('DD MMM YYYY')}</td>
                            <td className="d-flex justify-content-center" style={{gap:"10px"}}>
                              <button className="btn btn-info"> 
                              <a href={`https://estithmar.arabia-it.net${file.file}`} target="_blank" download={`https://estithmar.arabia-it.net${file.file}`}>
                              <DownloadOutlined />
                              </a>
                              </button>
                              <button  onClick={()=>DeleteFile(file.id)} className="btn btn-danger"> 
                              <DeleteOutlined />
                              </button>
                            </td>

                        </tr>)
                    }

                  </tbody>
              </table>
                </div>
                
                              <div className='d-flex justify-content-end'>
                             
                              <div style={{alignSelf:"end"}}>
                                <button 
                                onClick={()=>{
                                    if(row.id){
                                  inputFile.current.click()

                                    }
                                }}
                                style={{marginTop:"10px",background:"#fff",borderColor:"#150941",color:"#150941",fontSize:"14px",padding:"4px 10px"}}> 
                                  <img src={"/assets/images/ic-upload.png"} style={{width:"19px"}}/>
                                 {" "}
                                  ارفاق ملفات
                                </button>
                                <input
                                  style={{display:"none"}}
                                    ref={inputFile}
                                    type="file"
                                    accept="image/jpeg, jpeg, png, image/png, gif, image/gif"
                                    onChange={(e) => {
                                      const file = e.target.files[0];
                                      uploadEnimage(file,row)
                                      // setImage(file)
                                    }}
                            />
                              </div>
                            </div>
                </>

              }
              </div>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};



export default function CollapsibleTable({Delivery,serviceRequestId,setOrder}) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>المرحلة</TableCell>
            <TableCell align="right">مدة التنفيذ</TableCell>
            <TableCell align="right">مستلم الخدمة</TableCell>
            <TableCell />
            <TableCell />

          </TableRow>
        </TableHead>
        <TableBody>
          {Delivery.map((row) => (
            <Row key={row.title} row={row} serviceRequestId={serviceRequestId} setOrder={setOrder}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}