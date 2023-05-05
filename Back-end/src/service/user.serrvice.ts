import {User} from "../models/User";
import {AppDataSource} from "../configs/data-source";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {SECRET} from "../middleware/auth";

class UserService{
    private userRepository;

    constructor() {
        this.userRepository = AppDataSource.getRepository(User);
    }

    registers = async (user) => {
        user.password = await bcrypt.hash(user.password, 10);
        return this.userRepository.save(user);
    }

    checkUser = async (user) => {
        let userFind = await this.userRepository.findOneBy({username: user.username});
        if(!userFind){
            return 'User is not exist'
        }else {
            let passWordCompare = await bcrypt.compare(user.password, userFind.password);
            if(passWordCompare){
                let payload = {
                    idUser: userFind.id,
                    username: userFind.username,
                    role: userFind.role
                }
                return jwt.sign(payload, SECRET, {
                    expiresIn: 1000
                })
            }else {
                return 'Password is wrong'
            }
        }
    }
}

export default new UserService();