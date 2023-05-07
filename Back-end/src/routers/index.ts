import userRouter from "./user.router";
import postRouter from "./postRouter";
import categoryRouter from "./categoryRouter";

const router = (app) => {
    app.use('/auth', userRouter);
    app.use('/post', postRouter);
    app.use('/categories', categoryRouter);

};

export default router;