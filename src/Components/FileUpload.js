
import React, { useEffect } from "react";
import { useRef } from "react";
import { Col, Rate, Row, Select, Button, Carousel } from 'antd';
import { CheckOutlined,CloseOutlined,PlusOutlined  } from "@ant-design/icons"

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
    <div className={`form-group ${required ? "required" : ""}`}>
        
    
          <div style={{position:"relative"}} >
             <Button onClick={()=>inputFile.current.click()} style={{  background: "#38DCBB80", color: "#150941", border: "none", borderRadius: "0px" }} size={"small"}
                                >
                                    <PlusOutlined />
                                    إدراج الملفات

                                </Button>
              <input type="hidden" />
              <input
              style={{display:"none"}}
                name={titleId}
                id={titleId}
                ref={inputFile}
                type="file"
                accept="image/jpeg, jpeg, png, image/png, gif, image/gif"
                onChange={(e)=>{
                  const file = e.target.files[0]
                  setImage(file)
                }}
              
              />
              
        
          <div>
        </div>
      </div>
    </div>
  );
}



export default FileUpload;