(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{JtYP:function(t,e,a){"use strict";a.r(e);var c=a("ofXK"),i=a("tyNb"),o=a("M9IT"),s=a("Dh3D"),n=a("+0xr"),r=a("jtHE"),u=a("LRne"),l=a("pLZG"),m=a("MIAC"),b=a("Mfej"),d=a("Ku73"),f=a("nStZ"),p=a("0IaG"),h=a("JX91"),g=a("lJxs"),C=a("h7Iw"),F=a("xiBs"),y=a("fXoL"),T=a("3Pt+"),U=a("XiUz"),w=a("kmnG"),D=a("qFsG"),v=a("/1cH"),x=a("FKr1"),j=a("bTqV");function O(t,e){if(1&t&&(y.Ub(0,"mat-option",14),y.Fc(1),y.Tb()),2&t){const t=e.$implicit;y.mc("value",t),y.Cb(1),y.Hc(" ",t," ")}}function M(t,e){if(1&t&&(y.Ub(0,"button",15),y.Fc(1,"CREAR DEPARTAMENTO"),y.Tb()),2&t){const t=y.gc();y.mc("disabled",!t.form.valid)}}function $(t,e){if(1&t&&(y.Ub(0,"button",15),y.Fc(1,"ACTUALIZAR DEPARTAMENTO"),y.Tb()),2&t){const t=y.gc();y.mc("disabled",!t.form.valid)}}let k=(()=>{class t{constructor(t,e,a){this.defaults=t,this.dialogRef=e,this.fb=a,this.mode="create",this.subjectFacultades$=new r.a(1),this.dataFacultades$=this.subjectFacultades$.asObservable()}ngOnInit(){if(this.defaults?this.mode="update":this.defaults={},this.form=this.fb.group({id:[t.id++],nameDepartamento:[this.defaults.nameDepartamento||""],description:[this.defaults.description||""],idFacultad:"",state:this.defaults.state||""}),this.getFacultades().subscribe(t=>{this.subjectFacultades$.next(t)}),this.dataFacultades$.pipe(Object(l.a)(t=>!!t)).subscribe(t=>{this.facultades=t}),this.filteredOptions=this.form.get("idFacultad").valueChanges.pipe(Object(h.a)(""),Object(g.a)(t=>this._filter(t))),this.isUpdateMode()){let t=this.facultades.find(t=>t.id==this.defaults.idFacultad);this.form.get("idFacultad").setValue(t?t.nameFacultad:"")}}_filter(t){const e=t.toLowerCase();return this.facultades.filter(t=>t.nameFacultad.toLowerCase().includes(e)).map(t=>t.nameFacultad)}getFacultades(){return Object(u.a)(F.a.map(t=>new C.a(t)))}save(){"create"===this.mode?this.createCustomer():"update"===this.mode&&this.updateCustomer()}createCustomer(){const t=this.form.value;let e=this.facultades.find(e=>e.nameFacultad==t.idFacultad);t.idFacultad=e?e.id:1,t.state=1,this.dialogRef.close(t)}updateCustomer(){const t=this.form.value;t.id=this.defaults.id;let e=this.facultades.find(e=>e.nameFacultad==t.idFacultad);t.idFacultad=e?e.id:1,this.dialogRef.close(t)}isCreateMode(){return"create"===this.mode}isUpdateMode(){return"update"===this.mode}}return t.id=100,t.\u0275fac=function(e){return new(e||t)(y.Ob(p.a),y.Ob(p.f),y.Ob(T.c))},t.\u0275cmp=y.Ib({type:t,selectors:[["fury-departamento-create-update"]],decls:26,vars:7,consts:[["mat-dialog-title",""],[3,"formGroup","ngSubmit"],["fxLayout","column","fxLayout.gt-sm","row","fxLayoutGap.gt-sm","24px",1,"small-modal"],["fxFlex",""],["type","text","formControlName","idFacultad","matInput","",3,"matAutocomplete"],["autoActiveFirstOption",""],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[1,"person","small-modal"],["fxLayout","column","fxLayout.gt-sm","row","fxLayoutGap.gt-sm","24px"],["type","text","formControlName","nameDepartamento","matInput",""],["type","text","formControlName","description","matInput",""],["fxLayout","row","fxLayoutAlign","end center"],["mat-button","",3,"disabled",4,"ngIf"],[3,"value"],["mat-button","",3,"disabled"]],template:function(t,e){if(1&t&&(y.Ub(0,"div",0),y.Fc(1,"Departamento Acad\xe9mico"),y.Tb(),y.Ub(2,"form",1),y.cc("ngSubmit",(function(){return e.save()})),y.Ub(3,"mat-dialog-content"),y.Ub(4,"div",2),y.Ub(5,"mat-form-field",3),y.Ub(6,"mat-label"),y.Fc(7,"Facultad"),y.Tb(),y.Pb(8,"input",4),y.Ub(9,"mat-autocomplete",5,6),y.Dc(11,O,2,2,"mat-option",7),y.hc(12,"async"),y.Tb(),y.Tb(),y.Tb(),y.Ub(13,"div",8),y.Ub(14,"div",9),y.Ub(15,"mat-form-field",3),y.Ub(16,"mat-label"),y.Fc(17,"Nombre"),y.Tb(),y.Pb(18,"input",10),y.Tb(),y.Ub(19,"mat-form-field",3),y.Ub(20,"mat-label"),y.Fc(21,"Descripci\xf3n"),y.Tb(),y.Pb(22,"input",11),y.Tb(),y.Tb(),y.Tb(),y.Tb(),y.Ub(23,"mat-dialog-actions",12),y.Dc(24,M,2,1,"button",13),y.Dc(25,$,2,1,"button",13),y.Tb(),y.Tb()),2&t){const t=y.tc(10);y.Cb(2),y.mc("formGroup",e.form),y.Cb(6),y.mc("matAutocomplete",t),y.Cb(3),y.mc("ngForOf",y.ic(12,5,e.filteredOptions)),y.Cb(13),y.mc("ngIf",e.isCreateMode()),y.Cb(1),y.mc("ngIf",e.isUpdateMode())}},directives:[p.g,T.q,T.k,T.e,p.d,U.d,U.e,w.c,U.b,w.f,T.b,D.b,v.c,T.j,T.d,v.a,c.l,p.c,U.c,c.m,x.n,j.b],pipes:[c.b],styles:[".small-modal[_ngcontent-%COMP%]{width:27rem}"]}),t})();var S=a("xBcV"),P=a("Hbgg"),I=a("rnAf"),R=a("rvYj"),A=a("a+RD"),L=a("NFeN"),N=a("bSwM"),H=a("STbY");function E(t,e){if(1&t){const t=y.Vb();y.Ub(0,"th",15),y.Ub(1,"mat-checkbox",16),y.cc("click",(function(e){return y.wc(t),e.stopPropagation()})),y.Tb(),y.Tb()}}function G(t,e){if(1&t){const t=y.Vb();y.Ub(0,"td",17),y.Ub(1,"mat-checkbox",16),y.cc("click",(function(e){return y.wc(t),e.stopPropagation()})),y.Tb(),y.Tb()}}function V(t,e){if(1&t&&(y.Ub(0,"th",22),y.Fc(1),y.Tb()),2&t){const t=y.gc(2).$implicit;y.Cb(1),y.Hc(" ",t.name,"")}}function z(t,e){if(1&t&&(y.Ub(0,"td",23),y.Fc(1),y.Tb()),2&t){const t=e.$implicit,a=y.gc(2).$implicit,c=y.gc();y.Cb(1),y.Hc(" ","idFacultad"==a.property?c.getFacultadName(t[a.property]):t[a.property]," ")}}function J(t,e){if(1&t&&(y.Sb(0,19),y.Dc(1,V,2,1,"th",20),y.Dc(2,z,2,1,"td",21),y.Rb()),2&t){const t=y.gc().$implicit;y.mc("matColumnDef",t.property)}}function _(t,e){if(1&t&&(y.Sb(0),y.Dc(1,J,3,1,"ng-container",18),y.Rb()),2&t){const t=e.$implicit;y.Cb(1),y.mc("ngIf",t.isModelProperty)}}function q(t,e){1&t&&y.Pb(0,"th",24)}function B(t,e){if(1&t){const t=y.Vb();y.Ub(0,"td",17),y.Ub(1,"button",25),y.cc("click",(function(e){return y.wc(t),e.stopPropagation()})),y.Ub(2,"mat-icon"),y.Fc(3,"more_horiz"),y.Tb(),y.Tb(),y.Ub(4,"mat-menu",26,27),y.Ub(6,"button",28),y.cc("click",(function(){y.wc(t);const a=e.$implicit;return y.gc().updateCustomer(a)})),y.Ub(7,"span"),y.Fc(8,"Editar"),y.Tb(),y.Tb(),y.Ub(9,"button",28),y.cc("click",(function(){y.wc(t);const a=e.$implicit;return y.gc().deleteCustomer(a)})),y.Ub(10,"span"),y.Fc(11,"Eliminar"),y.Tb(),y.Tb(),y.Tb(),y.Tb()}if(2&t){const t=y.tc(5);y.Cb(1),y.mc("matMenuTriggerFor",t)}}function K(t,e){1&t&&y.Pb(0,"tr",29)}function X(t,e){if(1&t){const t=y.Vb();y.Ub(0,"tr",30),y.cc("click",(function(){y.wc(t);const a=e.$implicit;return y.gc().updateCustomer(a)})),y.Tb()}}const Y=function(){return["Configuraci\xf3n"]},W=[{path:"",component:(()=>{class t{constructor(t){this.dialog=t,this.subject$=new r.a(1),this.data$=this.subject$.asObservable(),this.subjectFacultades$=new r.a(1),this.dataFacultades$=this.subjectFacultades$.asObservable(),this.columns=[{name:"Checkbox",property:"checkbox",visible:!1},{name:"Nombre",property:"nameDepartamento",visible:!0,isModelProperty:!0},{name:"Descripci\xf3n",property:"description",visible:!0,isModelProperty:!0},{name:"Facultad",property:"idFacultad",visible:!0,isModelProperty:!0},{name:"Estado",property:"state",visible:!0,isModelProperty:!0},{name:"Actions",property:"actions",visible:!0}],this.pageSize=10}get visibleColumns(){return this.columns.filter(t=>t.visible).map(t=>t.property)}getData(){return Object(u.a)(m.a.map(t=>new b.a(t)))}getFacultades(){return Object(u.a)(F.a.map(t=>new C.a(t)))}ngOnInit(){this.getData().subscribe(t=>{this.subject$.next(t)}),this.dataSource=new n.k,this.data$.pipe(Object(l.a)(t=>!!t)).subscribe(t=>{this.customers=t,this.dataSource.data=t}),this.getFacultades().subscribe(t=>{this.subjectFacultades$.next(t)}),this.dataFacultades$.pipe(Object(l.a)(t=>!!t)).subscribe(t=>{this.facultades=t})}ngAfterViewInit(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}getFacultadName(t){let e=this.facultades.find(e=>e.id==t);return e?e.nameFacultad:"Sin definir"}createCustomer(){this.dialog.open(k,{autoFocus:!1}).afterClosed().subscribe(t=>{t&&(this.customers.unshift(new b.a(t)),this.subject$.next(this.customers))})}updateCustomer(t){this.dialog.open(k,{data:t}).afterClosed().subscribe(t=>{if(t){const e=this.customers.findIndex(e=>e.id===t.id);this.customers[e]=new b.a(t),this.subject$.next(this.customers)}})}deleteCustomer(t){this.customers.splice(this.customers.findIndex(e=>e.id===t.id),1),this.subject$.next(this.customers)}onFilterChange(t){this.dataSource&&(t=(t=t.trim()).toLowerCase(),this.dataSource.filter=t)}ngOnDestroy(){}}return t.\u0275fac=function(e){return new(e||t)(y.Ob(p.b))},t.\u0275cmp=y.Ib({type:t,selectors:[["fury-departamentos"]],viewQuery:function(t,e){var a;1&t&&(y.Bc(o.a,!0),y.Bc(s.a,!0)),2&t&&(y.sc(a=y.dc())&&(e.paginator=a.first),y.sc(a=y.dc())&&(e.sort=a.first))},inputs:{columns:"columns"},decls:20,vars:10,consts:[["mode","card"],["current","Departamentos",3,"crumbs"],["name","Departamentos",3,"columns","filterChange"],[1,"actions"],["type","button","mat-mini-fab","","color","primary",1,"create",3,"click"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","checkbox"],["class","actions-cell","mat-header-cell","",4,"matHeaderCellDef"],["class","actions-cell","mat-cell","",4,"matCellDef"],[4,"ngFor","ngForOf"],["matColumnDef","actions"],["class","actions-cell","mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["class","clickable route-animations-elements","mat-row","",3,"click",4,"matRowDef","matRowDefColumns"],[1,"paginator",3,"pageSize"],["mat-header-cell","",1,"actions-cell"],["color","primary",3,"click"],["mat-cell","",1,"actions-cell"],[3,"matColumnDef",4,"ngIf"],[3,"matColumnDef"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell","","mat-sort-header","",1,"actions-cell"],["type","button","mat-icon-button","",3,"matMenuTriggerFor","click"],["yPosition","below","xPosition","before"],["actionsMenu","matMenu"],["mat-menu-item","",3,"click"],["mat-header-row",""],["mat-row","",1,"clickable","route-animations-elements",3,"click"]],template:function(t,e){1&t&&(y.Ub(0,"fury-page-layout",0),y.Ub(1,"fury-page-layout-header"),y.Pb(2,"fury-breadcrumbs",1),y.Tb(),y.Ub(3,"fury-page-layout-content"),y.Ub(4,"fury-list",2),y.cc("filterChange",(function(t){return e.onFilterChange(t)})),y.Ub(5,"div",3),y.Ub(6,"button",4),y.cc("click",(function(){return e.createCustomer()})),y.Ub(7,"mat-icon"),y.Fc(8,"add"),y.Tb(),y.Tb(),y.Tb(),y.Ub(9,"table",5),y.Sb(10,6),y.Dc(11,E,2,0,"th",7),y.Dc(12,G,2,0,"td",8),y.Rb(),y.Dc(13,_,2,1,"ng-container",9),y.Sb(14,10),y.Dc(15,q,1,0,"th",11),y.Dc(16,B,12,1,"td",8),y.Rb(),y.Dc(17,K,1,0,"tr",12),y.Dc(18,X,1,0,"tr",13),y.Tb(),y.Pb(19,"mat-paginator",14),y.Tb(),y.Tb(),y.Tb()),2&t&&(y.Cb(2),y.mc("@fadeInRight",void 0)("crumbs",y.pc(9,Y)),y.Cb(1),y.mc("@fadeInUp",void 0),y.Cb(1),y.mc("columns",e.columns),y.Cb(5),y.mc("dataSource",e.dataSource),y.Cb(4),y.mc("ngForOf",e.columns),y.Cb(4),y.mc("matHeaderRowDef",e.visibleColumns),y.Cb(1),y.mc("matRowDefColumns",e.visibleColumns),y.Cb(1),y.mc("pageSize",e.pageSize))},directives:[S.a,P.a,I.a,R.a,A.a,j.b,L.a,n.j,s.a,n.c,n.e,n.b,c.l,n.g,n.i,o.a,n.d,N.a,n.a,c.m,s.b,H.d,H.e,H.b,n.f,n.h],styles:[".clickable[_ngcontent-%COMP%]{cursor:pointer}"],data:{animation:[d.a,f.a]}}),t})()}];let Z=(()=>{class t{}return t.\u0275mod=y.Mb({type:t}),t.\u0275inj=y.Lb({factory:function(e){return new(e||t)},imports:[[i.j.forChild(W)],i.j]}),t})();var Q=a("KthW"),tt=a("WCGO"),et=a("0jmt"),at=a("YUcS"),ct=a("QibW"),it=a("d3UM");let ot=(()=>{class t{}return t.\u0275mod=y.Mb({type:t}),t.\u0275inj=y.Lb({factory:function(e){return new(e||t)},imports:[[c.c,T.f,T.n,at.a,p.e,D.c,j.c,L.b,ct.c,it.b,v.b]]}),t})();var st=a("q8Jb");a.d(e,"DepartamentosModule",(function(){return nt}));let nt=(()=>{class t{}return t.\u0275mod=y.Mb({type:t}),t.\u0275inj=y.Lb({factory:function(e){return new(e||t)},imports:[[c.c,Z,T.f,Q.a,tt.a,et.a,ot,st.a]]}),t})()}}]);