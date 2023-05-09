"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Post_1 = require("../models/Post");
const data_source_1 = require("../configs/data-source");
class PostService {
    constructor() {
        this.getAll = async () => {
            try {
                let posts = await this.postRepository.find({
                    relations: {
                        category: true,
                    }
                });
                return posts;
            }
            catch (error) {
                console.log(`Error ${error} on getAlL in userPostService`);
                throw error;
            }
        };
        this.add = async (Post) => {
            try {
                console.log(Post);
                await this.postRepository.save(Post);
                console.log('Post added');
            }
            catch (error) {
                console.log(`Error ${error} on add in userPostService`);
                throw error;
            }
        };
        this.update = async (id, newPost) => {
            try {
                await this.postRepository.update(id, newPost);
                console.log('Post updated');
            }
            catch (error) {
                console.log(`Error ${error} on update in userPostService`);
                throw error;
            }
        };
        this.remove = async (id) => {
            try {
                await this.postRepository.delete(id);
                console.log('Post removed');
            }
            catch (error) {
                console.log(`Error ${error} on remove in userPostService`);
                throw error;
            }
        };
        this.findOne = async (id) => {
            try {
                const post = await this.postRepository.findOne({
                    relations: ["category"],
                    where: { id: id },
                });
                return post;
            }
            catch (error) {
                console.log(`Error ${error} on findOne in userPostService`);
                throw error;
            }
        };
        this.postRepository = data_source_1.AppDataSource.getRepository(Post_1.Post);
    }
}
exports.default = new PostService();
//# sourceMappingURL=postService.js.map