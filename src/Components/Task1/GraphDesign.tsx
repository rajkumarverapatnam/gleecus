import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import Plot from "react-plotly.js";
import "./GraphDesign.css";
import { graphDataAPI } from "../../constants";
import { performGetRequest } from "../../Api";
import { graphDataType } from "../../types";
import GraphDesignLeftSection from "./GraphDesignLeft/GraphDesignLeftSection";

export default function GraphDesign() {
  const [graphData, setGraphData] = useState<graphDataType[]>([]);

  useEffect(() => {
    performGetRequest(graphDataAPI).then((response) => {
      setGraphData(Object.values(response));
    });
  }, []);

  let xData: number[] = graphData.map((item) => item.counts);
  let yData: string[] = graphData.map((item) => item.CLINICIAN_NAME);
  const originalGraphData: any = [
    {
      type: "bar",
      orientation: "h",
      x: xData,
      y: yData,
      width: 0.5,
    },
  ];
  const customHeight = yData.length * 50;
  const originalGraphLayout: any = {
    autosize: false,
    height: customHeight,
    width: 600,
    bargap: 0.01,
    showlegend: false,
    xaxis: {
      showticklabels: false,
    },
    margin: {
      autoexpand: false,
      b: 0,
      l: 150,
      t: 0,
      pad: 0,
      r: 0,
    },
  };

  const hiddenGraphData: any = [
    {
      type: "bar",
      orientation: "h",
      x: xData,
      y: yData,
      color: "white",
      opacity: 0,
      marker: { color: "rgb(55, 83, 109)" },
    },
  ];
  const hiddenGraphLayout: any = {
    height: 50,
    width: 500,
    bargap: 0.01,
    yaxis: {
      showticklabels: false,
      grid: {
        autotick: false,
      },
    },
    xaxis: {
      borderwidth: 0,
      borderpad: 2,
      height: 10,
    },
  };

  return (
    <div className="GraphDesign">
      <div className="breadCrums">
        <ul>
          <li>
            <a href="#">Admin </a>{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </li>
          <li>
            <a href="#">Pending Orders</a>
          </li>
        </ul>
      </div>
      <h4>Pending Orders</h4>
      <div className="graph">
        <div className="graph-layout">
          <div className="scroll-box">
            <div className="scroll-box-body">
              <Plot
                data={originalGraphData}
                layout={originalGraphLayout}
                config={{ displayModeBar: false }}
              />
            </div>
          </div>
          <div className="second-box">
            <Plot
              data={hiddenGraphData}
              layout={hiddenGraphLayout}
              config={{ displayModeBar: false }}
            />
          </div>
        </div>
        <div className="graphInfo">
          <GraphDesignLeftSection />
        </div>
      </div>
    </div>
  );
}
