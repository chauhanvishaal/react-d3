import React, { useRef, useEffect } from "react";

import * as d3 from "d3";

const Axis = props => {
  let axis;
  const axisRef = useRef(null);

  useEffect(() => {
    renderAxis();
  });

  const renderAxis = () => {
    // node = axisRef;
    // axis = d3.svg
    //   .axis()
    //   .orient(props.orient)
    //   .ticks(5)
    //   .scale(props.scale);
    console.log("renderAxis", props);

    // d3.select(axisRef).call(axis);
    if (props.orient === "bottom") {
      axis = d3
        .axisBottom()
        .ticks(5)
        .tickPadding(15)
        .scale(props.scale);
    } else {
      axis = d3
        .axisLeft()
        .ticks(5)
        .scale(props.scale);
    }
    d3.select(axisRef.current).call(axis);
  };

  return <g className="axis" ref={axisRef} transform={props.translate}></g>;
};

export default Axis;
