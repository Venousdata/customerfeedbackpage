import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from "react";
import { get } from "../api/api";

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
      .then((res) => console.log("==========res==========", res))
      .catch((err) => console.log(err));
  }, []);
  console.log("==========products==========", products);
  return (
    <div className={classes.home}>
      <h2>Home</h2>
      <p>Check out some of our products!</p>
      {/* Products */}
    </div>
  );
};

export default Home;
