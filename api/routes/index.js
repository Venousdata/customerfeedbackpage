import product from "./product.js";
import products from "./products.js";
import productReviews from "./productreviews.js";

export default (app) => {
  app.use("/product", product);
  app.use("/products", products);
  app.use("/productreviews", productReviews);
};
