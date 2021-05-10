import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'facultades',
    loadChildren: () => import('./facultades/facultades.module').then(m => m.FacultadesModule)
  },
  {
    path: 'departamentos',
    loadChildren: () => import('./departamentos/departamentos.module').then(m => m.DepartamentosModule)
  },
  {
    path: 'asignaturas',
    loadChildren: () => import('./asignaturas/asignaturas.module').then(m => m.AsignaturasModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
