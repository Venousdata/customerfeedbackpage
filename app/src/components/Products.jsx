// displays all products in a grid format. displayed on home page

import {
  makeStyles,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

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

const Products = ({ products }) => {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = ({ id }) => {
    // if i click on a product, i change page via pushing the product id to history
    // which takes me to the individual product page
    history.push(`product/${id}`);
  };

  return (
    <>
      <Grid
        container
        justify="center"
        spacing={3}
        className={classes.gridcontainer}
      >
        {products.map((product) => (
          <Grid key={product.id} item>
            <Card className={classes.card}>
              <CardActionArea onClick={() => handleClick(product)}>
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
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Products;
