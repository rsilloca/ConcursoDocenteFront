(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{AaMo:function(t,e,a){"use strict";a.r(e);var i=a("ofXK"),s=a("tyNb"),o=a("M9IT"),n=a("Dh3D"),c=a("+0xr"),r=a("jtHE"),m=a("LRne"),b=a("pLZG"),u=a("17cb"),l=a("Ku73"),d=a("nStZ"),p=a("0IaG"),f=a("JX91"),h=a("lJxs"),g=a("MPIC"),C=a("0OVj"),T=a("+NzJ"),D=a("6BBu"),U=a("Mfej"),$=a("MIAC"),O=a("FEib"),y=a("O4B6");class j{constructor(t){this.id=t.id,this.name=t.name,this.state=t.state}}const v=[{id:1,name:"T\xedtulo de Licenciado en Banca y Seguros y / o Licenciado en Administraci\xf3n",state:1},{id:2,name:"Grado Acad\xe9mico de Maestro o Doctor en la especialidad.",state:1},{id:3,name:"T\xedtulo Profesional de Arquitecto.",state:1},{id:4,name:"Profesor o Licenciado en Educaci\xf3n",state:1}];var w=a("JFLw"),R=a("T8dd"),F=a("fXoL"),x=a("3Pt+"),P=a("XiUz"),A=a("kmnG"),z=a("d3UM"),q=a("qFsG"),L=a("/1cH"),S=a("bTqV"),M=a("NFeN"),k=a("FKr1");function I(t,e){if(1&t&&(F.Ub(0,"mat-option",31),F.Fc(1),F.Tb()),2&t){const t=e.$implicit;F.mc("value",t.id),F.Cb(1),F.Hc(" ",t.anio+" - "+t.periodo," ")}}function E(t,e){if(1&t&&(F.Ub(0,"mat-option",31),F.Fc(1),F.Tb()),2&t){const t=e.$implicit;F.mc("value",t),F.Cb(1),F.Hc(" ",t," ")}}function H(t,e){if(1&t&&(F.Ub(0,"mat-option",31),F.Fc(1),F.Tb()),2&t){const t=e.$implicit;F.mc("value",t.id),F.Cb(1),F.Hc(" ",t.name," ")}}function N(t,e){if(1&t&&(F.Ub(0,"mat-option",31),F.Fc(1),F.Tb()),2&t){const t=e.$implicit;F.mc("value",t.id),F.Cb(1),F.Hc(" ",t.name," ")}}function G(t,e){if(1&t&&(F.Ub(0,"mat-option",31),F.Fc(1),F.Tb()),2&t){const t=e.$implicit;F.mc("value",t),F.Cb(1),F.Hc(" ",t," ")}}function V(t,e){if(1&t&&(F.Ub(0,"div",25),F.Ub(1,"h6"),F.Fc(2),F.Tb(),F.Tb()),2&t){const t=e.$implicit,a=e.index;F.Cb(2),F.Ic("",a+1,". ",t.nameAsignatura," ")}}function _(t,e){if(1&t&&(F.Ub(0,"mat-option",31),F.Fc(1),F.Tb()),2&t){const t=e.$implicit;F.mc("value",t),F.Cb(1),F.Hc(" ",t," ")}}function B(t,e){if(1&t&&(F.Ub(0,"div",25),F.Ub(1,"h6"),F.Fc(2),F.Tb(),F.Tb()),2&t){const t=e.$implicit,a=e.index;F.Cb(2),F.Ic("",a+1,". ",t.name," ")}}function J(t,e){if(1&t&&(F.Ub(0,"button",32),F.Fc(1,"CREAR PLAZA"),F.Tb()),2&t){const t=F.gc();F.mc("disabled",!t.form.valid)}}function Z(t,e){if(1&t&&(F.Ub(0,"button",32),F.Fc(1,"ACTUALIZAR PLAZA"),F.Tb()),2&t){const t=F.gc();F.mc("disabled",!t.form.valid)}}let K=(()=>{class t{constructor(t,e,a){this.defaults=t,this.dialogRef=e,this.fb=a,this.mode="create",this.init=!0,this.subjectConcursos$=new r.a(1),this.dataConcursos$=this.subjectConcursos$.asObservable(),this.subjectTiposPlaza$=new r.a(1),this.dataTiposPlaza$=this.subjectTiposPlaza$.asObservable(),this.subjectRegimenes$=new r.a(1),this.dataRegimenes$=this.subjectRegimenes$.asObservable(),this.subjectDepartamentos$=new r.a(1),this.dataDepartamentos$=this.subjectDepartamentos$.asObservable(),this.subjectAsignaturas$=new r.a(1),this.dataAsignaturas$=this.subjectAsignaturas$.asObservable(),this.subjectRequisitos$=new r.a(1),this.dataRequisitos$=this.subjectRequisitos$.asObservable()}getConcursos(){return Object(m.a)(C.a.map(t=>new g.a(t)))}getTiposPlaza(){return Object(m.a)(R.a.map(t=>new w.a(t)))}getRegimenes(){return Object(m.a)(y.a.map(t=>new O.a(t)))}getDepartamentos(){return Object(m.a)($.a.map(t=>new U.a(t)))}getAsignaturas(){return Object(m.a)(D.a.map(t=>new T.a(t)))}getRequisitos(){return Object(m.a)(v.map(t=>new j(t)))}ngOnInit(){if(this.defaults?this.mode="update":this.defaults={},this.form=this.fb.group({id:[t.id++],idConcurso:[this.defaults.idConcurso||""],idDepartamento:[this.defaults.idDepartamento||""],idTipoPlaza:this.defaults.idTipoPlaza||"",idRegimen:this.defaults.idRegimen||"",quantity:this.defaults.quantity||"",state:this.defaults.state||"",idAsignatura:null,idRequisito:null}),this.getOtherData(),this.filteredOptions=this.form.get("idDepartamento").valueChanges.pipe(Object(f.a)(""),Object(h.a)(t=>this._filter(t))),this.filteredOptionsAsignaturas=this.form.get("idAsignatura").valueChanges.pipe(Object(f.a)(""),Object(h.a)(t=>this._filterAsignaturas(t))),this.filteredOptionsRequisitos=this.form.get("idRequisito").valueChanges.pipe(Object(f.a)(""),Object(h.a)(t=>this._filterRequisitos(t))),this.isUpdateMode()){let t=this.departamentos.find(t=>t.id==this.defaults.idDepartamento);this.form.get("idDepartamento").setValue(t?t.nameDepartamento:""),this.asignaturasElegidas=this.defaults.courses,this.requisitosElegidos=this.defaults.requirements}}_filter(t){this.init?this.init=!1:(this.asignaturasElegidas=[],this.requisitosElegidos=[]);const e=t.toLowerCase();return this.departamentos.filter(t=>t.nameDepartamento.toLowerCase().includes(e)).map(t=>t.nameDepartamento)}_filterAsignaturas(t){const e=t.toLowerCase();return this.asignaturas.filter(t=>t.nameAsignatura.toLowerCase().includes(e)).map(t=>t.nameAsignatura)}_filterRequisitos(t){const e=t.toLowerCase();return this.requisitos.filter(t=>t.name.toLowerCase().includes(e)).map(t=>t.name)}getOtherData(){this.getConcursos().subscribe(t=>{this.subjectConcursos$.next(t)}),this.dataConcursos$.pipe(Object(b.a)(t=>!!t)).subscribe(t=>{this.concursos=t}),this.getTiposPlaza().subscribe(t=>{this.subjectTiposPlaza$.next(t)}),this.dataTiposPlaza$.pipe(Object(b.a)(t=>!!t)).subscribe(t=>{this.tiposPlaza=t}),this.getRegimenes().subscribe(t=>{this.subjectRegimenes$.next(t)}),this.dataRegimenes$.pipe(Object(b.a)(t=>!!t)).subscribe(t=>{this.regimenes=t}),this.getDepartamentos().subscribe(t=>{this.subjectDepartamentos$.next(t)}),this.dataDepartamentos$.pipe(Object(b.a)(t=>!!t)).subscribe(t=>{this.departamentos=t}),this.getAsignaturas().subscribe(t=>{this.subjectAsignaturas$.next(t)}),this.dataAsignaturas$.pipe(Object(b.a)(t=>!!t)).subscribe(t=>{this.asignaturas=t}),this.getRequisitos().subscribe(t=>{this.subjectRequisitos$.next(t)}),this.dataRequisitos$.pipe(Object(b.a)(t=>!!t)).subscribe(t=>{this.requisitos=t})}addAsignatura(){let t=this.form.get("idAsignatura").value,e=this.asignaturas.find(e=>e.nameAsignatura==t);e&&(this.asignaturasElegidas.push(e),this.form.get("idAsignatura").setValue(""))}addRequisito(){let t=this.form.get("idRequisito").value,e=this.requisitos.find(e=>e.name==t);e&&(this.requisitosElegidos.push(e),this.form.get("idRequisito").setValue(""))}save(){"create"===this.mode?this.createCustomer():"update"===this.mode&&this.updateCustomer()}createCustomer(){const t=this.form.value;let e=this.departamentos.find(e=>e.nameDepartamento==t.idDepartamento);t.idDepartamento=e?e.id:1,t.courses=this.asignaturasElegidas,t.requirements=this.requisitosElegidos,t.state=1,this.dialogRef.close(t)}updateCustomer(){const t=this.form.value;t.id=this.defaults.id;let e=this.departamentos.find(e=>e.nameDepartamento==t.idDepartamento);t.idDepartamento=e?e.id:1,t.courses=this.asignaturasElegidas,t.requirements=this.requisitosElegidos,this.dialogRef.close(t)}isCreateMode(){return"create"===this.mode}isUpdateMode(){return"update"===this.mode}}return t.id=100,t.\u0275fac=function(e){return new(e||t)(F.Ob(p.a),F.Ob(p.f),F.Ob(x.c))},t.\u0275cmp=F.Ib({type:t,selectors:[["fury-plaza-create-update"]],decls:70,vars:20,consts:[["mat-dialog-title",""],[3,"formGroup","ngSubmit"],[1,"person","small-modal"],["fxLayout","column","fxLayout.gt-sm","row","fxLayoutGap.gt-sm","1rem","fxLayoutGap","0"],["fxFlex","calc(33% - 1rem)"],["formControlName","idConcurso","name","idConcurso"],[3,"value",4,"ngFor","ngForOf"],["fxFlex","calc(67% - 1rem)"],["type","text","formControlName","idDepartamento","matInput","",3,"matAutocomplete"],["autoActiveFirstOption",""],["auto","matAutocomplete"],["fxLayout","column","fxLayout.gt-sm","row","fxLayoutGap.gt-sm","1rem","fxLayoutGap","0",1,"small-modal"],["fxFlex","calc(33% - 2rem)"],["formControlName","idTipoPlaza","name","idTipoPlaza"],["formControlName","idRegimen","name","idRegimen"],["fxFlex","calc(34% - 2rem)"],["type","text","formControlName","quantity","matInput",""],["fxLayout","column","fxLayout.gt-sm","row","fxLayoutGap","1rem",1,"small-modal"],["fxFlex","calc(50% - 1rem)","fxLayout","column"],["fxLayout","row","fxLayoutGap","1rem"],["fxFlex","calc(100% - 4rem)"],["type","text","formControlName","idAsignatura","matInput","",3,"matAutocomplete"],["autoAsignaturas","matAutocomplete"],["fxFlex","3rem","mat-mini-fab","","type","button","color","primary",1,"btn-mini-fab",3,"click"],["fxLayout","row",4,"ngFor","ngForOf"],["fxLayout","row"],["fxFlex","calc(100% - 4rem)","fxLayoutGap","1rem"],["type","text","formControlName","idRequisito","matInput","",3,"matAutocomplete"],["autoRequisitos","matAutocomplete"],["fxLayout","row","fxLayoutAlign","end center"],["mat-button","",3,"disabled",4,"ngIf"],[3,"value"],["mat-button","",3,"disabled"]],template:function(t,e){if(1&t&&(F.Ub(0,"div",0),F.Fc(1,"Customer"),F.Tb(),F.Ub(2,"form",1),F.cc("ngSubmit",(function(){return e.save()})),F.Ub(3,"mat-dialog-content"),F.Ub(4,"div",2),F.Ub(5,"div",3),F.Ub(6,"mat-form-field",4),F.Ub(7,"mat-label"),F.Fc(8,"Concurso"),F.Tb(),F.Ub(9,"mat-select",5),F.Dc(10,I,2,2,"mat-option",6),F.Tb(),F.Tb(),F.Ub(11,"mat-form-field",7),F.Ub(12,"mat-label"),F.Fc(13,"Departamento"),F.Tb(),F.Pb(14,"input",8),F.Ub(15,"mat-autocomplete",9,10),F.Dc(17,E,2,2,"mat-option",6),F.hc(18,"async"),F.Tb(),F.Tb(),F.Tb(),F.Tb(),F.Ub(19,"div",11),F.Ub(20,"mat-form-field",12),F.Ub(21,"mat-label"),F.Fc(22,"Tipo Plaza"),F.Tb(),F.Ub(23,"mat-select",13),F.Dc(24,H,2,2,"mat-option",6),F.Tb(),F.Tb(),F.Ub(25,"mat-form-field",12),F.Ub(26,"mat-label"),F.Fc(27,"Regimen"),F.Tb(),F.Ub(28,"mat-select",14),F.Dc(29,N,2,2,"mat-option",6),F.Tb(),F.Tb(),F.Ub(30,"mat-form-field",15),F.Ub(31,"mat-label"),F.Fc(32,"Cantidad"),F.Tb(),F.Pb(33,"input",16),F.Tb(),F.Tb(),F.Ub(34,"div",17),F.Ub(35,"div",18),F.Ub(36,"h4"),F.Fc(37,"Agrega cursos a la plaza"),F.Tb(),F.Ub(38,"div",19),F.Ub(39,"mat-form-field",20),F.Ub(40,"mat-label"),F.Fc(41,"Curso"),F.Tb(),F.Pb(42,"input",21),F.Ub(43,"mat-autocomplete",9,22),F.Dc(45,G,2,2,"mat-option",6),F.hc(46,"async"),F.Tb(),F.Tb(),F.Ub(47,"button",23),F.cc("click",(function(){return e.addAsignatura()})),F.Ub(48,"mat-icon"),F.Fc(49,"add"),F.Tb(),F.Tb(),F.Tb(),F.Dc(50,V,3,2,"div",24),F.Tb(),F.Ub(51,"div",18),F.Ub(52,"h4"),F.Fc(53,"Agrega requisitos a la plaza"),F.Tb(),F.Ub(54,"div",25),F.Ub(55,"mat-form-field",26),F.Ub(56,"mat-label"),F.Fc(57,"Requisito"),F.Tb(),F.Pb(58,"input",27),F.Ub(59,"mat-autocomplete",9,28),F.Dc(61,_,2,2,"mat-option",6),F.hc(62,"async"),F.Tb(),F.Tb(),F.Ub(63,"button",23),F.cc("click",(function(){return e.addRequisito()})),F.Ub(64,"mat-icon"),F.Fc(65,"add"),F.Tb(),F.Tb(),F.Tb(),F.Dc(66,B,3,2,"div",24),F.Tb(),F.Tb(),F.Tb(),F.Ub(67,"mat-dialog-actions",29),F.Dc(68,J,2,1,"button",30),F.Dc(69,Z,2,1,"button",30),F.Tb(),F.Tb()),2&t){const t=F.tc(16),a=F.tc(44),i=F.tc(60);F.Cb(2),F.mc("formGroup",e.form),F.Cb(8),F.mc("ngForOf",e.concursos),F.Cb(4),F.mc("matAutocomplete",t),F.Cb(3),F.mc("ngForOf",F.ic(18,14,e.filteredOptions)),F.Cb(7),F.mc("ngForOf",e.tiposPlaza),F.Cb(5),F.mc("ngForOf",e.regimenes),F.Cb(13),F.mc("matAutocomplete",a),F.Cb(3),F.mc("ngForOf",F.ic(46,16,e.filteredOptionsAsignaturas)),F.Cb(5),F.mc("ngForOf",e.asignaturasElegidas),F.Cb(8),F.mc("matAutocomplete",i),F.Cb(3),F.mc("ngForOf",F.ic(62,18,e.filteredOptionsRequisitos)),F.Cb(5),F.mc("ngForOf",e.requisitosElegidos),F.Cb(2),F.mc("ngIf",e.isCreateMode()),F.Cb(1),F.mc("ngIf",e.isUpdateMode())}},directives:[p.g,x.q,x.k,x.e,p.d,P.d,P.e,A.c,P.b,A.f,z.a,x.j,x.d,i.l,x.b,q.b,L.c,L.a,S.b,M.a,p.c,P.c,i.m,k.n],pipes:[i.b],styles:[".small-modal[_ngcontent-%COMP%]{width:45rem}.btn-mini-fab[_ngcontent-%COMP%]{margin-top:.9rem}"]}),t})();var X=a("AfTh"),W=a("xBcV"),Y=a("Hbgg"),Q=a("rnAf"),tt=a("rvYj"),et=a("a+RD"),at=a("bSwM"),it=a("STbY");function st(t,e){if(1&t){const t=F.Vb();F.Ub(0,"th",21),F.Ub(1,"mat-checkbox",22),F.cc("click",(function(e){return F.wc(t),e.stopPropagation()})),F.Tb(),F.Tb()}}function ot(t,e){if(1&t){const t=F.Vb();F.Ub(0,"td",23),F.Ub(1,"mat-checkbox",22),F.cc("click",(function(e){return F.wc(t),e.stopPropagation()})),F.Tb(),F.Tb()}}function nt(t,e){1&t&&(F.Ub(0,"th",24),F.Fc(1," CONCURSO "),F.Tb())}function ct(t,e){if(1&t&&(F.Ub(0,"td",25),F.Fc(1),F.Tb()),2&t){const t=e.$implicit,a=F.gc();F.Cb(1),F.Hc(" ",a.getConcursoInfo(t.idConcurso)," ")}}function rt(t,e){1&t&&(F.Ub(0,"th",24),F.Fc(1," DEPARTAMENTO "),F.Tb())}function mt(t,e){if(1&t&&(F.Ub(0,"td",25),F.Fc(1),F.Tb()),2&t){const t=e.$implicit,a=F.gc();F.Cb(1),F.Hc(" ",a.getDepartamentoName(t.idDepartamento)," ")}}function bt(t,e){1&t&&(F.Ub(0,"th",24),F.Fc(1," TIPO PLAZA "),F.Tb())}function ut(t,e){if(1&t&&(F.Ub(0,"td",25),F.Fc(1),F.Tb()),2&t){const t=e.$implicit,a=F.gc();F.Cb(1),F.Hc(" ",a.getTipoPlazaName(t.idTipoPlaza)," ")}}function lt(t,e){1&t&&(F.Ub(0,"th",24),F.Fc(1," REGIMEN "),F.Tb())}function dt(t,e){if(1&t&&(F.Ub(0,"td",25),F.Fc(1),F.Tb()),2&t){const t=e.$implicit,a=F.gc();F.Cb(1),F.Hc(" ",a.getRegimenName(t.idRegimen)," ")}}function pt(t,e){if(1&t&&(F.Ub(0,"th",24),F.Fc(1),F.Tb()),2&t){const t=F.gc(2).$implicit;F.Cb(1),F.Hc(" ",t.name,"")}}function ft(t,e){if(1&t&&(F.Ub(0,"td",25),F.Fc(1),F.Tb()),2&t){const t=e.$implicit,a=F.gc(2).$implicit;F.Cb(1),F.Hc(" ",t[a.property]," ")}}function ht(t,e){if(1&t&&(F.Sb(0,27),F.Dc(1,pt,2,1,"th",10),F.Dc(2,ft,2,1,"td",11),F.Rb()),2&t){const t=F.gc().$implicit;F.mc("matColumnDef",t.property)}}function gt(t,e){if(1&t&&(F.Sb(0),F.Dc(1,ht,3,1,"ng-container",26),F.Rb()),2&t){const t=e.$implicit;F.Cb(1),F.mc("ngIf",t.isModelProperty)}}function Ct(t,e){1&t&&F.Pb(0,"th",28)}function Tt(t,e){if(1&t){const t=F.Vb();F.Ub(0,"td",23),F.Ub(1,"button",29),F.cc("click",(function(e){return F.wc(t),e.stopPropagation()})),F.Ub(2,"mat-icon"),F.Fc(3,"more_horiz"),F.Tb(),F.Tb(),F.Ub(4,"mat-menu",30,31),F.Ub(6,"button",32),F.cc("click",(function(){F.wc(t);const a=e.$implicit;return F.gc().updateCustomer(a)})),F.Ub(7,"span"),F.Fc(8,"Editar"),F.Tb(),F.Tb(),F.Ub(9,"button",32),F.cc("click",(function(){F.wc(t);const a=e.$implicit;return F.gc().deleteCustomer(a)})),F.Ub(10,"span"),F.Fc(11,"Eliminar"),F.Tb(),F.Tb(),F.Tb(),F.Tb()}if(2&t){const t=F.tc(5);F.Cb(1),F.mc("matMenuTriggerFor",t)}}function Dt(t,e){1&t&&F.Pb(0,"tr",33)}function Ut(t,e){if(1&t){const t=F.Vb();F.Ub(0,"tr",34),F.cc("click",(function(){F.wc(t);const a=e.$implicit;return F.gc().updateCustomer(a)})),F.Tb()}}const $t=function(){return["Plazas"]},Ot=[{path:"",component:(()=>{class t{constructor(t){this.dialog=t,this.subject$=new r.a(1),this.data$=this.subject$.asObservable(),this.subjectConcursos$=new r.a(1),this.dataConcursos$=this.subjectConcursos$.asObservable(),this.subjectTiposPlaza$=new r.a(1),this.dataTiposPlaza$=this.subjectTiposPlaza$.asObservable(),this.subjectRegimenes$=new r.a(1),this.dataRegimenes$=this.subjectRegimenes$.asObservable(),this.subjectDepartamentos$=new r.a(1),this.dataDepartamentos$=this.subjectDepartamentos$.asObservable(),this.columns=[{name:"Checkbox",property:"checkbox",visible:!1},{name:"C\xf3digo",property:"id",visible:!0,isModelProperty:!0},{name:"Departamento",property:"idDepartamento",visible:!0},{name:"Tipo Plaza",property:"idTipoPlaza",visible:!0},{name:"Regimen",property:"idRegimen",visible:!0},{name:"Concurso",property:"idConcurso",visible:!0},{name:"Cantidad",property:"quantity",visible:!0,isModelProperty:!0},{name:"Estado",property:"state",visible:!0,isModelProperty:!0},{name:"Actions",property:"actions",visible:!0}],this.pageSize=10}get visibleColumns(){return this.columns.filter(t=>t.visible).map(t=>t.property)}getData(){return Object(m.a)(u.a.map(t=>new X.a(t)))}getConcursos(){return Object(m.a)(C.a.map(t=>new g.a(t)))}getTiposPlaza(){return Object(m.a)(R.a.map(t=>new w.a(t)))}getRegimenes(){return Object(m.a)(y.a.map(t=>new O.a(t)))}getDepartamentos(){return Object(m.a)($.a.map(t=>new U.a(t)))}ngOnInit(){this.getData().subscribe(t=>{this.subject$.next(t)}),this.dataSource=new c.k,this.data$.pipe(Object(b.a)(t=>!!t)).subscribe(t=>{this.customers=t,this.dataSource.data=t}),this.getOtherData()}getOtherData(){this.getConcursos().subscribe(t=>{this.subjectConcursos$.next(t)}),this.dataConcursos$.pipe(Object(b.a)(t=>!!t)).subscribe(t=>{this.concursos=t}),this.getTiposPlaza().subscribe(t=>{this.subjectTiposPlaza$.next(t)}),this.dataTiposPlaza$.pipe(Object(b.a)(t=>!!t)).subscribe(t=>{this.tiposPlaza=t}),this.getRegimenes().subscribe(t=>{this.subjectRegimenes$.next(t)}),this.dataRegimenes$.pipe(Object(b.a)(t=>!!t)).subscribe(t=>{this.regimenes=t}),this.getDepartamentos().subscribe(t=>{this.subjectDepartamentos$.next(t)}),this.dataDepartamentos$.pipe(Object(b.a)(t=>!!t)).subscribe(t=>{this.departamentos=t})}getConcursoInfo(t){let e=this.concursos.find(e=>e.id==t);return e?`${e.anio} - ${e.periodo}`:"Sin definir"}getTipoPlazaName(t){let e=this.tiposPlaza.find(e=>e.id==t);return e?e.name:"Sin definir"}getRegimenName(t){let e=this.regimenes.find(e=>e.id==t);return e?e.name:"Sin definir"}getDepartamentoName(t){let e=this.departamentos.find(e=>e.id==t);return e?e.nameDepartamento:"Sin definir"}ngAfterViewInit(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}createCustomer(){this.dialog.open(K).afterClosed().subscribe(t=>{t&&(this.customers.unshift(new X.a(t)),this.subject$.next(this.customers))})}updateCustomer(t){this.dialog.open(K,{data:t}).afterClosed().subscribe(t=>{if(t){const e=this.customers.findIndex(e=>e.id===t.id);this.customers[e]=new X.a(t),this.subject$.next(this.customers)}})}deleteCustomer(t){this.customers.splice(this.customers.findIndex(e=>e.id===t.id),1),this.subject$.next(this.customers)}onFilterChange(t){this.dataSource&&(t=(t=t.trim()).toLowerCase(),this.dataSource.filter=t)}ngOnDestroy(){}}return t.\u0275fac=function(e){return new(e||t)(F.Ob(p.b))},t.\u0275cmp=F.Ib({type:t,selectors:[["fury-plazas"]],viewQuery:function(t,e){var a;1&t&&(F.Bc(o.a,!0),F.Bc(n.a,!0)),2&t&&(F.sc(a=F.dc())&&(e.paginator=a.first),F.sc(a=F.dc())&&(e.sort=a.first))},inputs:{columns:"columns"},decls:32,vars:10,consts:[["mode","card"],["current","Lista Plazas",3,"crumbs"],["name","Plazas",3,"columns","filterChange"],[1,"actions"],["type","button","mat-mini-fab","","color","primary",1,"create",3,"click"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","checkbox"],["class","actions-cell","mat-header-cell","",4,"matHeaderCellDef"],["class","actions-cell","mat-cell","",4,"matCellDef"],["matColumnDef","idConcurso"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","idDepartamento"],["matColumnDef","idTipoPlaza"],["matColumnDef","idRegimen"],[4,"ngFor","ngForOf"],["matColumnDef","actions"],["class","actions-cell","mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["class","clickable route-animations-elements","mat-row","",3,"click",4,"matRowDef","matRowDefColumns"],[1,"paginator",3,"pageSize"],["mat-header-cell","",1,"actions-cell"],["color","primary",3,"click"],["mat-cell","",1,"actions-cell"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],[3,"matColumnDef",4,"ngIf"],[3,"matColumnDef"],["mat-header-cell","","mat-sort-header","",1,"actions-cell"],["type","button","mat-icon-button","",3,"matMenuTriggerFor","click"],["yPosition","below","xPosition","before"],["actionsMenu","matMenu"],["mat-menu-item","",3,"click"],["mat-header-row",""],["mat-row","",1,"clickable","route-animations-elements",3,"click"]],template:function(t,e){1&t&&(F.Ub(0,"fury-page-layout",0),F.Ub(1,"fury-page-layout-header"),F.Pb(2,"fury-breadcrumbs",1),F.Tb(),F.Ub(3,"fury-page-layout-content"),F.Ub(4,"fury-list",2),F.cc("filterChange",(function(t){return e.onFilterChange(t)})),F.Ub(5,"div",3),F.Ub(6,"button",4),F.cc("click",(function(){return e.createCustomer()})),F.Ub(7,"mat-icon"),F.Fc(8,"add"),F.Tb(),F.Tb(),F.Tb(),F.Ub(9,"table",5),F.Sb(10,6),F.Dc(11,st,2,0,"th",7),F.Dc(12,ot,2,0,"td",8),F.Rb(),F.Sb(13,9),F.Dc(14,nt,2,0,"th",10),F.Dc(15,ct,2,1,"td",11),F.Rb(),F.Sb(16,12),F.Dc(17,rt,2,0,"th",10),F.Dc(18,mt,2,1,"td",11),F.Rb(),F.Sb(19,13),F.Dc(20,bt,2,0,"th",10),F.Dc(21,ut,2,1,"td",11),F.Rb(),F.Sb(22,14),F.Dc(23,lt,2,0,"th",10),F.Dc(24,dt,2,1,"td",11),F.Rb(),F.Dc(25,gt,2,1,"ng-container",15),F.Sb(26,16),F.Dc(27,Ct,1,0,"th",17),F.Dc(28,Tt,12,1,"td",8),F.Rb(),F.Dc(29,Dt,1,0,"tr",18),F.Dc(30,Ut,1,0,"tr",19),F.Tb(),F.Pb(31,"mat-paginator",20),F.Tb(),F.Tb(),F.Tb()),2&t&&(F.Cb(2),F.mc("@fadeInRight",void 0)("crumbs",F.pc(9,$t)),F.Cb(1),F.mc("@fadeInUp",void 0),F.Cb(1),F.mc("columns",e.columns),F.Cb(5),F.mc("dataSource",e.dataSource),F.Cb(16),F.mc("ngForOf",e.columns),F.Cb(4),F.mc("matHeaderRowDef",e.visibleColumns),F.Cb(1),F.mc("matRowDefColumns",e.visibleColumns),F.Cb(1),F.mc("pageSize",e.pageSize))},directives:[W.a,Y.a,Q.a,tt.a,et.a,S.b,M.a,c.j,n.a,c.c,c.e,c.b,i.l,c.g,c.i,o.a,c.d,at.a,c.a,n.b,i.m,it.d,it.e,it.b,c.f,c.h],styles:[".clickable[_ngcontent-%COMP%]{cursor:pointer}"],data:{animation:[l.a,d.a]}}),t})()}];let yt=(()=>{class t{}return t.\u0275mod=F.Mb({type:t}),t.\u0275inj=F.Lb({factory:function(e){return new(e||t)},imports:[[s.j.forChild(Ot)],s.j]}),t})();var jt=a("KthW"),vt=a("WCGO"),wt=a("0jmt"),Rt=a("YUcS"),Ft=a("QibW"),xt=a("VE2z");let Pt=(()=>{class t{}return t.\u0275mod=F.Mb({type:t}),t.\u0275inj=F.Lb({factory:function(e){return new(e||t)},imports:[[i.c,x.f,x.n,Rt.a,p.e,q.c,S.c,M.b,Ft.c,z.b,L.b,xt.a]]}),t})();var At=a("q8Jb");a.d(e,"PlazasModule",(function(){return zt}));let zt=(()=>{class t{}return t.\u0275mod=F.Mb({type:t}),t.\u0275inj=F.Lb({factory:function(e){return new(e||t)},imports:[[i.c,yt,x.f,jt.a,vt.a,wt.a,Pt,At.a]]}),t})()}}]);