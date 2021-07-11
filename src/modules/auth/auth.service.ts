import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string) {
    // find if user exist with this email
    const user = await this.userService.findOneByEmail(username);
    if (!user) {
      return null;
    }

    // find if user password match
    const match = await this.comparePassword(pass, user.password);
    if (!match) {
      return null;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = user['dataValues'];
    return result;
  }

  async login(user) {
    const token = await this.generateToken(user);
    return { user, token };
  }

  async create(user) {
    // hash the password
    const pass = await this.hashPassword(user.password);

    // create user
    const newUser = await this.userService.create({ ...user, password: pass });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = newUser['dataValues'];

    // generate token
    const token = await this.generateToken(result);

    // return the user and the token
    return { user: result, token };
  }

  private async generateToken(user) {
    const token = await this.jwtService.signAsync(user);
    return token;
  }

  private async comparePassword(enteredPassword, dbPassword): Promise<boolean> {
    const match = await bcrypt.compare(enteredPassword, dbPassword);
    return match;
  }

  private async hashPassword(password) {
    const hash = await bcrypt.hash(password, 10);
    return hash;
  }
}
