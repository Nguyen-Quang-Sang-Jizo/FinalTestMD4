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
                title: Like(`%${posts}%`)
            })
            return post;
        } catch (error) {
            console.log(`Error ${error} on postSearch in adminPostService`);
        }
    }

    postFilter = async (filter) => {
        try {
            let filterPost = await this.postRepository.find({
                where: {category: filter}
            })
            return filterPost;
        } catch (error) {
            console.log(`Error ${error} on postFilter in adminPostService`);
        }
    }
}

export default new PostService();