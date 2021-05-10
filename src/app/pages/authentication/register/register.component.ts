import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, ReplaySubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { fadeInUpAnimation } from '../../../../@fury/animations/fade-in-up.animation';
import { Concurso } from '../../concursos/concurso-create-update/concurso.model';
import { CONCURSOS_TABLE_DEMO_DATA } from '../../concursos/concursos-table.demo';
import { Departamento } from '../../configuration/departamentos/departamento-create-update/departamento.model';
import { DEPARTAMENTOS_TABLE_DEMO_DATA } from '../../configuration/departamentos/departamentos-table.demo';
import { Plaza } from '../../plazas/plaza-create-update/plaza.model';
import { Regimen } from '../../plazas/plaza-create-update/regimen.model';
import { REGIMENES_TABLE_DEMO_DATA } from '../../plazas/plaza-create-update/regimenes-table.demo';
import { TipoPlaza } from '../../plazas/plaza-create-update/tipo-plaza.model';
import { TIPOS_PLAZA_TABLE_DEMO_DATA } from '../../plazas/plaza-create-update/tipos-plaza-table.demo';
import { PLAZAS_TABLE_DEMO_DATA } from '../../plazas/plazas-table.demo';

@Component({
  selector: 'fury-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [fadeInUpAnimation]
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  inputType = 'password';
  visible = false;

  subjectPlazas$: ReplaySubject<Plaza[]> = new ReplaySubject<Plaza[]>(1);
  dataPlazas$: Observable<Plaza[]> = this.subjectPlazas$.asObservable();
  plazas: Plaza[];

  subjectDepartamentos$: ReplaySubject<Departamento[]> = new ReplaySubject<Departamento[]>(1);
  dataDepartamentos$: Observable<Departamento[]> = this.subjectDepartamentos$.asObservable();
  departamentos: Departamento[];

  subjectConcursos$: ReplaySubject<Concurso[]> = new ReplaySubject<Concurso[]>(1);
  dataConcursos$: Observable<Concurso[]> = this.subjectConcursos$.asObservable();
  concursos: Concurso[];

  subjectTiposPlaza$: ReplaySubject<TipoPlaza[]> = new ReplaySubject<TipoPlaza[]>(1);
  dataTiposPlaza$: Observable<TipoPlaza[]> = this.subjectTiposPlaza$.asObservable();
  tiposPlaza: TipoPlaza[];

  subjectRegimenes$: ReplaySubject<Regimen[]> = new ReplaySubject<Regimen[]>(1);
  dataRegimenes$: Observable<Regimen[]> = this.subjectRegimenes$.asObservable();
  regimenes: Regimen[];

  idPlaza: number;
  plaza: Plaza;

  constructor(private router: Router,
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private route: ActivatedRoute
  ) { }

  getPlazas() {
    return of(PLAZAS_TABLE_DEMO_DATA.map(customer => new Plaza(customer)));
  }
  getDepartamentos() {
    return of(DEPARTAMENTOS_TABLE_DEMO_DATA.map(customer => new Departamento(customer)));
  }
  getConcursos() {
    return of(CONCURSOS_TABLE_DEMO_DATA.map(customer => new Concurso(customer)));
  }
  getTiposPlaza() {
    return of(TIPOS_PLAZA_TABLE_DEMO_DATA.map(customer => new TipoPlaza(customer)));
  }
  getRegimenes() {
    return of(REGIMENES_TABLE_DEMO_DATA.map(customer => new Regimen(customer)));
  }

  ngOnInit() {
    this.idPlaza = +this.route.snapshot.paramMap.get('plaza') || 2;
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      passwordConfirm: ['', Validators.required],
    });
    this.getData();
    this.plaza = this.plazas.find(p => p.id == this.idPlaza);
  }

  send() {
    this.router.navigate(['/']);
  }

  toggleVisibility() {
    if (this.visible) {
      this.inputType = 'password';
      this.visible = false;
      this.cd.markForCheck();
    } else {
      this.inputType = 'text';
      this.visible = true;
      this.cd.markForCheck();
    }
  }

  getTipoPlazaName(idTipoPlaza: number) {
    let tipo = this.tiposPlaza.find(t => t.id == idTipoPlaza);
    return tipo ? tipo.name : 'Sin tipo';
  }

  getRegimenName(idRegimen: number) {
    let regimen = this.regimenes.find(r => r.id == idRegimen);
    return regimen ? regimen.name : 'Sin regimen';
  }

  getDepartamentoName(idDepartamento: number) {
    let departamento = this.departamentos.find(d => d.id == idDepartamento);
    return departamento ? departamento.nameDepartamento : 'Sin departamento';
  }

  getConcursoName(idConcurso: number) {
    let concurso = this.concursos.find(d => d.id == idConcurso);
    return concurso ? `${concurso.anio} - ${concurso.periodo}` : 'Sin departamento';
  }

  getData() {
    this.getPlazas().subscribe(customers => {
      this.subjectPlazas$.next(customers);
    });
    this.dataPlazas$.pipe(
      filter(data => !!data)
    ).subscribe((customers) => {
      this.plazas = customers;
    });

    this.getDepartamentos().subscribe(customers => {
      this.subjectDepartamentos$.next(customers);
    });
    this.dataDepartamentos$.pipe(
      filter(data => !!data)
    ).subscribe((customers) => {
      this.departamentos = customers;
    });

    this.getConcursos().subscribe(customers => {
      this.subjectConcursos$.next(customers);
    });
    this.dataConcursos$.pipe(
      filter(data => !!data)
    ).subscribe((customers) => {
      this.concursos = customers;
    });

    this.getTiposPlaza().subscribe(customers => {
      this.subjectTiposPlaza$.next(customers);
    });
    this.dataTiposPlaza$.pipe(
      filter(data => !!data)
    ).subscribe((customers) => {
      this.tiposPlaza = customers;
    });

    this.getRegimenes().subscribe(customers => {
      this.subjectRegimenes$.next(customers);
    });
    this.dataRegimenes$.pipe(
      filter(data => !!data)
    ).subscribe((customers) => {
      this.regimenes = customers;
    });
  }
}
