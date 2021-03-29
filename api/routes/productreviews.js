import Router from "express-promise-router";
import { query } from "../db/index.js";

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

  // validate body to see all params present (helper file)
  // if validation comes back false then throw error

  const { name, email, rating, comment, date } = req.body;
  console.log("==========req.body==========", req.body);

  const sqlText = `INSERT INTO reviews (name, email, rating, comment, date, productid) VALUES (${name}, ${email}, ${rating}, ${comment}, ${date}, ${id})`;
  const { rows } = await query(sqlText);
  res.send(rows);
});

// export to be mounted
export default router;
