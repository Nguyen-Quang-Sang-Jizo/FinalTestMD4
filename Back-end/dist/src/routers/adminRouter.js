"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const adminController_1 = __importDefault(require("../controllers/adminController"));
const adminRouter = (0, express_1.Router)();
adminRouter.get("/showAccount", adminController_1.default.findAll);
adminRouter.delete("/accountDelete/:id", adminController_1.default.accountDelete);
exports.default = adminRouter;
//# sourceMappingURL=adminRouter.js.map