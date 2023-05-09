import {Request, Response} from "express";
import userService from "../service/user.serrvice";

class UserControllers{
    private userService;
    constructor() {
        this.userService = userService;
    }

    register = async (req: Request, res: Response) => {
        await this.userService.registers(req.body);
        res.status(201).json('Create user success');
    }

    login = async (req: Request, res: Response) => {
        let resultCheck = await this.userService.checkUser(req.body);
        res.status(200).json(resultCheck);
    }

    deleteAccount = async (req: Request, res: Response) => {
        let accountID = req.params.id
        await userService.accountDelete(accountID);
        res.status(201).json('Account Deleted');
    }
}

export default new UserControllers();