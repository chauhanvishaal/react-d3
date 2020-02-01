import React from "react";
import * as d3 from "d3";
import { DataCircles, XYAxis } from "..";

// return largest X coordinate from the data set
const xMax = data => d3.max(data, d => d[0]);
const yMax = data => d3.max(data, d => d[1]);

//Scales x coordinates from the data to fit the chart
const xScale = props => {
  return (
    d3
      .scaleLinear()
      // range of possible input value
      .domain([0, xMax(props.data)])
      .range([props.padding, props.width - (props.padding * 2)])
  );
};

const yScale = props => {
  return (
    d3
      .scaleLinear()
      // range of possible input value
      .domain([0, yMax(props.data)])
      .range([props.height - props.padding, props.padding])
  );
};

const ScatterPlot = props => {
  const scales = { xScale: xScale(props), yScale: yScale(props) };
//   console.log(props);
  return (
    <svg width={props.width} height={props.height}>
      <DataCircles {...props} {...scales}></DataCircles>
      <XYAxis {...props} {...scales}></XYAxis>
    </svg>
  );
};

export default ScatterPlot;
