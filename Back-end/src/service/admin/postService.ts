import {Like} from "typeorm";
import {AppDataSource} from "../../configs/data-source";
import {Post} from "../../models/Post";

class PostService {
    private postRepository;

    constructor() {
        this.postRepository = AppDataSource.getRepository(Post);
    }

    postSearch = async (posts) => {
        try {
            let post = await this.postRepository.findBy({
                where: {
                    title: Like(`${posts}%`)
                }
            });
            return post;
        } catch (error) {
            console.log(`Error ${error} on postSearch in adminPostService`);
            throw error;
        }
    }

    postFilter = async (filter) => {
        try {
            let filterPost = await this.postRepository.findBy({
                where: {category: Like(`${filter}%`)}
            })
            return filterPost;
        } catch (error) {
            console.log(`Error ${error} on postFilter in adminPostService`);
            throw error;
        }
    }

    remove = async (id) => {
        try {
            await this.postRepository.delete(id);
            console.log('Post removed')
        } catch (error) {
            console.log(`Error ${error} on remove in adminPostService`);
            throw error;
        }
    }
}

export default new PostService();