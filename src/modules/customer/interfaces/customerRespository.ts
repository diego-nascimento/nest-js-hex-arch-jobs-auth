import { Customer } from '../entities/customer.entity';

export abstract class CustomerRepositoryInterface {
  abstract createCustomer(data: Customer): Promise<boolean>;
  abstract findCustomer(username: string): Promise<Customer | undefined>;
}
