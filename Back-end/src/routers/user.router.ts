    import express from "express";
import userControllers from "../controllers/user.controllers";
const userRouter = express.Router();

userRouter.post('/register', userControllers.register);
userRouter.post('/login', userControllers.login);
userRouter.get('/delete/:id', userControllers.deleteAccount);
export default userRouter;
