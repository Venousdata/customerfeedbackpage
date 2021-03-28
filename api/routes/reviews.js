import Router from "express-promise-router";
import { query } from "../db/index.js";

const router = new Router();

router.get("/reviews", async (req, res) => {
  const sqlText = "SELECT * FROM reviews";
  const { rows } = await query(sqlText);
  res.send(rows);
});

// export to be mounted
export default router;
