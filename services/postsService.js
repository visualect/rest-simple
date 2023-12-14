import { prisma } from '../server.js'

class PostsService {
    async findMany() {
        try {
            const posts = await prisma.post.findMany();
            return posts
        } catch(e) {
            throw new Error(e)
        }
    }

    async create(newPost) {
        try {
            const post = await prisma.post.create({
                data: {
                    ...newPost,
                }
            });
            return post
        } catch(e) {
            throw new Error(e)
        }
    }

    async findUnique(postId) {
        try {
            const post = await prisma.post.findUnique({
                where: {
                    id: postId
                }
            });
            return post
        } catch(e) {
            throw new Error(e)
        }
    }

    async delete(postId) {
        try {
            const post = await prisma.post.delete({
                where: {
                    id: postId
                }
            });
            return post
        } catch(e) {
            throw new Error(e)
        }
    }
}

export default new PostsService()