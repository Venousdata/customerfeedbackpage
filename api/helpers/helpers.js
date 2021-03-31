import { emailRegex } from "./helper.utils.js";

// same as front-end. this just validates the form again, incase something were to slip past the client side validation.
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
    rating > 5 || rating < 1 || isNaN(rating)
      ? "Rating is invalid. Pick a number (1-5)"
      : "";
  const commentError =
    !comment || comment.length > 400
      ? "Comment is empty, or longer than 400 characters"
      : "";
  if (nameError || emailError || ratingError || commentError) {
    return false;
  } else {
    return true;
  }
};
