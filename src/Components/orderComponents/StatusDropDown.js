import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

function StatusDropDown(props) {
  // status={status} activationStatus
  const [activeStatus,setActiveStatus]=useState()
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const {user} =useSelector(state=>state.authentication.login_data) || {}

useEffect(()=>{
  if(props.activationStatus !=undefined){
    const activeStatus =  [
      {name:"مفعل",id:1},
      {name:"قيد الانتظار",id:0},
      {name:"مرفوض",id:-1},
  ].find(one=>one.id == props.activationStatus)
    setActiveStatus(activeStatus)
  }
},[props.activationStatus])
const changeStatus=(status)=>{
  setActiveStatus(status)
  // if(props.wakf){
  //   props.client.put(`${props.url}`,{
  //     owner_status : 1,
  //   request_deliveries_id: 34,
  //     token:user.access_token
      
  //   }).then(res=>console.log(res,"res active"))
  //   return
  // }
  if(props.wakf){
    
    const clientUrl=
    axios.create({
      baseURL: "https://estithmar.arabia-it.net/api/asset-owner/",
    });

    clientUrl.put(`/request/${props.orderId}`,{
      owner_status:status.id,
      token:localStorage.getItem("token"),
      request_deliveries_id : props.borderId,

    }).then(res=>console.log(res,"res active"))
    return
  }
  if(props.inorder){
    props.client.put(`${props.url}`,{
      status:status.id,
      // token:user.access_token
    }).then(res=>console.log(res,"res active"))
    
  }else{
    props.client.put(`${props.url}`,{
      type : "activate",
      activate_id:status.id,
      token:user.access_token
    }).then(res=>console.log(res,"res active"))
  }
  
}
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle} {...props}>
      <DropdownToggle disabled={(user?.category != "admin" || props.notAllowed) && !props.wakf} caret size="md" style={{background:activeStatus?.title == 
"قيد الانتظار" ?  "#EEB656":  "",border:"none",width:"fit-content"}}>
        {activeStatus?.name}
      </DropdownToggle>
      <DropdownMenu>
        {
           [
            {name:"مفعل",id:1},
            {name:"قيد الانتظار",id:0},
            {name:"مرفوض",id:-1},
        ].map((onestatus)=>(
            <DropdownItem onClick={()=>changeStatus(onestatus)}>{onestatus.name}</DropdownItem>
           ))
        }     
      </DropdownMenu>
    </Dropdown>
  );
}
export default StatusDropDown;