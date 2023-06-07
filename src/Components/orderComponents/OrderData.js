import React from "react";
import { dataTypes } from "./constants";
import moment from "moment";
const { TEXT, ACTIONS, FUNC,DROPDOWN } = dataTypes;

export const OrderData = [
  {
    headerId: "ID",
    dataRef: "id",
    dataType: TEXT,
  },
  {
    headerId: "اسم الخدمة",
    dataType: FUNC,
    func: (record, locale) => record.service.title,
    
  },
 
  {
    headerId: "مزود الخدمة",
    dataRef: "logo",
    dataType: FUNC,
    func: (record, locale) => record.service_provider?.company_name_ar,
  },
  {
    headerId: "تاريخ الطلب",
    dataRef: "logo",
    dataType: FUNC,
    func: (record, locale) => moment(record?.created_at).locale("ar").format('DD MMM YYYY h:mm:ss a'),
  },
  {
    headerId: "تاريخ التعديل",
    dataRef: "logo",
    dataType: FUNC,
    func: (record, locale) => moment(record?.updated_at).locale("ar").format('DD MMM YYYY h:mm:ss a'),
  },
 
 
  {
    headerId: "الحالة",
    dataType: DROPDOWN,

  },
 
  { headerId: "", dataType: ACTIONS },
];
