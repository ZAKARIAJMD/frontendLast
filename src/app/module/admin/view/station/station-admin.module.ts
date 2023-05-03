import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextareaModule} from 'primeng/inputtextarea';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import { MultiSelectModule } from 'primeng/multiselect';
import {TranslateModule} from '@ngx-translate/core';

import { StationCreateAdminComponent } from './station-admin/create-admin/station-create-admin.component';
import { StationEditAdminComponent } from './station-admin/edit-admin/station-edit-admin.component';
import { StationViewAdminComponent } from './station-admin/view-admin/station-view-admin.component';
import { StationListAdminComponent } from './station-admin/list-admin/station-list-admin.component';
import { TypeEquipementCreateAdminComponent } from './type-equipement-admin/create-admin/type-equipement-create-admin.component';
import { TypeEquipementEditAdminComponent } from './type-equipement-admin/edit-admin/type-equipement-edit-admin.component';
import { TypeEquipementViewAdminComponent } from './type-equipement-admin/view-admin/type-equipement-view-admin.component';
import { TypeEquipementListAdminComponent } from './type-equipement-admin/list-admin/type-equipement-list-admin.component';
import { TypeVoieCreateAdminComponent } from './type-voie-admin/create-admin/type-voie-create-admin.component';
import { TypeVoieEditAdminComponent } from './type-voie-admin/edit-admin/type-voie-edit-admin.component';
import { TypeVoieViewAdminComponent } from './type-voie-admin/view-admin/type-voie-view-admin.component';
import { TypeVoieListAdminComponent } from './type-voie-admin/list-admin/type-voie-list-admin.component';
import { VoieCreateAdminComponent } from './voie-admin/create-admin/voie-create-admin.component';
import { VoieEditAdminComponent } from './voie-admin/edit-admin/voie-edit-admin.component';
import { VoieViewAdminComponent } from './voie-admin/view-admin/voie-view-admin.component';
import { VoieListAdminComponent } from './voie-admin/list-admin/voie-list-admin.component';
import { TelePeayageCreateAdminComponent } from './tele-peayage-admin/create-admin/tele-peayage-create-admin.component';
import { TelePeayageEditAdminComponent } from './tele-peayage-admin/edit-admin/tele-peayage-edit-admin.component';
import { TelePeayageViewAdminComponent } from './tele-peayage-admin/view-admin/tele-peayage-view-admin.component';
import { TelePeayageListAdminComponent } from './tele-peayage-admin/list-admin/tele-peayage-list-admin.component';

import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessageModule } from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import {PaginatorModule} from 'primeng/paginator';



@NgModule({
  declarations: [

    StationCreateAdminComponent,
    StationListAdminComponent,
    StationViewAdminComponent,
    StationEditAdminComponent,
    TypeEquipementCreateAdminComponent,
    TypeEquipementListAdminComponent,
    TypeEquipementViewAdminComponent,
    TypeEquipementEditAdminComponent,
    TypeVoieCreateAdminComponent,
    TypeVoieListAdminComponent,
    TypeVoieViewAdminComponent,
    TypeVoieEditAdminComponent,
    VoieCreateAdminComponent,
    VoieListAdminComponent,
    VoieViewAdminComponent,
    VoieEditAdminComponent,
    TelePeayageCreateAdminComponent,
    TelePeayageListAdminComponent,
    TelePeayageViewAdminComponent,
    TelePeayageEditAdminComponent,
  ],
  imports: [
    CommonModule,
    ToastModule,
    ToolbarModule,
    TableModule,
    ConfirmDialogModule,
    DialogModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SplitButtonModule,
    BrowserAnimationsModule,
    DropdownModule,
    TabViewModule,
    InputSwitchModule,
    InputTextareaModule,
    CalendarModule,
    PanelModule,
    MessageModule,
    MessagesModule,
    InputNumberModule,
    BadgeModule,
    MultiSelectModule,
    PaginatorModule,
    TranslateModule,
  ],
  exports: [
  StationCreateAdminComponent,
  StationListAdminComponent,
  StationViewAdminComponent,
  StationEditAdminComponent,
  TypeEquipementCreateAdminComponent,
  TypeEquipementListAdminComponent,
  TypeEquipementViewAdminComponent,
  TypeEquipementEditAdminComponent,
  TypeVoieCreateAdminComponent,
  TypeVoieListAdminComponent,
  TypeVoieViewAdminComponent,
  TypeVoieEditAdminComponent,
  VoieCreateAdminComponent,
  VoieListAdminComponent,
  VoieViewAdminComponent,
  VoieEditAdminComponent,
  TelePeayageCreateAdminComponent,
  TelePeayageListAdminComponent,
  TelePeayageViewAdminComponent,
  TelePeayageEditAdminComponent,
  ],
  entryComponents: [],
})
export class StationAdminModule { }