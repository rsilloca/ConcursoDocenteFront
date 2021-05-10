export class Departamento {
  id: number;
  nameDepartamento: string;
  description: string;
  idFacultad: number;
  state: number;

  constructor(customer) {
    this.id = customer.id;
    this.nameDepartamento = customer.nameDepartamento;
    this.description = customer.description;
    this.idFacultad = customer.idFacultad;
    this.state = customer.state;
  }

}
