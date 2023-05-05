import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinTable, ManyToMany} from "typeorm";
import { User } from "./User";
import { Category } from "./Category";
import { Tag } from "./Tag";
import { Comment } from "./Comment";

@Entity()
export class Post {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  date_created: Date;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  date_updated: Date;

  @ManyToOne(() => User, user => user.posts)
  author: User;

  @ManyToOne(() => Category, category => category.posts)
  category: Category;

  @ManyToMany(() => Tag)
  @JoinTable()
  tags: Tag[];

  @OneToMany(() => Comment, comment => comment.post)
  comments: Comment[];
}
