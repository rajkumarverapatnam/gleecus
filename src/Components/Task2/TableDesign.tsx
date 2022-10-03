import React, { Fragment, useEffect, useRef, useState } from "react";
import { performGetRequest } from "../../Api";
import { tableDataAPI } from "../../constants";
import { tableDataType } from "../../types";
import { AgGridReact, AgGridColumn } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import "ag-grid-enterprise";
import "./TableDesign.css";

export default function TableDesign() {
  const [tableData, setTableData] = useState<tableDataType[]>([]);
  useEffect(() => {
    performGetRequest(tableDataAPI).then((response) => {
      setTableData(Object.values(response));
    });
  }, []);
  console.log(tableData);
  const rowData = tableData;
  for (const row of rowData) {
    row.id = +row.id;
  }
  let rowKeys: string[] = [];
  if (tableData.length > 0) {
    rowKeys = Object.keys(tableData[0]);
  }
  const columnDefs = [];
  for (const rowKey of rowKeys) {
    let columnDef: any = { field: rowKey };
    if (rowKey == "Id") {
      columnDef = {
        ...columnDef,
        filter: "agNumberColumnFilter",
        comparator: (
          valueA: any,
          valueB: any,
          nodeA: any,
          nodeB: any,
          isDescending: any
        ) => valueA - valueB,
      };
    }
    columnDefs.push(columnDef);
  }

  const defaultColumnDefs = {
    sortable: true,
    filter: true,
  };

  return (
    <div className="ag-grid-table">
      <div className="breadCrums">
        <ul>
          <li>
            <a href="#">Admin </a>{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </li>
          <li>
            <a href="#">Pending Order</a>
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </li>
          <li>
            <a href="#">To Be Sent</a>
          </li>
        </ul>
      </div>
      <div className="headerSec">
        <h4>To Be Sent</h4>
        <div>
          <i className="fa fa-filter" aria-hidden="true"></i>
          <span>Filter</span>
        </div>
      </div>
      <div className="communicationTabs">
        <ul>
          <li>
            <a href="#">Email </a>{" "}
          </li>
          <li>
            <a href="#">Fax</a>
          </li>
          <li>
            <a href="#">Portal</a>
          </li>
          <li>
            <a href="#">Hand Carried</a>
          </li>
        </ul>
      </div>
      <div className="info-collection">
        <div className="info-collection-data">
          <div className="info-collection-items">
            <div>
              <p>Orders</p>
              <b>150</b>
            </div>
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </div>
        </div>

        <div className="info-collection-data">
          <div className="info-collection-items">
            <div>
              <p>Episodes</p>
              <b>100</b>
            </div>
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </div>
        </div>

        <div className="info-collection-data">
          <div className="info-collection-items">
            <div>
              <p>Followup</p>
              <b>25</b>
            </div>
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </div>
        </div>

        <div className="info-collection-items">
          <div>
            <p>Revenue</p>
            <b>$3000</b>
          </div>
          <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
        </div>
      </div>

      <div className="ag-theme-alpine" style={{ height: 1000 }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColumnDefs}
          suppressRowClickSelection
          animateRows={true}
        />
      </div>
    </div>
  );
}
