import { makeStyles, Paper, Button, CircularProgress } from "@material-ui/core";
import { useState, useEffect } from "react";
import { get } from "../api/api";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  product: {
    textAlign: "center",
  },
  image: {
    height: "500px",
    maxWidth: "100vh",
  },
  button: {
    float: "left",
    background: "lightgray",
  },
}));

const Product = () => {
  const [product, setProduct] = useState();
  const [reviews, setReviews] = useState([]);
  const classes = useStyles();
  const history = useHistory();

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
    history.push("/");
  };

  return (
    <div className={classes.product}>
      <Button className={classes.button} onClick={() => handleClick()}>
        Home
      </Button>
      {product && reviews && reviews.length ? (
        <>
          <h2>{product.name}</h2>
          <Paper variant="outlined">
            <img className={classes.image} src={product.image_src} />
            <p>{product.description}</p>
          </Paper>
          <h2>Reviews</h2>
          {/* enhanced table with reviews */}
          {/* add review button */}
          {/* create review component (modal popup) */}
        </>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default Product;
