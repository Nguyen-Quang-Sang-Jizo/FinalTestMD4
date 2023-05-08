import {Request, Response} from "express";
import postService from "../service/postService";
import categoryService from "../service/categoryService";

class PostController {
    private postService;
    private categoryService;

    constructor() {
        this.postService = postService;
        this.categoryService = categoryService;
    }

    findAll = async (req: Request, res: Response) => {
        let listPost = await this.postService.getAll();
        res.status(200).json(listPost)
    }

    addPost = async (req: Request, res: Response) => {
        await this.postService.add(req.body);
        if (!req.body.name) {
            res.status(400).json({
                message: 'name missing'
            })
            res.end();
        } else {
            res.status(201).json({
                message: 'OK'
            })
        }
    }

    async update(req:Request,res:Response){

        let id = req.params.id
        console.log(id)
        let newPost = req.body
        await postService.update(id,newPost)
        res.status(200).json({message:"update"})
    }

    async remove(req:Request,res:Response){
        await postService.remove(req.params.id)
        res.status(200).json({message:"delete"})
    }
    async getProduct(req:Request,res:Response){
        let id = req.params.id
        let post = await postService.findOne(id)
        res.status(200).json(post)
    }

}

export default new PostController();