import Router from 'express';
import PostController from '../controllers/postsController.js';

const router = new Router();

router.get('/posts', PostController.getAll)
router.get('/posts/:id', PostController.getOneById)
router.post('/posts', PostController.addOne)
router.delete('/posts', PostController.deleteOne)

export default router;