import { Request, Response } from "express";
declare class PostController {
    private postService;
    private categoryService;
    constructor();
    findAll: (req: Request, res: Response) => Promise<void>;
    addPost: (req: Request, res: Response) => Promise<void>;
    update(req: Request, res: Response): Promise<void>;
    remove(req: Request, res: Response): Promise<void>;
    getProduct(req: Request, res: Response): Promise<void>;
}
declare const _default: PostController;
export default _default;
