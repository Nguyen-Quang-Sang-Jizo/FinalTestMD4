declare class CategoryService {
    private categoryRepository;
    constructor();
    getAll: () => Promise<any>;
    searchCategoryName: (categoryName: any) => Promise<any>;
}
declare const _default: CategoryService;
export default _default;
