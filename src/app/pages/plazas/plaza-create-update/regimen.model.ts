export class Regimen {
  id: number;
  name: string;
  description: string;
  state: number;

  constructor(customer) {
    this.id = customer.id;
    this.name = customer.name;
    this.state = customer.state;
  }

}
