import Router from "express-promise-router";
import { query } from "../db/index.js";
import { validateProductReviewForm } from "../helpers/helpers.js";
import dayjs from "dayjs";

const router = new Router();

router.get("/all", async (req, res) => {
  const sqlText = "SELECT * FROM reviews";
  const { rows } = await query(sqlText);
  res.send(rows);
});

router.get("/product/:id", async (req, res) => {
  const id = req.params.id;
  if (!id) throw new Error("ID not present");
  const sqlText = `SELECT * FROM reviews WHERE productid = ${id}`;
  const { rows } = await query(sqlText);
  res.send(rows);
});

router.post("/product/:id", async (req, res) => {
  const id = req.params.id;
  if (!id) throw new Error("ID not present");

  if (!validateProductReviewForm(req.body))
    throw new Error("Form not valid. Please fix and try again");

  const { name, email, rating, comment } = req.body;
  const date = dayjs().format("YYYY-MM-DD");
  const sqlText = `INSERT INTO reviews (name, email, rating, comment, date, productid) VALUES ('${name}', '${email}', '${rating}', '${comment}', '${date}', '${id}')`;
  await query(sqlText).catch((err) => console.log(err));

  const { rows } = await query(
    `SELECT * FROM reviews WHERE productid = ${id}`
  ).catch((err) => console.log(err));

  res.send(rows);
});

// export to be mounted
export default router;
