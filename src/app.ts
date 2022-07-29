import express from 'express';
import ProducRouter from './routes/product.routes';

const app = express();

app.use(express.json());

app.use('/products', ProducRouter);

export default app;

// will smith melhor smith