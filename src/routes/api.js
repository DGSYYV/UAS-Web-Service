import express from "express";
const router = express.Router();
import * as priceController from "../controllers/priceController.js";
import * as sizeController from "../controllers/sizeController.js";
import * as shoesController from "../controllers/shoesController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

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

router.get("/price", authMiddleware, priceController.getAll);
router.get("/price/:id", authMiddleware, priceController.getById);
router.post("/price", authMiddleware, priceController.create);
router.put("/price/:id", authMiddleware, priceController.update);
router.delete("/price/:id", authMiddleware, priceController.remove);

router.get("/size", authMiddleware, sizeController.getAll);
router.get("/size/:id", authMiddleware, sizeController.getById);
router.post("/size", authMiddleware, sizeController.create);
router.put("/size/:id", authMiddleware, sizeController.update);
router.delete("/size/:id", authMiddleware, sizeController.remove);

router.get("/shoes", authMiddleware, shoesController.getAll);
router.get("/shoes/:id", authMiddleware, shoesController.getById);
router.post("/shoes", authMiddleware, shoesController.create);
router.put("/shoes/:id", authMiddleware, shoesController.update);
router.delete("/shoes/:id", authMiddleware, shoesController.remove);

export default router;
