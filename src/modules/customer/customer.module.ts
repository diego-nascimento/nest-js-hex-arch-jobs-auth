import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { CustomerRepositoryInterface } from './interfaces/customerRespository';
import { CustomerRepository } from './customer-repository.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [CustomerController],
  providers: [
    CustomerService,
    {
      provide: CustomerRepositoryInterface,
      useClass: CustomerRepository,
    },
    {
      provide: PrismaService,
      useClass: PrismaService,
    },
  ],
  exports: [CustomerService],
})
export class CustomerModule {}
