import { Request, Response } from "express";
declare class UserControllers {
    private userService;
    constructor();
    register: (req: Request, res: Response) => Promise<void>;
    login: (req: Request, res: Response) => Promise<void>;
    deleteAccount: (req: Request, res: Response) => Promise<void>;
}
declare const _default: UserControllers;
export default _default;
