"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const data_source_1 = require("../../configs/data-source");
const Post_1 = require("../../models/Post");
class PostService {
    constructor() {
        this.postSearch = async (posts) => {
            try {
                let post = await this.postRepository.findBy({
                    where: {
                        title: (0, typeorm_1.Like)(`${posts}%`)
                    }
                });
                return post;
            }
            catch (error) {
                console.log(`Error ${error} on postSearch in adminPostService`);
                throw error;
            }
        };
        this.postFilter = async (filter) => {
            try {
                let filterPost = await this.postRepository.findBy({
                    where: { category: (0, typeorm_1.Like)(`${filter}%`) }
                });
                return filterPost;
            }
            catch (error) {
                console.log(`Error ${error} on postFilter in adminPostService`);
                throw error;
            }
        };
        this.remove = async (id) => {
            try {
                await this.postRepository.delete(id);
                console.log('Post removed');
            }
            catch (error) {
                console.log(`Error ${error} on remove in adminPostService`);
                throw error;
            }
        };
        this.postRepository = data_source_1.AppDataSource.getRepository(Post_1.Post);
    }
}
exports.default = new PostService();
//# sourceMappingURL=postService.js.map