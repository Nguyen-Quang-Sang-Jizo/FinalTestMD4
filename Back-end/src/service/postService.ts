import {Post} from "../models/Post";
import {AppDataSource} from "../configs/data-source";
import {ILike, Like} from "typeorm";

class PostService {
    private postRepository;

    constructor() {
        this.postRepository = AppDataSource.getRepository(Post)
    }

    getAll = async () => {
        let posts = await this.postRepository.find({
            relations: {
                category: true,
            }
        });
        return posts;
    }

    add = async (Post) => {
        console.log(Post)
        await this.postRepository.save(Post);
    }

    async update(id,newPost){
        await this.postRepository.update(id,newPost)
    }

    async remove(id){
        await this.postRepository.delete(id)
    }
    async findOne(id){
        const post = await this.postRepository.findOne({
            relations:["category"],
            where: {id:id},
        })
        return post;
    }
}

export default new PostService();