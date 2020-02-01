import React, { useEffect } from "react";
import * as d3 from "d3";

const dataChars = ["A", "B", "C", "D", "E"];
const populationDataArr = [40, 30, 20, 50, 25];
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

const BarSvg = props => {
  useEffect(() => {
    renderBars(props);
  });

  const renderBars = props => {
    d3.select("#bar-svg")
      .selectAll("rect")
      .data(populationData, pd => pd.population)
      .enter()
      .append("rect")
      .attr("class", "bar-svg")
      .attr("y", (d, i) => i * 20)
      .attr("width", d => d.population * 5)
      .attr("height", 15)
      .text(d => {
        return d.population + " mil";
      });
  };

  return (
    <div>
      Bar Chart - Svg
      <div>(Todo - scaling, vertical bars, labels)</div>
      <svg id="bar-svg">Bar Chart</svg>;
    </div>
  );
};

export default BarSvg;
