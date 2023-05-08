import { Router } from "express";
import adminController from "../controllers/adminController";

const adminRouter = Router();
adminRouter.get("/showAccount", adminController.findAll);
adminRouter.delete("/accountDelete/:id", adminController.accountDelete);
adminRouter.get("/postSearch/:name", adminController.postSerach);
export default adminRouter;