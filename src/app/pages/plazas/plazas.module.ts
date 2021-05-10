import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlazasRoutingModule } from './plazas-routing.module';
import { PlazasComponent } from './plazas.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/@fury/shared/material-components.module';
import { FurySharedModule } from 'src/@fury/fury-shared.module';
import { ListModule } from 'src/@fury/shared/list/list.module';
import { PlazaCreateUpdateModule } from './plaza-create-update/plaza-create-update.module';
import { BreadcrumbsModule } from 'src/@fury/shared/breadcrumbs/breadcrumbs.module';


@NgModule({
  declarations: [PlazasComponent],
  imports: [
    CommonModule,
    PlazasRoutingModule,
    FormsModule,
    MaterialModule,
    FurySharedModule,

    // Core
    ListModule,
    PlazaCreateUpdateModule,
    BreadcrumbsModule
  ]
})
export class PlazasModule { }
