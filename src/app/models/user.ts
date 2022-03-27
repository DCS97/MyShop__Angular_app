export class User {
  id?: number;
  name: string;
  address: string;
  creditCard: string;

  constructor() {
    this.name = '';
    this.address = '';
    this.creditCard = '';
  }
}
