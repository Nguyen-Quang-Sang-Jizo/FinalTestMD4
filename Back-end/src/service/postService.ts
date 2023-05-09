import {Post} from "../models/Post";
import {AppDataSource} from "../configs/data-source";
import {ILike, Like} from "typeorm";

class PostService {
    private postRepository;

    constructor() {
        this.postRepository = AppDataSource.getRepository(Post)
    }

    getAll = async () => {
        try {
            let posts = await this.postRepository.find({
                relations: {
                    category: true,
                }
            });
            return posts;
        } catch (error) {
            console.log(`Error ${error} on getAlL in userPostService`);
            throw error;
        }
    }

    add = async (Post) => {
        try {
            console.log(Post)
            await this.postRepository.save(Post);
            console.log('Post added')
        } catch (error) {
            console.log(`Error ${error} on add in userPostService`);
            throw error;
        }
    }

    update = async (id, newPost) => {
        try {
            await this.postRepository.update(id, newPost);
            console.log('Post updated')
        } catch (error) {
            console.log(`Error ${error} on update in userPostService`);
            throw error;
        }
    }

    remove = async (id) => {
        try {
            await this.postRepository.delete(id);
            console.log('Post removed')
        } catch (error) {
            console.log(`Error ${error} on remove in userPostService`);
            throw error;
        }
    }

    findOne = async (id) => {
        try {
            const post = await this.postRepository.findOne({
                relations: ["category"],
                where: {id: id},
            })
            return post;
        } catch (error) {
            console.log(`Error ${error} on findOne in userPostService`);
            throw error;
        }
    }
}

export default new PostService();