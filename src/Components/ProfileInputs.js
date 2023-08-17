import { FormGroup, Label, Input } from "reactstrap";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import React from "react";
import ImageUpload from "./ImageUpload";
import { useState } from "react";
import axios from "axios";
import FileUpload from "./FileUploader";
import { useEffect } from "react";
import Select, { components } from "react-select";
import { useRouter } from "next/router";
import {AddProfileImage, GetProfileInfo} from "../store/Profile/action"
import { useDispatch } from "react-redux";
const client = axios.create({
  baseURL: "https://estithmar.arabia-it.net/api",
});
const ProfileInputs = ({ownerDetails}) => {
  const [loader, setLoader] = useState(false);
  const [loader1, setLoader1] = useState(false);
  const [loader2, setLoader2] = useState(false);
  const [loader3, setLoader3] = useState(false);
  const [loader4, setLoader4] = useState(false);

  const dispatch=useDispatch()
  const [EnImage, setEnImage] = useState();
  const [firstImage,setFirstImage]=useState()
  const [secondImage,setSecondImage]=useState()
  const [thirdImage,setThirdImage]=useState()
  const [forthImage,setForthImage]=useState()
  const [data,setData]=useState()
  const [files,setFiles]=useState([])
  const [modal,setModal]=useState()
const toggle=()=>setModal(!modal)
  const history=useRouter()
//   const {id} =useParams()
const SavePassword =()=>{
  toggle()
} 
useEffect(()=>{
    if(localStorage.getItem("token")){
        client.get(`/asset-owner/me?token=${localStorage.getItem("token")}`).then((data)=>{
          console.log(data.data.data,"kareem")
          dispatch(GetProfileInfo(data.data.data))
            setData({
                ...data.data.data.asset_owner          ,
                name:data.data.data.name,
                email:data.data.data.email,
              })  
              const profile=data?.data?.data?.asset_owner?.files?.find(file=>file.title=="profile")?.path
              const firstImage=data?.data?.data?.asset_owner?.files?.find(file=>file.title=="صك الوقفية")?.path
              const secondImage =data?.data?.data?.asset_owner?.files?.find(file=>file.title=="الشهادة الضريبية")?.path
              const thirdImage =data?.data?.data?.asset_owner?.files?.find(file=>file.title=="عقد التأسيس")?.path
              const forthImage=data?.data?.data?.asset_owner?.files?.find(file=>file.title=="دورة عمل الوقف")?.path
        
              setEnImage(profile ? "https://estithmar.arabia-it.net/"+ profile : null)
              dispatch(AddProfileImage("https://estithmar.arabia-it.net/"+ profile))
              setFirstImage(firstImage ? "https://estithmar.arabia-it.net/"+firstImage :null)
              setSecondImage(secondImage ? "https://estithmar.arabia-it.net/"+secondImage : null)
              setThirdImage(thirdImage ? "https://estithmar.arabia-it.net/"+ thirdImage: null)
              setForthImage(forthImage ? "https://estithmar.arabia-it.net/" + forthImage :null)
        })
    

     
       
    }
},[])

  const uploadEnimage = (file) => {
    setLoader(true);
    const formdata = new FormData();
    formdata.append("title", "profile");
    formdata.append("store_file", true);
    formdata.append("file", file);
    formdata.append("token",localStorage.getItem("token"))
    client
      .post("/asset-owner/files", formdata, {
        headers: {
          "Content-Type": "multipart/form-data; ",
        },
      })
      .then((res) => {
        setLoader(false);
        setFiles([...files,res.data.data.id])
        setEnImage("https://estithmar.arabia-it.net" + res.data.data.path);
      });
  };
  const UploadFile=(file,name)=>{
    if(name=="first"){
      setLoader1(true)
    }else if(name=="second"){
    setLoader2(true);
    } else if(name=="third"){
    setLoader3(true);
    }
    else{
      setLoader4(true)
    }
    const formdata = new FormData();
    formdata.append("title", name== "first" ? "صك الوقفية" : name=="second" ? "الشهادة الضريبية":name == "third" ?"عقد التأسيس" :  "دورة عمل الوقف");
    formdata.append("store_file", true);
    formdata.append("file", file);
    formdata.append("token",localStorage.getItem("token"))

    client
      .post("/asset-owner/files", formdata, {
        headers: {
          "Content-Type": "multipart/form-data; ",
        },
      })
      .then((res) => {
        if(name=="first"){
          setLoader1(false)
        }else if(name =="second"){
        setLoader2(false);
    
        } else if(name=="third"){
          setLoader3(false);
      
          }
          else{
            setLoader4(false)
          }
        if(name == "first"){
        setFirstImage("https://estithmar.arabia-it.net" + res.data.data.path);
        setFiles([...files,res.data.data.id])
            
        }else if (name== "second"){
            setSecondImage("https://estithmar.arabia-it.net" + res.data.data.path)
            setFiles([...files,res.data.data.id])
        } else if(name=="third"){
            setThirdImage("https://estithmar.arabia-it.net" + res.data.data.path)
            setFiles([...files,res.data.data.id])
        }else{
          setForthImage("https://estithmar.arabia-it.net" + res.data.data.path)
          setFiles([...files,res.data.data.id])
        }
      });
  }
  const AddAssetsOwner=()=>{
    client.post("/asset-owner",{
      ...data,
      files_ids:files,
      password:"123456",
    password_confirmation : "123456",

    }).then(res=>{
      if(res.data.success){
      
        // swal({
        //   title: "",
        //   text:" تم اضافه الوقف بنجاح",
        //   icon: "success",
        // });
      }
    }).then(()=>{
      setTimeout(()=>{
        // history.push("/app/owners-assets")
      },2000)
    })
  }
  const EditAssetsOwner=()=>{

    client.post(`asset-owner/update`,{
      ...data,
      files_ids:files,
      type : "update",
      user:undefined,
      files:undefined,
      created_at:undefined,
      updated_at:undefined,
      token:localStorage.getItem("token")
    }).then((res)=>{
      if(res.data.success){
        // swal({
        //   title: "",
        //   text:" تم تعديل الوقف بنجاح",
        //   icon: "success",
        // });
        setTimeout(()=>{
          // history.push("/app/owners-assets")
        },2000)
      }
    })
  }
  return (
    <>
      <div className="row">
        <div className="col-md-4 profile">
          <div>
            <h3 className="title">بيانات الحساب</h3>
            <FormGroup>
              <Label for="exampleEmail">
         اسم المستخدم
              </Label>
              <Input
                style={{ borderColor: "#7EA831" }}
                placeholder={"اسم المستخدم"}
                type="text"
                defaultValue={data?.name}
                onChange={(e)=>setData({
                    ...data,
                    name:e.target.value
                })}
              />
            </FormGroup>
          </div>
          <div>
            <FormGroup>
              <Label for="exampleEmail">
                 البريد الإلكتروني
              </Label>
              <Input
                style={{ borderColor: "#7EA831" }}
                placeholder={"البريد الإلكتروني"}
                type="email"
                defaultValue={data?.email}
                onChange={(e)=>setData({
                    ...data,
                    email:e.target.value
                })}
              />
            </FormGroup>
          </div>
          <div>
            <FormGroup>
              <Label for="exampleEmail">
                 رقم الجوال
              </Label>
              <Input
                style={{ borderColor: "#7EA831" }}
                placeholder={"+966 56 464 5665"}
                type="text"
                defaultValue={data?.phone}
                onChange={(e)=>setData({
                    ...data,
                    phone:e.target.value
                })}
              />
            </FormGroup>
          </div>
        </div>
        <div className="col-md-4" style={{ alignSelf: "center",fontSize:"20px", color:"#707070" }}>
          <div>
            <span style={{color:"#150941",fontWeight:"bold"}}>تحديث كلمة المرور</span>
             من خلال الزر أدناه سيتم
            <br />
            إعادة توجيهك إلى صفحة جديدة ويجب اتباع
            <br />
            التعليمات
          </div>
          <div>
            <button onClick={()=>toggle()} className="btn btn-block" style={{background:"#7EA831" ,color:"#fff"}}>تسجيل كلمة مرور جديدة</button>
          </div>
        </div>
        <div className="col-md-3" style={{ alignSelf: "center" }}>
          <ImageUpload
            loader={loader}
            image={EnImage}
            setImage={(file) => {
              uploadEnimage(file);
            }}
          />
        </div>
      </div>
      <div className="row required">
       <div className="col-12">
       <h3 className="title">
        بيانات الوقف
        </h3>
        <label class="container">
  <span class="checkmark"></span>
  <p style={{fontSize:"27px" ,color:"#7EA831" ,fontWeight:"bold"}}>تفاصيل الوقف</p>
</label>
       </div>
        <div className="col-md-4">
          <div>
            <FormGroup>
              <Label for="exampleEmail">
            اسم الوقف بالعربيه
              </Label>
              <Input
                style={{ borderColor: "#7EA831" }}
                placeholder={"اسم الوقف بالعربيه"}
                type="text"
                defaultValue={data?.asset_name_ar}
                value={data?.asset_name_ar}
                onChange={(e)=>{
                   
                   setData({
                       ...data,
                       asset_name_ar:e.target.value
                   })
                }}
                
              />
            </FormGroup>
          </div>
        </div>
        <div className="col-md-4">
          <div>
            <FormGroup>
              <Label for="exampleEmail">
                اسم الوقف بالانجليزية
              </Label>
              <Input
                style={{ borderColor: "#7EA831" }}
                placeholder={"اسم الوقف بالانجليزية"}
                type="text"
                defaultValue={data?.asset_name_en}
                value={data?.asset_name_en}
                onChange={(e)=>{
                   
                   setData({
                       ...data,
                       asset_name_en:e.target.value
                   })
                }}
              />
            </FormGroup>
          </div>
        </div>
      </div>
      <div className="row required">
        <div className="col-md-4">
          <div>
            <FormGroup>
            <Label for="exampleEmail">
                        صاحب الوقف          
              </Label>
              <Input
                style={{ borderColor: "#7EA831" }}
                placeholder={"صاحب الوقف"}
                type="text"
                defaultValue={data?.owner_name}
                value={data?.owner_name}
                onChange={(e)=>{
                   
                   setData({
                       ...data,
                       owner_name:e.target.value
                   })
                }}
                
              />
            </FormGroup>
          </div>
        </div>
        <div className="col-md-4">
          <div>
            <FormGroup>
              <Label for="exampleEmail">
                 العائلة
              </Label>
              <Input
                style={{ borderColor: "#7EA831" }}
                placeholder={"العائلة"}
                type="text"
                defaultValue={data?.owner_family}
                value={data?.owner_family}
                onChange={(e)=>{
                   
                   setData({
                       ...data,
                       owner_family:e.target.value
                   })
                }}
                
              />
            </FormGroup>
          </div>
        </div>
      </div>
      <div className="row required">
        <div className="col-md-4">
          <div>
            <FormGroup>
              <Label for="exampleEmail">
            رقم صك الوقفية
              </Label>
              <Input
                style={{ borderColor: "#D4B265" }}
                placeholder={"رقم صك الوقفية"}
                type="text"
                defaultValue={data?.asset_nom}
                value={data?.asset_nom}
                onChange={(e)=>{
                   
                   setData({
                       ...data,
                       asset_nom:e.target.value
                   })
                }}
                 
              />
            </FormGroup>
          </div>
        </div>
        <div className="col-md-4">
          <div className="row">
            <div className="col-md-6">
              <FormGroup>
                <Label for="exampleEmail">
                  تاريخ الاصدار
                </Label>
                <Input style={{ borderColor: "#D4B265" }} type="date" 
                 defaultValue={data?.export_date}
                 value={data?.export_date}
                 onChange={(e)=>{
                    
                    setData({
                        ...data,
                        export_date:e.target.value
                    })
                 }}
                />
              </FormGroup>
            </div>
            <div className="col-md-6">
              <FormGroup>
                <Label for="exampleEmail">
                  مصدرها
                </Label>
                <Input
                  style={{ borderColor: "#D4B265" }}
                  placeholder={"مصدرها"}
                  type="text"
                  defaultValue={data?.exported_by}
                  value={data?.exported_by}
                  onChange={(e)=>{
                     
                     setData({
                         ...data,
                         exported_by:e.target.value
                     })
                  }}
                  
                />
              </FormGroup>
            </div>
          </div>
        </div>
      </div>
      <div className="row required">
        <div className="col-md-4">
          <div>
            <FormGroup>
              <Label for="exampleEmail">
            اسم ناظر الوقف
              </Label>
              <Input
                style={{ borderColor: "#D4B265" }}
                placeholder={"اسم ناظر الوقف"}
                type="text"
                defaultValue={data?.manager_name}
                value={data?.manager_name}
                onChange={(e)=>{
                   
                   setData({
                       ...data,
                       manager_name:e.target.value
                   })
                }}
                
              />
            </FormGroup>
          </div>
        </div>
        <div className="col-md-4">
          <div>
            <FormGroup>
              <Label for="exampleEmail">
                 رقم السجل المدني
              </Label>
              <Input
                style={{ borderColor: "#D4B265" }}
                placeholder={"رقم صك الوقفية"}
                type="text"
                defaultValue={data?.civil_registry_nom}
                value={data?.civil_registry_nom}
                onChange={(e)=>{
                   
                   setData({
                       ...data,
                       civil_registry_nom:e.target.value
                   })
                }}
                 
              />
            </FormGroup>
          </div>
        </div>
      </div>
      <div className="row required">
        <div className="col-md-4">
          <div>
            <FormGroup>
              <Label for="exampleEmail">
                مصرف الوقف
              </Label>
              <Select options={
                [
                  {
                    label:"البنك الاهلي ",
                    value:"AhlyBank"
                  }
                ]
              } 
              value={
                [
                  {
                    label:"البنك الاهلي ",
                    value:"AhlyBank"
                  }
                ].find(option=>option.value== data?.asset_bank)

              }
              onChange={(sel)=>{
                setData({
                  ...data,
                  asset_bank:sel.value
                })
            
              }}
              
              />
            </FormGroup>
          </div>
        </div>
        <div className="col-md-4">
          <div>
            <FormGroup>
              <Label for="exampleSelect">أعيان الوقف</Label>
              <Select 
              options={[
                {
                  label:"اسهم",
                  value:"اسهم"
                }
              ]}
              onChange={(sel)=>{
                setData({
                  ...data,
                  asset_type:sel.value
                })
            }}
              value={
                [
                  {
                    label:"اسهم",
                    value:"اسهم"
                  }
                ].find(option=>option.value == data?.asset_type)
              }
              />
            </FormGroup>
          </div>
        </div>
      </div>
      <div className="row required">

        <div className="col-md-4">
          <div>
            <FormGroup>
              <Label for="exampleSelect">الدولة</Label>
             
              <Select 
              options={[{label:"المملكة العربية السعودية",value:"المملكة العربية السعودية"}]}
              value={{label:"المملكة العربية السعودية",value:"المملكة العربية السعودية"}}
              />
            </FormGroup>
          </div>
        </div>
        <div className="col-md-4">
          <div>
            <FormGroup>
              <Label for="exampleSelect">المدينة</Label>
              <Select options={
                [
                  {
                    label:"الرياض",
                    value:"الرياض",
                  },
                  {
                    label:"جدة",
                    value:"جدة"
                  },
                  {
                    label:"القسيم",
                    value:"القسيم"
                  },
                  {
                    label:"مكة المكرمه",
                    value:"مكة المكرمه"
                  }
                ]
              }
              value={
                [
                  {
                    label:"الرياض",
                    value:"الرياض",
                  },
                  {
                    label:"جدة",
                    value:"جدة"
                  },
                  {
                    label:"القسيم",
                    value:"القسيم"
                  },
                  {
                    label:"مكة المكرمه",
                    value:"مكة المكرمه"
                  }
                ].find(city=>city.value == data?.city)
              }
              onChange={(sel)=>{
                setData({
                  ...data,
                  city:sel.value
                })
          
            }}
              />

            </FormGroup>
          </div>
        </div>

      </div>
      <div className="row">
      <div className="col-md-4">
          <div>
            <FormGroup>
              <Label for="exampleSelect">الحي</Label>
              <Input
                id="exampleSelect"
                name="select"
                type="text"
                defaultValue={data?.district}
                value={data?.district}
                onChange={(e)=>{
                   
                   setData({
                       ...data,
                       district:e.target.value
                   })
                }}
                
                style={{ borderColor: "#D4B265" }}
              />
               
            </FormGroup>
          </div>
        </div>
        <div className="col-md-4">
          <div>
            <FormGroup>
              <Label for="exampleSelect">الشارع</Label>
              <Input
                id="exampleSelect"
                name="select"
                type="text"
                style={{ borderColor: "#D4B265" }}
                defaultValue={data?.street}
                value={data?.street}
                onChange={(e)=>{
                   
                   setData({
                       ...data,
                       street:e.target.value
                   })
                }}
                
              />
               
            </FormGroup>
          </div>
        </div>


      </div>
      <div className="row">
      <div className="col-md-4">
          <div>
            <FormGroup>
              <Label for="exampleSelect">رقم المبني</Label>
              <Input
                id="exampleSelect"
                name="select"
                type="text"
                style={{ borderColor: "#D4B265" }}
                defaultValue={data?.building_nom}
                value={data?.building_nom}
                onChange={(e)=>{
                   
                   setData({
                       ...data,
                       building_nom:e.target.value
                   })
                }}
                
              />
               
            </FormGroup>
          </div>
        </div>
        <div className="col-md-4">
          <div>
            <FormGroup>
              <Label for="exampleSelect">الرمز البريدي</Label>
              <Input
                id="exampleSelect"
                name="select"
                type="text"
                defaultValue={data?.post_nom}
                value={data?.post_nom}
                onChange={(e)=>{
                   
                   setData({
                       ...data,
                       post_nom:e.target.value
                   })
                }}
                
                style={{ borderColor: "#D4B265" }}
              />
               
            </FormGroup>
          </div>
        </div>


      </div>
      <div className="row">
      <div className="col-12">
      
        <label class="container">
  <p style={{fontSize:"27px" ,color:"#D4B265" ,fontWeight:"bold"}}>المستندات المرفقة  </p>
</label>
       </div>
        <div className="col-md-4">
            <FileUpload 
              loader={loader1}
              image={firstImage}
              name="صك الوقفية"
              setImage={(file) => {
                UploadFile(file,"first");
              }}
            />
        </div>
        <div className="col-md-4">
            <FileUpload 
              loader={loader2}
              image={secondImage}
              name="الشهادة الضريبية"
              setImage={(file) => {
                UploadFile(file,"second");
              }}
            />
        </div>

      </div>
      <div className="row">
        <div className="col-md-4">
            <FileUpload 
              loader={loader3}
            image={thirdImage}
            name={"عقد التأسيس"}
            setImage={(file) => {
                UploadFile(file,"third");
              }}
            />
        </div>
        <div className="col-md-4">
            <FileUpload 
              loader={loader4}
             image={forthImage}
             name={"دورة عمل الوقف"}
             setImage={(file) => {
                 UploadFile(file,"forth");
               }}
            />
        </div>

      </div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          <h5 className="w-100">
          تعيين كلمة مرور 
          </h5>
          </ModalHeader>
        <ModalBody>
        <div className="col-md-12">
                        <FormGroup>
                        <Label for="exampleEmail">
                      كلمة السر
                        </Label>
                        <Input
                        name="select"
                        type="password"
                        autoCorrect="off"
                          autoComplete="off"
                        style={{ borderColor: "#D4B265" }}
                        onChange={(e)=>{
                            setData({
                              ...data,
                              password:e.target.value

                            })
                        }}
                        />
                    </FormGroup>
                        </div>
                        <div className="col-md-12">
                        <FormGroup>
                        <Label for="exampleEmail">
                        تاكيد كلمة السر 
                        </Label>
                        <Input
                        name="select"
                        type="password"
                        autoCorrect="off"
                          autoComplete="off"
                        style={{ borderColor: "#D4B265" }}
                        onChange={(e)=>{
                          setData({
                            ...data,
                            password_confirmation:e.target.value
                          })
                        }}
                        />
                    </FormGroup>
                        </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={SavePassword}>
            حفظ
          </Button>{' '}
          {/* <Button color="secondary" onClick={toggle}>
            Cancel
          </Button> */}
        </ModalFooter>
      </Modal>
      <div className="row justify-content-center mt-2">
        <div className="col-md-4">
            <button className="btn btn-block w-100" onClick={()=>  EditAssetsOwner()} style={{background:"#150941",color:"#fff",fontSize:"20px"}}>
            حفظ
            </button>
        </div>

      </div>
    </>
  );
};
export default ProfileInputs;
