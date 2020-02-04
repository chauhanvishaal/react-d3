import React, { useState } from "react";
import { ScatterPlot, Bar, BarSvg } from "..";

const styles = {
  width: 500,
  height: 300,
  padding: 30
};

const numDataPoints = 20;
const randomNum = () => Math.floor(Math.random() * 1000);

// returns Array of elements of (x,y) coordinates.
const randomDataSet = () => {
  return Array.apply(null, { length: numDataPoints }).map(() => [
    randomNum(),
    randomNum()
  ]);
};

const Chart = props => {
  const [state, setState] = useState({ data: randomDataSet() });

  const randomiseData = () => {
    setState({ data: randomDataSet() });
  };

  return (
    <div className="controls">
      {/* https://github.com/freddyrangel/playing-with-react-and-d3 */}
      {props.type === "scatter" && <ScatterPlot {...state} {...styles} />}
      {props.type === "bar" && <Bar></Bar>}
      {props.type === "barsvg" && <BarSvg></BarSvg>}
      <button className="btn randomize" onClick={() => randomiseData()}>
        Randomise Data
      </button>
    </div>
  );
};

export default Chart;
