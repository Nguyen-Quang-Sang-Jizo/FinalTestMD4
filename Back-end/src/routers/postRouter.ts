import express  from "express";
import  {auth} from "../middleware/auth"
import postController from "../controllers/postController";
const postRouter = express.Router();

postRouter.use(auth);
postRouter.get('/', postController.findAll);
postRouter.post('/', postController.addPost);
postRouter.put('/:id', postController.update);
postRouter.delete('/:id', postController.remove);
postRouter.get('/:id', postController.getProduct);

export default postRouter;