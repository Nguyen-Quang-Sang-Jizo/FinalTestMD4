import userRouter from "./user.router";
import postRouter from "./postRouter";
import categoryRouter from "./categoryRouter";
import adminRouter from "./adminRouter";

const router = (app) => {
    app.use('/auth', userRouter);
    app.use('/auth', adminRouter)
    app.use('/post', postRouter);
    app.use('/categories', categoryRouter);
};

export default router;