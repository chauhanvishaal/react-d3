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

const Bar = props => {
  useEffect(() => {
    renderBars(props);
  });

  const renderBars = props => {
    d3.select("#bar-chart")
      .selectAll("div")
      .data(populationData, pd => pd.population)
      .enter()
      .append("div")
      .attr("class", "bar")
      .style("width", d => {
        return d.population * 10 + "px";
      })
      .text(d => {
        return d.population + " mil";
      });
  };

  return <div id="bar-chart">Bar Chart</div>;
};

export default Bar;
