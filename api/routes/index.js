import product from "./product.js";
import products from "./products.js";
import reviews from "./reviews.js";
import productReviews from "./productreviews.js";

export default (app) => {
  app.use("/product", product);
  app.use("/products", products);
  app.use("/reviews", reviews);
  app.use("/reviews/:id", productReviews);
};
