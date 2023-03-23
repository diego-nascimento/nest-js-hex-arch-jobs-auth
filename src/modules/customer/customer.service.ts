import { Body, Inject, Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { Customer } from './entities/customer.entity';
import { CustomerRepositoryInterface } from './interfaces/customerRespository';

@Injectable()
export class CustomerService {
  constructor(
    @Inject(CustomerRepositoryInterface)
    private readonly customerRepository: CustomerRepositoryInterface,
  ) {}

  async create(data: CreateCustomerDto) {
    const customer = new Customer(
      data.phone,
      data.username,
      data.name,
      data.password,
    );
    await customer.hashPassword();
    await this.customerRepository.createCustomer(customer);
    return;
  }

  async findUser(username: string): Promise<Customer | undefined> {
    const customer = await this.customerRepository.findCustomer(username);
    if (customer) return customer;
    return undefined;
  }
}
