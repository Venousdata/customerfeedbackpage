// displays all products in a grid format. displayed on home page

import React from "react";
import {
  makeStyles,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  gridcontainer: {
    textAlign: "center",
  },
  card: {
    width: 345,
    height: 600,
  },
  media: {
    height: 500,
  },
}));

const Products = ({ products = [] }) => {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        justify="center"
        spacing={3}
        className={classes.gridcontainer}
        data-testid="products"
      >
        {products.map((product) => (
          <Grid key={product.id} item>
            <Card className={classes.card}>
              <Link to={{ pathname: `/product/${product.id}` }}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={product.image_src}
                    title={product.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {product.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {product.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Products;
