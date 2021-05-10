export class Asignatura {
  id: number;
  nameAsignatura: string;
  description: string;
  idDepartamento: number;
  state: number;

  constructor(customer) {
    this.id = customer.id;
    this.nameAsignatura = customer.nameAsignatura;
    this.description = customer.description;
    this.idDepartamento = customer.idDepartamento;
    this.state = customer.state;
  }
  
}
