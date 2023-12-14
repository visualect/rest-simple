import express from 'express';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client'
import router from './routers/postsRouter.js';

dotenv.config()
const app = express();
export const prisma = new PrismaClient();
const PORT = process.env.PORT

app.use(express.json());
app.use('/api', router);

const startApp = async () => {
    try {
        prisma.$connect()
        app.listen(PORT, () => {
            console.log('Listening on http://localhost:' + PORT);
        })
    } catch(e) {
        prisma.$disconnect()
        throw new Error('Failed to start server')
    }
}

startApp()

