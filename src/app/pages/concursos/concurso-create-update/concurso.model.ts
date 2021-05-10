export class Concurso {
  id: number;
  anio: string;
  periodo: string;
  startDate: string;
  endDate: string;
  approvalDate: string;
  magistralClassDate: string;
  state: number;

  constructor(customer) {
    this.id = customer.id;
    this.anio = customer.anio;
    this.periodo = customer.periodo;
    this.startDate = customer.startDate;
    this.endDate = customer.endDate;
    this.approvalDate = customer.approvalDate;
    this.magistralClassDate = customer.magistralClassDate;
    this.state = customer.state;
  }

}
