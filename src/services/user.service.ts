import jwt from 'jsonwebtoken';
import User from '../interfaces/user.interface';
import UserModel from '../models/user.model';
import connection from '../models/connection';

const secret = process.env.JWT_SECRET || 'secret';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public create(user: User): Promise<User> {
    return this.model.create(user);
  }

  public makeToken = (user: User): string => {
    const token = jwt.sign({ data: { user } }, secret);
    return token;
  };
}