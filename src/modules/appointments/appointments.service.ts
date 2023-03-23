import { Injectable } from '@nestjs/common';
import { CreateAppointmentDto } from './dto/create-appointment.dto';

@Injectable()
export class AppointmentsService {
  create(createAppointmentDto: CreateAppointmentDto, customer_id: string) {
    return createAppointmentDto;
  }
}
