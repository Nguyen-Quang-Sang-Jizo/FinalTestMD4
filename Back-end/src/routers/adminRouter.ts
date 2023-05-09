import { Router } from "express";
import adminController from "../controllers/adminController";

const adminRouter = Router();
adminRouter.get("/showAccount", adminController.findAll);
adminRouter.delete("/accountDelete/:id", adminController.accountDelete);
adminRouter.get("/postSearch/:name", adminController.postSearch);
adminRouter.get('/searchName/:name', adminController.searchUsername);
export default adminRouter;