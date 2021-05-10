export class Facultad {
  id: number;
  nameFacultad: string;
  description: string;
  state: number;

  constructor(customer) {
    this.id = customer.id;
    this.nameFacultad = customer.nameFacultad;
    this.description = customer.description;
    this.state = customer.state;
  }

}
