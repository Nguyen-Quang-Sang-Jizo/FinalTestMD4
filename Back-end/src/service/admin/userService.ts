import {AppDataSource} from "../../configs/data-source";
import {User} from "../../models/User";
import {Like} from "typeorm";

class AdminService {
    private adminRepository;

    constructor() {
        this.adminRepository = AppDataSource.getRepository(User);
    }

    getAll = async () => {
        try {
            return (await this.adminRepository.find());
        } catch (error) {
            console.log(`Error ${error} on getAll in adminUserService`);
            throw error;
        }
    }

    accountDelete = (idDelete) => {
        try {
            this.adminRepository.delete(idDelete);
            console.log('Account Deleted');
        } catch (error) {
            console.log(`Error ${error} on accountDelete in adminUserService`);
            throw error;
        }
    }

    adminSearchUsername = async (username) => {
        try {
            let searchPeople = await this.adminRepository.find({
                where: {
                    username: Like(`${username}%`),
                    role: 'User'
                }
            });
            return searchPeople;
        } catch (error) {
            console.log(`Error ${error} on adminSearchUsername in adminUserService`);
            throw error;
        }
    }
}

export default new AdminService();