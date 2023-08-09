import React from "react";
import { dataTypes } from "./constants";
import moment from "moment";
const { TEXT, ACTIONS, FUNC,DROPDOWN } = dataTypes;

export const ConsultData = [
  {
    headerId: "ID",
    dataRef: "id",
    dataType: TEXT,
  },
  {
    headerId: "المستشار",
    dataType: FUNC,
    func: (record, locale) => record.advisor.ar_name,
    
  },
 
  {
    headerId: " مجال الاستشارة",
    dataRef: "logo",
    dataType: FUNC,
    func: (record, locale) => record.advisor.fields.map((field)=>field?.name + " "),
  },
  {
    headerId: "التاريخ/الساعة",
    dataRef: "logo",
    dataType: FUNC,
    func: (record, locale) => moment(record?.date).locale("ar").format('DD MMM YYYY'),
  },
  {
    headerId: "الحالة",
    dataType: DROPDOWN,

  },
 
  { headerId: "", dataType: ACTIONS },
];
