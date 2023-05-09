"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = __importDefault(require("../service/admin/userService"));
const postService_1 = __importDefault(require("../service/admin/postService"));
class AdminController {
    constructor() {
        this.findAll = async (req, res) => {
            let account = await this.adminService.getAll();
            res.status(200).json(account);
        };
        this.accountDelete = (req, res) => {
            let idDelete = req.params.id;
            let account = this.adminService.accountDelete(idDelete);
            res.status(200).json(account);
        };
        this.postSearch = async (req, res) => {
            let titleSearch = req.params.name;
            let post = await this.postService.postSearch(titleSearch);
            res.status(200).json(post);
        };
        this.searchUsername = async (req, res) => {
            let username = req.params.name;
            let user = await this.adminService.adminSearchUsername(username);
            res.status(200).json(user);
        };
        this.adminService = userService_1.default;
        this.postService = postService_1.default;
    }
}
exports.default = new AdminController();
//# sourceMappingURL=adminController.js.map