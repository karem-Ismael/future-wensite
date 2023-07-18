/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Spin } from 'antd';
import { EditOutlined } from '@ant-design/icons';

const maxSize = 1024 * 20;
function ImageUpload({
  titleId,
  image,
  setImage,
  required,
  loading,
  error,
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
const fileRef=useRef()
  return (
    <div className={`form-group ${required ? "required" : ""}`}>
   
    
      <div className="col-md-12">
        <div className="fileinput fileinput-new">
          <div className="card" style={{position:"relative"}} >
            {!loader ? (
              <img width="100%" style={{maxHeight:"150px"}} src={loading ? "/assets/images/no-image.jpg" : image || "/assets/images/no-image.jpg"} alt={titleId || ""} />
            ) : (
              <Spin />
            )}

<span className="btn  default btn-file" onClick={()=>fileRef.current.click()} style={{position:"absolute",bottom:"9px",right:"45%",background:"#00D0F1",color:"#fff",height:"35px"}}>
              <span className="fileinput-new">
                {" "}
                <EditOutlined />
              </span>

              <input type="hidden" />
              <input
                name={titleId}
                id={titleId}
                ref={fileRef}
                type="file"
                style={{display:"none"}}
                accept="image/jpeg, jpeg, png, image/png, gif, image/gif"
                onChange={(e) => {
                  const file = e.target.files[0];
                   
                  setImage(file)
                }}
              />
            </span>
          </div>
        
          <div className="fileinput-preview fileinput-exists thumbnail"> </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  );
}

ImageUpload.propTypes = {
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

export default ImageUpload;
