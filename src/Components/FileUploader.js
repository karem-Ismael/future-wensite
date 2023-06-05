/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useRef } from "react";
import { Spin } from "antd";
const maxSize = 1024 * 20;
function FileUpload({
  titleId,
  image,
  setImage,
  required,
  loading,
  error,
  name,
  remove,
  imgremove = false,
  loader = false,
  imgheight = 400,
  imgwidth = 600,
  setLoader,
}) {
  useEffect(
    () => () => {
      const item = document.querySelector(`#${titleId}`);
      if (item) {
        item.value = "";
      }
    },
    [],
  );
  const inputFile = useRef(null);
    

  return (
    <div className={`form-group mb-4 ${required ? "required" : ""}`}>
      
      <div className="col-md-12">
        <div className="fileinput fileinput-new">
          <div className="card text-center" style={{position:"relative",padding:"20px"}} >
            {!loader ? (
              <img className="m-auto" style={{cursor:"pointer",maxWidth:loading ?"150px" :"150px"}}  onClick={()=>{
                !image ?  inputFile.current.click() : inputFile.current.click()
              }}  src={loading ? "/assets/images/ic-upload.png" : image || "/assets/images/ic-upload.png"} alt={titleId || ""}  />
            ) : (
              <Spin />
            )}
              <input type="hidden" />
              <input
              style={{display:"none"}}
                name={titleId}
                id={titleId}
                ref={inputFile}
                type="file"
                accept="image/jpeg, jpeg, png, image/png, gif, image/gif"
                onChange={(e) => {
                  const file = e.target.files[0];
                   
                  setImage(file)
                }}
              />
              <p>
                {name}
              </p>
          </div>
          <div className="fileinput-preview fileinput-exists thumbnail"> </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  );
}

FileUpload.propTypes = {
  titleId: PropTypes.string,
  image: PropTypes.any,
  required: PropTypes.bool,
  loading: PropTypes.bool,
  error: PropTypes.bool,
  setImage: PropTypes.func,
  imgremove: PropTypes.bool,
  remove: PropTypes.func,
  loader: PropTypes.bool,
};

export default FileUpload;
