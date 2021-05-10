export class Requisito {
  id: number;
  name: string;
  state: number;

  constructor(customer) {
    this.id = customer.id;
    this.name = customer.name;
    this.state = customer.state;
  }

}
