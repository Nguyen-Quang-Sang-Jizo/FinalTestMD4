declare class PostService {
    private postRepository;
    constructor();
    getAll: () => Promise<any>;
    add: (Post: any) => Promise<void>;
    update: (id: any, newPost: any) => Promise<void>;
    remove: (id: any) => Promise<void>;
    findOne: (id: any) => Promise<any>;
}
declare const _default: PostService;
export default _default;
