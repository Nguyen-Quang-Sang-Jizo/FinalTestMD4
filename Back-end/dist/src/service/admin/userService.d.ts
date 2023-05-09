declare class AdminService {
    private adminRepository;
    constructor();
    getAll: () => Promise<any>;
    accountDelete: (idDelete: any) => void;
    adminSearchUsername: (username: any) => Promise<any>;
}
declare const _default: AdminService;
export default _default;
