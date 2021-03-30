import { makeStyles } from "@material-ui/core";
import { Chart } from "chart.js";
import { useRef } from "react";

const useStyles = makeStyles((theme) => ({}));

const ReviewChart = ({ reviews }) => {
  const classes = useStyles();
  const reviewRef = useRef(null);
//   const ctx = reviewRef.current.getContext("2d");
//   console.log(ctx);
  //   const chart = new Chart(ctx, {
  //     type: "bar",
  //     data: {
  //       labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  //       datasets: [
  //         {
  //           label: "# of Votes",
  //           data: [12, 19, 3, 5, 2, 3],
  //           backgroundColor: [
  //             "rgba(255, 99, 132, 0.2)",
  //             "rgba(54, 162, 235, 0.2)",
  //             "rgba(255, 206, 86, 0.2)",
  //             "rgba(75, 192, 192, 0.2)",
  //             "rgba(153, 102, 255, 0.2)",
  //             "rgba(255, 159, 64, 0.2)",
  //           ],
  //           borderColor: [
  //             "rgba(255, 99, 132, 1)",
  //             "rgba(54, 162, 235, 1)",
  //             "rgba(255, 206, 86, 1)",
  //             "rgba(75, 192, 192, 1)",
  //             "rgba(153, 102, 255, 1)",
  //             "rgba(255, 159, 64, 1)",
  //           ],
  //           borderWidth: 1,
  //         },
  //       ],
  //     },
  //     options: {
  //       scales: {
  //         yAxes: [
  //           {
  //             ticks: {
  //               beginAtZero: true,
  //             },
  //           },
  //         ],
  //       },
  //     },
  //   });
  console.log("==========reviews==========", reviews);
  //   console.log("==========chart==========", chart);
  return (
    <div>
      {/* <canvas ref={reviewRef} width="300" height="300" /> */}
    </div>
  );
};

export default ReviewChart;
