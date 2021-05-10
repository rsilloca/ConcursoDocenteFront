import { Asignatura } from "../../configuration/asignaturas/asignatura-create-update/asignatura.model";
import { Requisito } from "./requisito.model";

export class Plaza {
  id: number;
  idTipoPlaza: number;
  idRegimen: number;
  idDepartamento: number;
  idConcurso: number;
  quantity: number;
  courses: Asignatura[];
  requirements: Requisito[];
  state: number;

  constructor(customer) {
    this.id = customer.id;
    this.idTipoPlaza = customer.idTipoPlaza;
    this.idRegimen = customer.idRegimen;
    this.idDepartamento = customer.idDepartamento;
    this.idConcurso = customer.idConcurso;
    this.quantity = customer.quantity;
    this.courses = customer.courses;
    this.requirements = customer.requirements;
    this.state = customer.state;
  }

}
