"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const postController_1 = __importDefault(require("../controllers/postController"));
const postRouter = express_1.default.Router();
postRouter.get('/', postController_1.default.findAll);
postRouter.post('/', postController_1.default.addPost);
postRouter.put('/:id', postController_1.default.update);
postRouter.delete('/:id', postController_1.default.remove);
postRouter.get('/:id', postController_1.default.getProduct);
exports.default = postRouter;
//# sourceMappingURL=postRouter.js.map