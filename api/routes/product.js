import Router from "express-promise-router";
import { query } from "../db/index.js";

const router = new Router();


router.get("/product/:id", async (req, res) => {
  const id = req.params.id;

  if (!id) throw new Error("ID not present");

  const sqlText = `SELECT * FROM products WHERE id = ${id}`;
  const { rows } = await query(sqlText);
  res.send(rows);
});

// export to be mounted
export default router;
