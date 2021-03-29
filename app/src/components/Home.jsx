import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from "react";
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
    get("products/all")
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={classes.home}>
      <h2>Home</h2>
      <p>Check out some of our products!</p>
      <Products products={products} />
    </div>
  );
};

export default Home;
