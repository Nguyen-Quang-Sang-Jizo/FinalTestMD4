"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = exports.connectDB = void 0;
require("reflect-metadata");
const User_1 = require("../models/User");
const Category_1 = require("../models/Category");
const typeorm_1 = require("typeorm");
const Page_1 = require("../models/Page");
const Post_1 = require("../models/Post");
const Tag_1 = require("../models/Tag");
const Comment_1 = require("../models/Comment");
const typeorm_2 = require("typeorm");
const AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "module4",
    synchronize: true,
    logging: false,
    entities: [User_1.User, Category_1.Category, Comment_1.Comment, Page_1.Page, Post_1.Post, Tag_1.Tag, typeorm_2.Like],
    migrations: ["./dist/src/migrations/*.js"],
});
exports.AppDataSource = AppDataSource;
async function connectDB() {
    try {
        let connect = await AppDataSource.initialize();
        if (connect) {
            console.log("Connect DB successfully");
        }
        else {
            console.log("Database connect error");
        }
    }
    catch (error) {
        console.log(error);
    }
}
exports.connectDB = connectDB;
//# sourceMappingURL=data-source.js.map