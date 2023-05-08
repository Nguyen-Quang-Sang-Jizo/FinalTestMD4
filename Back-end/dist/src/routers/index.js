"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_router_1 = __importDefault(require("./user.router"));
<<<<<<< HEAD
const adminRouter_1 = __importDefault(require("./adminRouter"));
const router = (app) => {
    app.use('/auth', user_router_1.default);
    app.use("/auth", adminRouter_1.default);
=======
const postRouter_1 = __importDefault(require("./postRouter"));
const categoryRouter_1 = __importDefault(require("./categoryRouter"));
const router = (app) => {
    app.use('/auth', user_router_1.default);
    app.use('/post', postRouter_1.default);
    app.use('/categories', categoryRouter_1.default);
>>>>>>> 7a2fd818b5188a0b66c427a7929b3d150c390235
};
exports.default = router;
//# sourceMappingURL=index.js.map