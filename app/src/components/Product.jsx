// individual product page.
// contains product name, image, description, trend chart, all reviews for that product
// and links to write and submit a review or return to home page.

import { makeStyles, Paper, Button, CircularProgress } from "@material-ui/core";
import { useState, useEffect } from "react";
import { get, post } from "../api/api";
import { useHistory } from "react-router-dom";
import DataTable from "./DataTable";
import AddReview from "./AddReview";
import ReviewChart from "./ReviewChart";

const useStyles = makeStyles((theme) => ({
  product: {
    textAlign: "center",
  },
  image: {
    height: "400px",
    width: "600px",
  },
  button: {
    float: "left",
    background: "lightgray",
    margin: "2px",
  },
  buttonsContainer: {
    display: "flex",
    position: "absolute",
  },
  paper: {
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    width: "auto",
  },
}));

const Product = () => {
  const [product, setProduct] = useState();
  const [reviews, setReviews] = useState([]);
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const classes = useStyles();
  const history = useHistory();

  //seperate the useEffects because i don't want to make two requests when i may only need to make one.
  useEffect(() => {
    const id = window.location.pathname.split("/").pop();
    get(`product/${id}`)
      .then((data) => setProduct(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const id = window.location.pathname.split("/").pop();
    get(`productreviews/product/${id}`)
      .then((data) => setReviews(data))
      .catch((err) => console.log(err));
  }, []);

  const handleClick = () => {
    // takes us back to home page via updating history
    history.push("/");
  };

  const openReviewModal = () => {
    setReviewModalOpen(true);
  };

  // i pass the close function into the Add Review component so i can close it from within via a cancel button
  // and update the 'open' state out here.
  const closeReviewModal = () => {
    setReviewModalOpen(false);
  };

  const handleSubmit = async (form) => {
    // i pass this function into the Add Review component as that is where the form object gets created.
    // i then use the product page pathname id to make the review post request.
    const id = window.location.pathname.split("/").pop();
    const reviews = await post(`productreviews/product/${id}`, form);
    if (reviews) {
      setReviews(reviews);
    }
    setReviewModalOpen(false);
  };

  return (
    <div className={classes.product}>
      <div className={classes.buttonsContainer}>
        <Button className={classes.button} onClick={() => handleClick()}>
          Home
        </Button>
        <Button className={classes.button} onClick={() => openReviewModal()}>
          Add Review
        </Button>
      </div>
      {product && reviews && reviews.length ? (
        <>
          <h2>{product.name}</h2>
          <Paper variant="outlined" className={classes.paper}>
            <img className={classes.image} src={product.image_src} />
            <ReviewChart reviews={reviews} />
          </Paper>
          <p>{product.description}</p>
          <h2>Reviews</h2>
          <DataTable reviews={reviews} />
          <AddReview
            product={product}
            open={reviewModalOpen}
            handleClose={closeReviewModal}
            handleSubmit={handleSubmit}
          />
        </>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default Product;
