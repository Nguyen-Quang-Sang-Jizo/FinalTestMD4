"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controllers_1 = __importDefault(require("../controllers/user.controllers"));
const userRouter = express_1.default.Router();
userRouter.post('/register', user_controllers_1.default.register);
userRouter.post('/login', user_controllers_1.default.login);
exports.default = userRouter;
//# sourceMappingURL=user.router.js.map