import dayjs from "dayjs";
import { emailRegex } from "./helper.utils";

const capitalizeFirstLetter = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const getColumns = (arrayOfObjects, exlusions) => {
  return Object.keys(arrayOfObjects[0])
    .map((key) => ({
      field: key,
      headerName: capitalizeFirstLetter(key),
      width: key === "comment" ? 500 : key === "date" ? 300 : 200,
    }))
    .filter((column) => !exlusions.includes(column.field));
};

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
