// home page, first thing you see when app loads up

import { CircularProgress, makeStyles, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { get } from "../api/api";
import Products from "./Products";

const useStyles = makeStyles((theme) => ({
  home: {
    textAlign: "center",
  },
}));

const Home = () => {
  const [products, setProducts] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    //retrieve all products and pass them to the Products component to show on home page
    get("products/all")
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div data-testid="home" className={classes.home}>
      <Typography color="secondary" variant="h3">
        Home
      </Typography>
      <Typography variant="subtitle1">
        Check out some of our products!
      </Typography>
      {products ? <Products products={products} /> : <CircularProgress />}
    </div>
  );
};

export default Home;
