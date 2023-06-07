import React, { useState } from "react";
import Select from "react-select";

const DropDownStatus = ({onChange,selectedItem}) => {
  const [options, setOptions] = useState([
    { label: "مفعل", value: 1 },
    { label: "قيد الانتظار", value: 0 },
    { label: "مرفوض", value: -1 },
  ]);
  return (
    <>
      {/* <Select className="form-control p-0" label={"الحاله"} native input={<Input  id="age-native-helper" 
    onChange={(e)=>{
        setSelecteStatus(e.target.value)
    }}
    />}>
      <option value="" />
      {
        options.map((Item)=><option value={Item.id} >{Item.name}</option>)
      }
     
    </Select> */}
      <Select
        options={options}
        placeholder="الحاله"
        onChange={onChange}
      value={options.find((optn) => +optn.value == +selectedItem)}       
      />
    </>
  );
};
export default DropDownStatus;
