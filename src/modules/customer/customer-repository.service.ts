import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Customer } from './entities/customer.entity';

import { CustomerRepositoryInterface } from './interfaces/customerRespository';

@Injectable()
export class CustomerRepository implements CustomerRepositoryInterface {
  constructor(@Inject(PrismaService) private prisma: PrismaService) {}
  async findCustomer(username: string): Promise<Customer> {
    try {
      const customerData = await this.prisma.customer.findFirstOrThrow({
        where: {
          username,
        },
      });
      const costumer = new Customer(
        customerData.phone,
        customerData.username,
        customerData.name,
        customerData.password,
        customerData.id,
      );
      return costumer;
    } catch (error) {
      return;
    }
  }

  async createCustomer(data: Customer): Promise<boolean> {
    try {
      await this.prisma.customer.create({
        data,
      });
      return true;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
