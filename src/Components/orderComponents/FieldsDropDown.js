import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Select, { components } from "react-select";
import axios from "axios"
import { Spin ,Button} from "antd";

const client = axios.create({
  baseURL: "https://estithmar.arabia-it.net/api/admin" 
 
});
const Menu = (props) => (
    
  <>
    <components.Menu {...props}>
      <div style={{ minHeight: "auto" }} className="d-flex flex-column">
        <div style={{ flex: "1 0 auto" }}>
          {props.selectProps.fetchingData ? (
            <span className="fetching">
              <Spin />
            </span>
          ) : (
            <div>{props.children}</div>
          )}
        </div>
          <Button
            onClick={props.selectProps.nextPage}
            disabled={
              +props?.selectProps?.pagination?.currentPage ===
              +props?.selectProps?.pagination?.last_page
            }
          >
            التالي
          </Button>
          <Button
            onClick={props.selectProps.previousPage}
            disabled={+props?.selectProps?.pagination?.currentPage === 1}
          >
            السابق
          </Button>
      </div>
    </components.Menu>
  </>
);

Menu.propTypes = {
  selectProps: PropTypes.any,
  children: PropTypes.any,
};

const Option = (props) => (
  <>
    <components.Option {...props}>{props.children}</components.Option>
  </>
);

Option.propTypes = {
  children: PropTypes.any,
};

const FieldsDropDown = ({
  fetchingData,
  onChange,
  selectedItem,
  ...props
}) => {
    const [options,setOptions]=useState([])
    const [pagination,setPagintation]=useState()
    const [page,setPage]=useState(1)

    const incPage = () => setPage((pg) => pg + 1);
    const decPage = () => setPage((pg) => pg - 1);
    useEffect(()=>{
        client.get("/service-provider-fields" ,{
          params:{
            page,
            limit:10
          }
        }).then((res)=>{
          const Alloptions =res.data.data.data.map(field=>(
            {
              label:field.name,
              value:field.id
            }
          ))
          setOptions(Alloptions)
          setPagintation({
              last_page:res.data.data?.last_page,
              currentPage:res.data.data?.current_page
          })
        })
      
        
      },[page])
  return (
    <div>
      <Select
        className="dropdown-select"
        options={options}
        pagination={pagination}
        components={{ Menu, Option }}
        placeholder={"اختر مجال الخدمات"}
      value={options.find((optn) => +optn.value == +selectedItem)}

        fetchingData={fetchingData}
        nextPage={() => incPage()}
        previousPage={() => decPage()}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

FieldsDropDown.propTypes = {
  options: PropTypes.array,
  nextPage: PropTypes.func,
  previousPage: PropTypes.func,
  fetchingData: PropTypes.bool,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  pagination: PropTypes.object,
};

export default FieldsDropDown;
