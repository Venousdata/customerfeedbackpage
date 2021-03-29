import product from "./product.js";
import products from "./products.js";
import productReviews from "./productreviews.js";
import cors from "cors";

export default (app) => {
  app.use(cors({ origin: "http://localhost:3000" }));
  app.use("/product", product);
  app.use("/products", products);
  app.use("/productreviews", productReviews);
};
