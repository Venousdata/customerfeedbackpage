// in this file i use chart.js to create a chart showing
// the most popular ratings for the selected product.

import { makeStyles } from "@material-ui/core";
import Chart from "chart.js";
import React, { useState, useEffect, useRef } from "react";
import { getReviewChartConfig } from "../helpers/helpers";

const useStyles = makeStyles((theme) => ({
  canvas: {
    height: "400px",
    width: "600px",
  },
}));

const ReviewChart = ({ reviews }) => {
  const [chartInstance, setChartInstance] = useState(null);
  const chartContainer = useRef(null);
  const classes = useStyles();

  const chartConfig = getReviewChartConfig(reviews);

  useEffect(() => {
    // basically the react hooks way of doing document.getElementById
    // the element (canvas) is then passed to chart.js to render the chart
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chart(chartContainer.current, chartConfig);
      setChartInstance(newChartInstance);
    }
  }, [chartContainer, reviews]);

  return (
    <div>
      <canvas ref={chartContainer} className={classes.canvas} />
    </div>
  );
};

export default ReviewChart;
