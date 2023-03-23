import { IsNotEmpty } from 'class-validator';

export class CreateAppointmentDto {
  @IsNotEmpty()
  startsAt: Date;

  @IsNotEmpty()
  endsAt: Date;
}
