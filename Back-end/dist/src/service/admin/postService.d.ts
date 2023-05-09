declare class PostService {
    private postRepository;
    constructor();
    postSearch: (posts: any) => Promise<any>;
    postFilter: (filter: any) => Promise<any>;
    remove: (id: any) => Promise<void>;
}
declare const _default: PostService;
export default _default;
