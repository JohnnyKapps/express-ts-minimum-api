import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import webhookRoutes from './routes/webhookRoutes';

dotenv.config();

const _PORT = process.env.PORT ?? 3000;

const app = express();
app.use(cors({
    origin: '*'
}));

app.use(express.json());

app.use('/api/v1/webhook', webhookRoutes);

app.listen(_PORT, () => {
    console.log(`Server running on port ${_PORT}...`);
});