import * as d3 from "d3";

const d3Scale = (data, range) => {
    return  d3
    .scaleLinear()
    // range of possible input value
    .domain([data.min, data.max])
    .range([range.min, range.max])
}

export { d3Scale };