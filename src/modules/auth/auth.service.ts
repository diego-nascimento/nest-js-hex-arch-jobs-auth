import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CustomerService } from '../customer/customer.service';
import { Customer } from '../customer/entities/customer.entity';

@Injectable()
export class AuthService {
  constructor(
    private customerService: CustomerService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const customer = await this.customerService.findUser(username);

    const passwordIsValid = await customer.validatePassword(pass);
    if (customer && passwordIsValid) {
      const { ...result } = customer;
      return result;
    }
    return null;
  }

  async login(user: Customer) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
