"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_router_1 = __importDefault(require("./user.router"));
const postRouter_1 = __importDefault(require("./postRouter"));
const categoryRouter_1 = __importDefault(require("./categoryRouter"));
const adminRouter_1 = __importDefault(require("./adminRouter"));
const router = (app) => {
    app.use('/Uauth', user_router_1.default);
    app.use('/Aauth', adminRouter_1.default);
    app.use('/post', postRouter_1.default);
    app.use('/categories', categoryRouter_1.default);
};
exports.default = router;
//# sourceMappingURL=index.js.map