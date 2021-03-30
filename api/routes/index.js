import product from "./product.js";
import products from "./products.js";
import productReviews from "./productreviews.js";
import cors from "cors";

export default (app) => {
  // use cors library to permit cross requests from localhost:3000 (frontend)
  // api would return unauthorised error otherwise.
  app.use(cors({ origin: "http://localhost:3000" }));
  // merge all sub-routers here. i prefer doing it this way as its tidier and keeps files smaller and less messy
  // app.use basically means "if a request is made to an endpoint that starts with XXX, then go into sub-router and
  // call correct complete endpoint"
  app.use("/product", product);
  app.use("/products", products);
  app.use("/productreviews", productReviews);
};
