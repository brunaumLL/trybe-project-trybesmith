import Order from '../interfaces/order.interface';
import OrderModel from '../models/order.model';
import connection from '../models/connection';

export default class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAll(): Promise<Order[]> {
    const orders = await this.model.getAll();
    return orders;
  }
}