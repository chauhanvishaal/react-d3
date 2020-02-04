import React, { useEffect } from "react";
import * as d3 from "d3";
import "./index.css";

const populationData = [
  {
    population: 40,
    city: "London"
  },
  {
    population: 30,
    city: "Scotland"
  },
  {
    population: 20,
    city: "Wales"
  },
  {
    population: 50,
    city: "N.Ireleand"
  }
];

const chartHeight = 100;
const barPadding = 5;
const barHeight = 15;

const getYPos = index => {
  return (
    chartHeight +
    barPadding -
    (chartHeight - (index + 1) * (barHeight + barPadding))
  );
};

const renderBars = props => {
  d3.select("#bar-svg")
    .selectAll("rect")
    .data(populationData, pd => pd.population)
    .enter()
    .append("rect")
    .attr("class", "bar-svg")
    .attr("y", (d, i) => {
      return getYPos(i);
    })
    .attr("width", d => d.population * barPadding)
    .attr("height", 15);
};

const BarSvg = props => {
  useEffect(() => {
    renderBars(props);
  });

  return (
    <div>
      Bar Chart - Svg
      <div>(Todo - scaling, vertical bars, labels)</div>
      <svg id="bar-svg" height={chartHeight}>
        Bar Chart
      </svg>
    </div>
  );
};

export default BarSvg;
