import { AppDataSource } from "../../configs/data-source";
import { User } from "../../models/User";

class AdminService {
    private adminRepository;
    constructor() {
        this.adminRepository = AppDataSource.getRepository(User);
    }

    getAll = async () => {
        return ( await this.adminRepository.find());
    }

    accountDelete = (idDelete) => {
        this.adminRepository.delete(idDelete)
    }

}

export default new AdminService()