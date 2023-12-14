import PostsService from "../services/postsService.js";

class PostController {
    async getAll(req, res) {
        const posts = await PostsService.findMany()
        res.json(posts)
    }

    async addOne(req, res) {
        const post = await PostsService.create(req.body)
        res.json(post)
    }

    async getOneById(req, res) {
        const post = await PostsService.findUnique(req.params.id)
        res.json(post)
    }  
    
    async deleteOne(req, res) {
       const post = await PostsService.delete(req.body.id)
       res.json({
        message: `Post ${req.body.id} successfully deleted`
       })
    }  
}

export default new PostController()