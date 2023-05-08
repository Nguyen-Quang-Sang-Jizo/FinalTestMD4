"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const categoryService_1 = __importDefault(require("../service/categoryService"));
class CategoryController {
    constructor() {
        this.findAll = async (req, res) => {
            let listPost = await this.categoryService.getAll();
            res.status(200).json(listPost);
        };
        this.categoryService = categoryService_1.default;
    }
}
exports.default = new CategoryController();
//# sourceMappingURL=categoryController.js.map