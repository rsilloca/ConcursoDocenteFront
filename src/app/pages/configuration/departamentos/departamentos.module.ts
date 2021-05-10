import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartamentosRoutingModule } from './departamentos-routing.module';
import { DepartamentosComponent } from './departamentos.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/@fury/shared/material-components.module';
import { FurySharedModule } from 'src/@fury/fury-shared.module';
import { ListModule } from 'src/@fury/shared/list/list.module';
import { DepartamentoCreateUpdateModule } from './departamento-create-update/departamento-create-update.module';
import { BreadcrumbsModule } from 'src/@fury/shared/breadcrumbs/breadcrumbs.module';


@NgModule({
  declarations: [DepartamentosComponent],
  imports: [
    CommonModule,
    DepartamentosRoutingModule,
    FormsModule,
    MaterialModule,
    FurySharedModule,

    // Core
    ListModule,
    DepartamentoCreateUpdateModule,
    BreadcrumbsModule
  ],
  exports: [DepartamentosComponent]
})
export class DepartamentosModule { }
