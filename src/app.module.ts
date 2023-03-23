import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { CustomerModule } from './modules/customer/customer.module';
import { AppointmentsModule } from './modules/appointments/appointments.module';

@Module({
  imports: [CustomerModule, AuthModule, AppointmentsModule],
})
export class AppModule {}
