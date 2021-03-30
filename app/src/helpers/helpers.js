import dayjs from "dayjs";
import { countNumOccurrences, emailRegex } from "./helper.utils";

const capitalizeFirstLetter = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

// gets the columns for the DataTable component (Material UI DataGrid)
export const getColumns = (arrayOfObjects, exlusions) => {
  // create the object column arr, but remove the properties listed in exclusions
  return Object.keys(arrayOfObjects[0])
    .map((key) => ({
      field: key,
      headerName: capitalizeFirstLetter(key),
      width: key === "comment" ? 500 : key === "date" ? 300 : 200,
    }))
    .filter((column) => !exlusions.includes(column.field));
};

// gets the rows for the DataTable component (Material UI DataGrid)
export const getRows = (arrayOfObjects) => {
  return arrayOfObjects.map((obj) => ({
    id: obj.id,
    name: obj.name,
    email: obj.email,
    rating: obj.rating,
    comment: obj.comment,
    date: dayjs(obj.date).format("MMMM D, YYYY"),
  }));
};

export const validateProductReviewForm = ({ name, email, rating, comment }) => {
  // there's probably a library that does this validation much cleaner, but i wanted to use as little libraries as possible
  // so i did a bare-bones validation for each of the review form properties here
  const nameError =
    !name || name.length > 50
      ? "Name is empty, or exceeded maximum length (50)"
      : "";
  const emailError =
    !email || email.length > 100 || !emailRegex.test(email)
      ? "Email is empty, invalid, or exceeded maximum length (100)"
      : "";
  const ratingError =
    rating > 5 || rating < 0 || isNaN(rating)
      ? "Rating is invalid. Pick a number (0-5)"
      : "";
  const commentError =
    !comment || comment.length > 400
      ? "Comment is empty, or longer than 400 characters"
      : "";

  return {
    name: nameError,
    email: emailError,
    rating: ratingError,
    comment: commentError,
  };
};

export const getReviewChartConfig = (reviews) => {
  // this function generates the chartConfig required for chart.js.
  // i've moved it here in order to keep the ReviewChart component from getting messy
  const ratings = reviews.map((review) => review.rating);
  console.log(ratings);
  return {
    type: "bar",
    data: {
      labels: ["1/5", "2/5", "3/5", "4/5", "5/5"],
      datasets: [
        {
          label: "Quantity of ratings",
          data: [
            countNumOccurrences(ratings, 1),
            countNumOccurrences(ratings, 2),
            countNumOccurrences(ratings, 3),
            countNumOccurrences(ratings, 4),
            countNumOccurrences(ratings, 5),
          ],
          backgroundColor: [
            // random colors for each bar
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      tooltips: { enabled: false },
      legend: {
        // remove coloured box from legend
        labels: { boxWidth: 0 },
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              // we want the ticks (numbers on y axis) to be whole numbers 0-5
              callback: (value) => (value % 1 === 0 ? value : null),
            },
          },
        ],
      },
    },
  };
};
