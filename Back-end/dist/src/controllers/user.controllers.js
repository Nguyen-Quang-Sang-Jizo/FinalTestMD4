"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_serrvice_1 = __importDefault(require("../service/user.serrvice"));
class UserControllers {
    constructor() {
        this.register = async (req, res) => {
            await this.userService.registers(req.body);
            res.status(201).json('Create user success');
        };
        this.login = async (req, res) => {
            let resultCheck = await this.userService.checkUser(req.body);
            res.status(200).json(resultCheck);
        };
        this.userService = user_serrvice_1.default;
    }
}
exports.default = new UserControllers();
//# sourceMappingURL=user.controllers.js.map