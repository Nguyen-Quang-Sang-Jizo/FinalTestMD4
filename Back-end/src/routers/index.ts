import userRouter from "./user.router";
import postRouter from "./postRouter";

const router = (app) => {
    app.use('/auth', userRouter);
    app.use('/post', postRouter);

};

export default router;