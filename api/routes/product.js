import Router from "express-promise-router";
import { query } from "../db/index.js";

const router = new Router();

// gets individual product. called when we click an individual product on homepage and are taken to product page
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  if (!id) throw new Error("ID not present");
  const sqlText = `SELECT * FROM products WHERE id = ${id}`;
  const { rows } = await query(sqlText);
  res.send(rows[0]);
});

// export to be mounted
export default router;
