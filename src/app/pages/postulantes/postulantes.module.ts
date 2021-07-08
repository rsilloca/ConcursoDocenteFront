import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostulantesRoutingModule } from './postulantes-routing.module';
import { PostulantesComponent } from './postulantes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/@fury/shared/material-components.module';
import { FurySharedModule } from 'src/@fury/fury-shared.module';
import { ListModule } from 'src/@fury/shared/list/list.module';
import { PostulanteCreateUpdateModule } from './postulante-create-update/postulante-create-update.module';
import { BreadcrumbsModule } from 'src/@fury/shared/breadcrumbs/breadcrumbs.module';
import { PostulanteQualifyComponent } from './postulante-qualify/postulante-qualify.component';
import { PostulanteAlertComponent } from './postulante-alert/postulante-alert.component';


@NgModule({
  declarations: [PostulantesComponent, PostulanteQualifyComponent, PostulanteAlertComponent],
  imports: [
    CommonModule,
    PostulantesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FurySharedModule,

    // Core
    ListModule,
    PostulanteCreateUpdateModule,
    BreadcrumbsModule
  ]
})
export class PostulantesModule { }
