import express from 'express';
import ProducRouter from './routes/product.routes';
import UserRouter from './routes/user.routes';

const app = express();

app.use(express.json());

app.use('/products', ProducRouter);
app.use('/users', UserRouter);

export default app;

// will smith melhor smith