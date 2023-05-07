"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_router_1 = __importDefault(require("./user.router"));
const postRouter_1 = __importDefault(require("./postRouter"));
const router = (app) => {
    app.use('/auth', user_router_1.default);
    app.use('/post', postRouter_1.default);
};
exports.default = router;
//# sourceMappingURL=index.js.map