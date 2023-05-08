import { Router } from "express";
import categoryController from "../controllers/categoryController";

const categoryRouter = Router()

categoryRouter.get('/', categoryController.findAll);
 export default categoryRouter;