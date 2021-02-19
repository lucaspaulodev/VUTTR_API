import { Router } from "express";

import ToolController from "../controllers/ToolController";

const toolsRouter = Router();

const toolController = new ToolController();

toolsRouter.get("/tools", toolController.show);
toolsRouter.get("/tools", toolController.index);
toolsRouter.post("/tools", toolController.create);
toolsRouter.delete("/tools/:id", toolController.delete);

export default toolsRouter;
