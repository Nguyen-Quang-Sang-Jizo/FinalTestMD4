import { Like } from "typeorm";
import { AppDataSource } from "../../configs/data-source";
import { Post } from "../../models/Post";

class PostService {
    private postRepository;
    constructor() {
        this.postRepository = AppDataSource.getRepository(Post);
    }

    postSearch = async (posts) => { 
        let post = await this.postRepository.findBy({
            title: Like(`%${posts}%`)
        })
        
         return post;
     }
     
}

export default new PostService();