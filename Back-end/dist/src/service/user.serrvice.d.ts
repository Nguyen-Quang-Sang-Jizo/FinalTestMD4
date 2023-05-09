declare class UserService {
    private userRepository;
    constructor();
    registers: (user: any) => Promise<any>;
    checkUser: (user: any) => Promise<string>;
    accountDelete: (idDelete: any) => void;
}
declare const _default: UserService;
export default _default;
