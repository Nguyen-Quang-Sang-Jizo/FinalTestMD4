import userRouter from "./user.router";

const router = (app) => {
    app.use('/auth', userRouter);
};

export default router;