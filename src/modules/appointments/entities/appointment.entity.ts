import { randomUUID } from 'crypto';

export class Appointment {
  id: string;
  startsAt: Date;
  endsAt: Date;
  active: boolean;

  constructor(startsAt: Date, endsAt: Date, active?: boolean, id?: string) {
    this.startsAt = startsAt;
    this.endsAt = endsAt;
    this.active = active ?? true;
    this.id = id ?? randomUUID();
  }
}
