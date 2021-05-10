export class Postulante {
  id: number;
  firstName: string;
  lastName: string;
  document: string;
  state: number;
  attachedFile: string;
  phoneNumber: string;
  mail: string;
  idPlaza: number;
  n1: number;
  n2: number;

  constructor(customer) {
    this.id = customer.id;
    this.firstName = customer.firstName;
    this.lastName = customer.lastName;
    this.document = customer.document;
    this.state = customer.state;
    this.attachedFile = customer.attachedFile;
    this.phoneNumber = customer.phoneNumber;
    this.mail = customer.mail;
    this.idPlaza = customer.idPlaza;
    this.n1 = customer.n1;
    this.n2 = customer.n2;
  }

  get name() {
    let name = '';

    if (this.firstName && this.lastName) {
      name = this.firstName + ' ' + this.lastName;
    } else if (this.firstName) {
      name = this.firstName;
    } else if (this.lastName) {
      name = this.lastName;
    }

    return name;
  }

  set name(value) {
  }

  get address() {
    return `${this.document}, ${this.state} ${this.attachedFile}`;
  }

  set address(value) {
  }
}
