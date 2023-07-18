/**
 * Page Title Bar Component
 * Used To Display Page Title & Breadcrumbs
 */
import React from 'react';
// import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Link from "next/link";
import { Breadcrumb } from 'antd';
import { useRouter } from 'next/router';


// intl messages

// get display string
const getDisplayString = (sub,end,lastElement =undefined) => {
   const arr = sub.split("/");
   if (arr.length > 1) {
      return arr[0].charAt(0) + arr[0].slice(1) + arr[1].charAt(0) + arr[1].slice(1)
   }  else{
      if(!end)
      return sub.charAt(0) + sub.slice(1)
      else return sub.charAt(0) + sub.slice(1)
   }

};

// get url string
const getUrlString = (path, sub, index) => {
   if (index === 0) {
      return '/' + path.split(sub)[0] + sub;
   } else {
      return '/' + path.split(sub)[0] + sub;
   }
};

const PageTitleBar = ({ title, match,content, enableBreadCrumb,lastElement=undefined }) => {
   const path = match?.substr(1);
   const first =path.includes("?") ?  path?.substring(0,path.indexOf("?")) :path;
   const subPath = path.includes("/") ? first?.split('/') :[`${path}`];
   const items=subPath?.unshift("الوقف النامي")
   const router=useRouter()
   return (
      <>
      <div className="page-title d-flex justify-content-between align-items-center">      
             <Breadcrumb
                 separator=">"
    items={
    subPath?.map((sub,index)=>(
      {
         title:subPath.length == index +1 ?  lastElement  ? lastElement : sub  == "service-order" ? "طلب الخدمة"  : sub=="services" ?  "الخدمات": sub : <Link href={getUrlString(path, sub, index)} style={{color:"#D3B166"}}>{sub =="services" ? "الخدمات" :sub=="advisors" ? "الاستشارات" :sub  }</Link>
      }
    ))
   
   }
  />
      </div>
      <div>
         <p className="pageContent">
            {content}
         </p>
      </div>
      </>

   )
};

// default props value


export default PageTitleBar;