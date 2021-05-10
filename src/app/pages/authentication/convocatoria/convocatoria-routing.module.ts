import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConvocatoriaComponent } from './convocatoria.component';


const routes: Routes = [
  {
    path: '',
    component: ConvocatoriaComponent
  },
  {
    path: ':concurso',
    component: ConvocatoriaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConvocatoriaRoutingModule { }
