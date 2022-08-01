import { Pool } from 'mysql2/promise';
import Order from '../interfaces/order.interface';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Order[]> {
    const query = `
      SELECT
      o.userId AS userId,
      o.id AS id,
      JSON_ARRAYAGG(p.id) as productsIds
      FROM Trybesmith.Orders AS o
      INNER JOIN Trybesmith.Products AS p ON o.id = p.orderId
      GROUP BY o.id
      ORDER BY o.userId`;
    const result = await this.connection.execute(query);
    const [rows] = result;
    return rows as Order[];
  }
}
