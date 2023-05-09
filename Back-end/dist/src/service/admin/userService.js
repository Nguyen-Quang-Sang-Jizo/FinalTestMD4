"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../../configs/data-source");
const User_1 = require("../../models/User");
const typeorm_1 = require("typeorm");
class AdminService {
    constructor() {
        this.getAll = async () => {
            try {
                return (await this.adminRepository.find());
            }
            catch (error) {
                console.log(`Error ${error} on getAll in adminUserService`);
                throw error;
            }
        };
        this.accountDelete = (idDelete) => {
            try {
                this.adminRepository.delete(idDelete);
                console.log('Account Deleted');
            }
            catch (error) {
                console.log(`Error ${error} on accountDelete in adminUserService`);
                throw error;
            }
        };
        this.adminSearchUsername = async (username) => {
            try {
                let searchPeople = await this.adminRepository.find({
                    where: {
                        username: (0, typeorm_1.Like)(`${username}%`)
                    }
                });
                return searchPeople;
            }
            catch (error) {
                console.log(`Error ${error} on adminSearchUsername in adminUserService`);
                throw error;
            }
        };
        this.adminRepository = data_source_1.AppDataSource.getRepository(User_1.User);
    }
}
exports.default = new AdminService();
//# sourceMappingURL=userService.js.map