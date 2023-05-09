"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Category_1 = require("../models/Category");
const data_source_1 = require("../configs/data-source");
class CategoryService {
    constructor() {
        this.getAll = async () => {
            try {
                let categories = await this.categoryRepository.find();
                return categories;
            }
            catch (error) {
                console.log(`Error ${error} on getAll in categoryService`);
                throw error;
            }
        };
        this.searchCategoryName = async (categoryName) => {
            try {
                let searchCategory = await this.categoryRepository.findBy({
                    where: {
                        name: categoryName
                    }
                });
                return searchCategory;
            }
            catch (error) {
                console.log(`Error ${error} on searchCategoryName in categoryService`);
                throw error;
            }
        };
        this.categoryRepository = data_source_1.AppDataSource.getRepository(Category_1.Category);
    }
}
exports.default = new CategoryService();
//# sourceMappingURL=categoryService.js.map