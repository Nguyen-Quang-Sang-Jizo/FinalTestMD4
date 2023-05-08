"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const data_source_1 = require("../../configs/data-source");
const Post_1 = require("../../models/Post");
class PostService {
    constructor() {
        this.postSearch = async (posts) => {
            let post = await this.postRepository.findBy({
                title: (0, typeorm_1.Like)(`%${posts}%`)
            });
            return post;
        };
        this.postRepository = data_source_1.AppDataSource.getRepository(Post_1.Post);
    }
}
exports.default = new PostService();
//# sourceMappingURL=postService.js.map