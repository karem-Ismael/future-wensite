/* eslint-disable no-unused-expressions */
/* eslint-disable prettier/prettier */
/* eslint-disable eqeqeq */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
/* eslint-disable radix */
import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Alert } from "./constants";
import { Button } from "antd";


// import AllyName from "components/DropDowns/AllyName";
import DropDownStatus from "./DropDownStatus";
import FieldsDropDown from "./FieldsDropDown";
import ServiceProviderDropDown from "./ServiceProviderDropDown";
import Select from "react-select";
import { useSelector } from "react-redux";
import { FormGroup, Input, Label } from "reactstrap";

const trimFields = ["email", "nid"];

export function FiltersAndSearches({
  fields,
  filters,
  refetch,
  submitbtnid,
  setQuery,
  minimumDate,
  maximumDate,
  extraButtons,
  mobile,
  mobileRef,
  setPage,
  role,
  is_active,
  make,
  model,
  car,
  multi,
  manager,
  branch,
  branchmanager,
  coupoun,
  branchesDeletedFilter,
  isDeltedFilterSelected,
  setValue,
  setPageSelect,
  options,
  metadata,
}) {
  const submitBtnRef = useRef();
  const [collectedQuery, setcollectedQuery] = useState({});

  // NOTE: Mobile number is set twice.

  /**
   * depends on history location search on mount
   * if we have values this function should pass all values to the corresponding field
   */

  function clearInputs() {
    setMobileNumber("");
    setValue ? setValue(0) : null;
    const query = {};
    setPickupDate(null);
    setDropoffDate(null);
    setPage(1);
    setcollectedQuery(query);
    setQuery(query);
  }
  const {user} =useSelector(state=>state.authentication.login_data) || {}

  return (
    <form className="w-100" onSubmit={(e) => e.preventDefault()}>
      <div className="row grid-gap-10 w-100 m-0">
        {fields
          ?.filter((field) => field?.type === "search")
          .map((field) => {
            if (!field.name) return Alert("Please Provide a name");
            return (
              <div className={ role ? "col-sm-12 col-md-10 mt-1"  : "col-sm-12 col-md-3 mt-1"} key={field?.name}>
                <FormGroup>
                  <Label for="exampleEmail">
                    {field?.label}
                  </Label>
                  <Input
                    style={{ borderColor: "#7EA831" }}
                    id={field?.name}
                    name={
                      field?.placeholder || (
                        field?.name
                      )
                    }
                    placeholder={field.placeholder}
                    onChange={(e) => {
                      setcollectedQuery({
                        ...collectedQuery,
                        [field?.name]: trimFields.includes(field.name)
                          ? e.target.value.trim()
                          : e.target.value.trimStart(),
                      });
                    }}
                    type="text"
                  />
                </FormGroup>
              </div>
            );
          })}
 
        {filters?.includes("fields") && (
          <div className="col-md-3 mt-1">
            <FormGroup>
              <Label for="exampleEmail">
                قائمة التصنيفات
              </Label>

              <FieldsDropDown
                onChange={(sel) => {
                  setcollectedQuery({ ...collectedQuery, field_id: sel.value });
                }}
              />
            </FormGroup>
          </div>
        )}
        {filters?.includes("service_provider")  && user?.category != "service-provider" && (
          <div className="col-md-3 mt-1">
            <FormGroup>
              <Label for="exampleEmail">
              مزود الخدمة
              </Label>

              <ServiceProviderDropDown
                onChange={(sel) => {
                  setcollectedQuery({ ...collectedQuery, service_provider_id: sel.value });
                }}
              />
            </FormGroup>
          </div>
        )}
       {filters?.includes("status") && (
          <div className="col-md-2 mt-1">
            <FormGroup>
              <Label for="exampleEmail">
                االحالة
              </Label>
              <DropDownStatus
                valueAttribute="id"
                selectedStatus={collectedQuery?.status}
                onChange={(status) => {
                  return setcollectedQuery({ ...collectedQuery, status: status.value == 0 ? "0" :status.value });
                }}
              />
            </FormGroup>
          </div>
        )}
        {
          filters?.includes("support") && (
            <div className="col-md-2 mt-1">
            <FormGroup>
              <Label for="exampleEmail">
                الدعم
              </Label>
              <Select
              options={[
                {label:"مدعوم",value:"1"},
                {label:"غير مدعوم",value:"0"}
            ]}
              placeholder="عرض الكل"
                onChange={(sel) => {
                  return setcollectedQuery({ ...collectedQuery, support_ratio: sel.value });
                }}
              />
            </FormGroup>
          </div>
          )
        }
        <div
          className="mt-1 d-flex flex-row justify-content-end"
          style={{ alignSelf: "center" ,width:"fit-content"}}
        >
          <Button
            size="large"
            style={{
              background: "#7EA831",
              width: "200px",
              fontWeight: "bold",
              color:"#fff"
            }}
            className="mx-smt-15 btn  mr-1 ml-1"
            type="submit"
            ref={submitBtnRef}
            onClick={() => {
              const trimmedQuery = {};
             
              Object.entries(collectedQuery).forEach(([key, val]) => {
                trimmedQuery[key] = typeof val === "string" ? val?.trim() : val;
              });
              setPage(1);
              setQuery(trimmedQuery);
            }}
          >
            <span className="mr-1 ml-1">
              تصفية
            </span>
          </Button>
          {/* <Button
            variant="contained"
            color="primary"
            className="mx-smt-15 btn btn-danger mr-1 ml-1"
            onClick={() => {
              clearInputs();
              history.replace({ search: "" });
            }}
          >
            <span className="mr-1 ml-1">
              <FormattedMessage id="clear" />
            </span>
            <i className="zmdi zmdi-delete ml-1 mr-1" />
          </Button> */}
          {extraButtons}
        </div>
      </div>
    </form>
  );
}

FiltersAndSearches.propTypes = {
  setPage: PropTypes.func,
  setQuery: PropTypes.func,
  submitbtnid: PropTypes.string,
  maximumDate: PropTypes.string,
  minimumDate: PropTypes.string,
  mobileRef: PropTypes.string,
  mobile: PropTypes.bool,
  fields: PropTypes.array,
  filters: PropTypes.array,
  is_active: PropTypes.string,
  multi: PropTypes.bool,
  model: PropTypes.string,
  make: PropTypes.string,
  // refetch: PropTypes.func.isRequired,
  extraButtons: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};
