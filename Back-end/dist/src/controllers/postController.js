"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const postService_1 = __importDefault(require("../service/postService"));
const categoryService_1 = __importDefault(require("../service/categoryService"));
class PostController {
    constructor() {
        this.findAll = async (req, res) => {
            let listPost = await this.postService.getAll();
            res.status(200).json(listPost);
        };
        this.addPost = async (req, res) => {
            await this.postService.add(req.body);
            if (!req.body.name) {
                res.status(400).json({
                    message: 'name missing'
                });
                res.end();
            }
            else {
                res.status(201).json({
                    message: 'OK'
                });
            }
        };
        this.postService = postService_1.default;
        this.categoryService = categoryService_1.default;
    }
    async update(req, res) {
        let id = req.params.id;
        console.log(id);
        let newPost = req.body;
        await postService_1.default.update(id, newPost);
        res.status(200).json({ message: "update" });
    }
    async remove(req, res) {
        await postService_1.default.remove(req.params.id);
        res.status(200).json({ message: "delete" });
    }
    async getProduct(req, res) {
        let id = req.params.id;
        let post = await postService_1.default.findOne(id);
        res.status(200).json(post);
    }
}
exports.default = new PostController();
//# sourceMappingURL=postController.js.map