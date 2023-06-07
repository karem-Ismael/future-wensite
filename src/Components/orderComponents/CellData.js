/* eslint-disable prettier/prettier */
/* eslint-disable no-nested-ternary */
/**
 * Cell Data
 */

import React from "react";
import { dataTypes, Alert } from "./constants";
import Link from "next/link";

/**
 * @name CellData
 * @description It takes data and row details to return each cell output
 * @param {any} data
 * @param {any} record
 * @param {any} locale
 * @returns {JSX | string} Cell Content in a table
 */

const {
  TEXT,
  PRICE,
  DATE,
  FUNC,
  DATETIME,
  TIME,
  BILINGUAL,
  TRANSLATE,
  ACTIONS,
  ASSIGNBOOKING,
  REFUNDBOOKING,
  DROPDOWN,
} = dataTypes;

function CellData({ data, record, locale, actions, actionsArgs, dropdownActions }) {
  const dataValue = record[data?.dataRef];
  switch (true) {
    case data?.dataType === DROPDOWN :
        return  dropdownActions(record)
    case data?.dataType === ACTIONS:
      return actionsArgs?.length
        ? actions(Object.assign(...actionsArgs?.map((key) => ({ [key]: record[key] }), {})))
        : "";

 

    case data?.dataType === BILINGUAL && (!data?.bilingual?.ar || !data?.bilingual?.en):
      return Alert("Missing Locale In Bilingual");

    case data?.dataType === BILINGUAL:
      return record[data.bilingual[locale]];

    case data?.dataType === FUNC && !data.func:
      return Alert("Missing Function to handle data");

    case data?.dataType === FUNC:
      return data?.htmlElement === "link" ? (
        <Link href={`/cw/dashboard/customers/${data?.userId(record)}`}>
          {data.func(record, locale)}
        </Link>
      ) : (
        data.func(record, locale)
      );
    case data?.dataType === TEXT:
      return data?.dataRef === "additionalNotes" && data?.dataRef?.length > 10
        ? dataValue.substring(0, 10)
        : dataValue;
    

    

    case data?.dataType === DATE && data?.dataRef?.length === 0:
      return Alert("Missing data can give false value of today");

    default:
      break;
  }
}

export default CellData;
