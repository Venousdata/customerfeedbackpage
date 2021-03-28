import Router from "express-promise-router";
import { query } from "../db/index.js";

const router = new Router();

// export to be mounted
export default router;

router.get("/all", async (req, res) => {
  const sqlText = "SELECT * FROM products";
  const { rows } = await query(sqlText);
  res.send(rows);
});
