import product from "./product.js";
import products from "./products.js";
import productReviews from "./productreviews.js";
import cors from "cors";
import bodyParser from "body-parser";

export default (app) => {
  app.use(cors({ origin: "http://localhost:3000" }));
  app.use(bodyParser.json());
  app.use("/product", product);
  app.use("/products", products);
  app.use("/productreviews", productReviews);
};
