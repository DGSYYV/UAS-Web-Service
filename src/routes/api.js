import express from "express";
const router = express.Router();
import * as shoesTypeController from "../controllers/shoesTypeController.js";

router.get("/shoes-type",shoesTypeController.getAll);
router.get("/shoes-type/:id",shoesTypeController.getById);
router.post("/shoes-type",shoesTypeController.create);
router.put("/shoes-type/:id",shoesTypeController.update);
router.delete("/shoes-type/:id",shoesTypeController.remove);

export default router;
