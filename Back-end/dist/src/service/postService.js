"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Post_1 = require("../models/Post");
const data_source_1 = require("../configs/data-source");
class PostService {
    constructor() {
        this.getAll = async () => {
            let posts = await this.postRepository.find({
                relations: {
                    category: true,
                }
            });
            return posts;
        };
        this.add = async (Post) => {
            console.log(Post);
            await this.postRepository.save(Post);
        };
        this.postRepository = data_source_1.AppDataSource.getRepository(Post_1.Post);
    }
    async update(id, newPost) {
        await this.postRepository.update(id, newPost);
    }
    async remove(id) {
        await this.postRepository.delete(id);
    }
    async findOne(id) {
        const post = await this.postRepository.findOne({
            relations: ["category"],
            where: { id: id },
        });
        return post;
    }
}
exports.default = new PostService();
//# sourceMappingURL=postService.js.map