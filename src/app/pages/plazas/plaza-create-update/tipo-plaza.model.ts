export class TipoPlaza {
  id: number;
  name: string;
  description: string;
  state: number;

  constructor(customer) {
    this.id = customer.id;
    this.name = customer.name;
    this.description = customer.description;
    this.state = customer.state;
  }

}
