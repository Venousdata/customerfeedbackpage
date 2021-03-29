import {
  makeStyles,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CircularProgress,
} from "@material-ui/core";

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
  console.log("==========products==========", products);

  const test = (product) => {
    console.log("TESTING", product);
  };

  return (
    <>
      {products && products.length ? (
        <Grid
          container
          justify="center"
          spacing={3}
          className={classes.gridcontainer}
        >
          {products.map((product) => (
            <Grid key={product.id} item>
              <Card className={classes.card}>
                <CardActionArea onClick={() => test(product)}>
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
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default Products;
