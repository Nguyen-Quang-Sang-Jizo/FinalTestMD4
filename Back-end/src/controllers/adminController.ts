import { Request, Response } from "express";
import adminService from "../service/adminService";

class AdminController {
    private adminService;
    constructor() {
        this.adminService = adminService;
    }

    findAll = async (req: Request, res: Response) => {
       let account = await this.adminService.getAll()
       res.status(200).json(account)
    }

    accountDelete = (req: Request, res: Response) => {
        let idDelete = req.params.id;
        let account = this.adminService.accountDelete(idDelete);
        res.status(200).json(account)
    }

}

export default new AdminController()