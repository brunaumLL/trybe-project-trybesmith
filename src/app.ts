import express from 'express';
import ProducRouter from './routes/product.routes';
import UserRouter from './routes/user.routes';
import OrderRouter from './routes/order.routes';

const app = express();

app.use(express.json());

app.use('/products', ProducRouter);
app.use('/users', UserRouter);
app.use('/orders', OrderRouter);

export default app;

// will smith melhor smith