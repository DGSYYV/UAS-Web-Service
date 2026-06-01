import express from "express";
const router = express.Router();
import categories from "../controllers/categoryController.js";
import news from "../controllers/newsController.js";

router.get("/categories", categories.getAll);
router.get("/categories/:id", categories.getById);
router.post("/categories", categories.create);
router.put("/categories/:id", categories.update);
router.delete("/categories/:id", categories.destroy);

router.get("/news", news.getAll);
router.get("/news/:id", news.getById);
router.post("/news", news.create);
router.put("/news/:id", news.update);
router.delete("/news/:id", news.destroy);

export default router;
