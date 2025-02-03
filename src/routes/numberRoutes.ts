import { Router } from "express";
import { classifyNumberHandler } from "../controllers/numberController";

const router = Router();

router.get("/api/classify-number", classifyNumberHandler);

export default router;
