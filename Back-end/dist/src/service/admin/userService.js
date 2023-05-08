"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../../configs/data-source");
const User_1 = require("../../models/User");
class AdminService {
    constructor() {
        this.getAll = async () => {
            return (await this.adminRepository.find());
        };
        this.accountDelete = (idDelete) => {
            this.adminRepository.delete(idDelete);
        };
        this.adminRepository = data_source_1.AppDataSource.getRepository(User_1.User);
    }
}
exports.default = new AdminService();
//# sourceMappingURL=userService.js.map