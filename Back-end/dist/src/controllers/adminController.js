"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const adminService_1 = __importDefault(require("../service/adminService"));
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
        this.adminService = adminService_1.default;
    }
}
exports.default = new AdminController();
//# sourceMappingURL=adminController.js.map