import { randomUUID } from 'crypto';
import { hash, compare } from 'bcrypt';

export class Customer {
  id: string;
  username: string;
  name: string;
  password: string;
  phone: string;

  constructor(
    phone: string,
    username: string,
    name: string,
    password: string,
    id?: string,
  ) {
    this.name = name;
    this.phone = phone;
    this.username = username;
    this.password = password;
    this.id = id ?? randomUUID();
  }

  async hashPassword() {
    await hash(this.password, 10).then((hash) => (this.password = hash));
  }

  async validatePassword(password): Promise<boolean> {
    const isValid = await compare(password, this.password);
    return isValid;
  }
}
