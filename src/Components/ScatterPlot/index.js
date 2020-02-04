import React from "react";
import * as d3 from "d3";
import { DataCircles, XYAxis } from "..";
import { d3Scale } from "../../Common";

// return largest X coordinate from the data set
const xMax = data => d3.max(data, d => d[0]);
const yMax = data => d3.max(data, d => d[1]);

//Scales x coordinates from the data to fit the chart
const xScale = props => {
  return d3Scale(
    { min: 0, max: xMax(props.data) },
    { min: props.padding, max: props.width - props.padding }
  );
};

const yScale = props => {
  return d3Scale(
    { min: 0, max: yMax(props.data) },
    { min: props.height - props.padding, max: props.padding }
  );
};

const ScatterPlot = props => {
  const scales = { xScale: xScale(props), yScale: yScale(props) };
  //   console.log(props);
  return (
    <div>
      Scatter Chart
      <svg width={props.width} height={props.height}>
        <DataCircles {...props} {...scales}></DataCircles>
        <XYAxis {...props} {...scales}></XYAxis>
      </svg>
    </div>
  );
};

export default ScatterPlot;
