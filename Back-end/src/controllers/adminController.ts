import { Request, Response } from "express";
import adminService from "../service/admin/userService";
import postService from "../service/admin/postService";

class AdminController {
    private adminService;
    private postService;
    constructor() {
        this.adminService = adminService;
        this.postService = postService;
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

    postSearch = async (req: Request, res: Response) => {
        let titleSearch = req.params.name
        let post = await this.postService.postSearch(titleSearch)
        res.status(200).json(post)
    }

    searchUsername = async (req: Request, res: Response) => {
        let username = req.params.name;
        let user = await this.adminService.adminSearchUsername(username);
        res.status(200).json(user);
    }

}

export default new AdminController()