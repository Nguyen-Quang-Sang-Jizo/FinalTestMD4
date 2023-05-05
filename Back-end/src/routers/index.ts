import userRouter from "./user.router";
import adminRouter from "./adminRouter";

const router = (app) => {
    app.use('/auth', userRouter);
    app.use("/auth", adminRouter);
};

export default router;