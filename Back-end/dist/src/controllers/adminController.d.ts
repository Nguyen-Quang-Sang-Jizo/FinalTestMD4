import { Request, Response } from "express";
declare class AdminController {
    private adminService;
    constructor();
    findAll: (req: Request, res: Response) => Promise<void>;
    accountDelete: (req: Request, res: Response) => void;
}
declare const _default: AdminController;
export default _default;
