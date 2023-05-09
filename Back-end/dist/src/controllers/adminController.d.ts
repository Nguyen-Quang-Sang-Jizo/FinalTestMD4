import { Request, Response } from "express";
declare class AdminController {
    private adminService;
    private postService;
    constructor();
    findAll: (req: Request, res: Response) => Promise<void>;
    accountDelete: (req: Request, res: Response) => void;
    postSearch: (req: Request, res: Response) => Promise<void>;
    searchUsername: (req: Request, res: Response) => Promise<void>;
}
declare const _default: AdminController;
export default _default;
