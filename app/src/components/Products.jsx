import { makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  products: {
    // textAlign: "center",
  },
  gridcontainer: {
    // textAlign: "center",
  },
}));

const Products = ({ products }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.gridcontainer}>
      {products.forEach((product) => (
        <div>Hello World</div>
      ))}
    </Grid>
  );
};

export default Products;
