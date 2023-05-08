import {Request, Response} from "express";
import categoryService from "../service/categoryService";

class CategoryController {
    private categoryService;

    constructor() {
        this.categoryService = categoryService;
    }

    findAll = async (req: Request, res: Response) => {
        let listPost = await this.categoryService.getAll();
        res.status(200).json(listPost)
    }

}

export default new CategoryController();