import { User } from "./User";
import { Post } from "./Post";
export declare class Comment {
    id: number;
    content: string;
    date_created: Date;
    author: User;
    post: Post;
}
