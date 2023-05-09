import {Category} from "../models/Category";
import {AppDataSource} from "../configs/data-source";

class CategoryService {
    private categoryRepository;

    constructor() {
        this.categoryRepository = AppDataSource.getRepository(Category);
    }

    getAll = async () => {
        try {
            let categories = await this.categoryRepository.find();
            return categories;
        } catch (error) {
            console.log(`Error ${error} on getAll in categoryService`);
            throw error;
        }
    }

    searchCategoryName = async (categoryName) => {
        try {
            let searchCategory = await this.categoryRepository.findBy({
                where: {
                    name: categoryName
                }
            });
            return searchCategory;
        } catch (error) {
            console.log(`Error ${error} on searchCategoryName in categoryService`);
            throw error;
        }
    }
}

export default new CategoryService();