import { provide } from 'midway';
import { IUserService, IUserOptions, IUserResult } from '../interfaces/user';

@provide('userService')
export class UserService implements IUserService {

  async getUser(options: IUserOptions): Promise<IUserResult> {
    return {
      id: options.id,
      username: 'mockedName',
      phone: '12345678901',
      email: 'xxx.xxx@xxx.com',
    };
  }
}
