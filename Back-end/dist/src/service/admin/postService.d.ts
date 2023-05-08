declare class PostService {
    private postRepository;
    constructor();
    postSearch: (posts: any) => Promise<any>;
}
declare const _default: PostService;
export default _default;
