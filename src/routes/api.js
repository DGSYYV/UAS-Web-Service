import express from "express";
const router = express.Router();
import * as shoesTypeController from "../controllers/shoesTypeController.js";
import * as priceController from "../controllers/priceController.js";
import * as sizeController from "../controllers/sizeController.js";
import * as shoesController from "../controllers/shoesController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

router.get("/shoes-type",shoesTypeController.getAll);
router.get("/shoes-type/:id",shoesTypeController.getById);
router.post("/shoes-type",shoesTypeController.create);
router.put("/shoes-type/:id",shoesTypeController.update);
router.delete("/shoes-type/:id",shoesTypeController.remove);

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
