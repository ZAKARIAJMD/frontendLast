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

import { EventTypeCreateAdminComponent } from './event-type-admin/create-admin/event-type-create-admin.component';
import { EventTypeEditAdminComponent } from './event-type-admin/edit-admin/event-type-edit-admin.component';
import { EventTypeViewAdminComponent } from './event-type-admin/view-admin/event-type-view-admin.component';
import { EventTypeListAdminComponent } from './event-type-admin/list-admin/event-type-list-admin.component';
import { EvenementCreateAdminComponent } from './evenement-admin/create-admin/evenement-create-admin.component';
import { EvenementEditAdminComponent } from './evenement-admin/edit-admin/evenement-edit-admin.component';
import { EvenementViewAdminComponent } from './evenement-admin/view-admin/evenement-view-admin.component';
import { EvenementListAdminComponent } from './evenement-admin/list-admin/evenement-list-admin.component';
import { MessageTypeCreateAdminComponent } from './message-type-admin/create-admin/message-type-create-admin.component';
import { MessageTypeEditAdminComponent } from './message-type-admin/edit-admin/message-type-edit-admin.component';
import { MessageTypeViewAdminComponent } from './message-type-admin/view-admin/message-type-view-admin.component';
import { MessageTypeListAdminComponent } from './message-type-admin/list-admin/message-type-list-admin.component';
import { AnomalieCreateAdminComponent } from './anomalie-admin/create-admin/anomalie-create-admin.component';
import { AnomalieEditAdminComponent } from './anomalie-admin/edit-admin/anomalie-edit-admin.component';
import { AnomalieViewAdminComponent } from './anomalie-admin/view-admin/anomalie-view-admin.component';
import { AnomalieListAdminComponent } from './anomalie-admin/list-admin/anomalie-list-admin.component';

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

    EventTypeCreateAdminComponent,
    EventTypeListAdminComponent,
    EventTypeViewAdminComponent,
    EventTypeEditAdminComponent,
    EvenementCreateAdminComponent,
    EvenementListAdminComponent,
    EvenementViewAdminComponent,
    EvenementEditAdminComponent,
    MessageTypeCreateAdminComponent,
    MessageTypeListAdminComponent,
    MessageTypeViewAdminComponent,
    MessageTypeEditAdminComponent,
    AnomalieCreateAdminComponent,
    AnomalieListAdminComponent,
    AnomalieViewAdminComponent,
    AnomalieEditAdminComponent,
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
  EventTypeCreateAdminComponent,
  EventTypeListAdminComponent,
  EventTypeViewAdminComponent,
  EventTypeEditAdminComponent,
  EvenementCreateAdminComponent,
  EvenementListAdminComponent,
  EvenementViewAdminComponent,
  EvenementEditAdminComponent,
  MessageTypeCreateAdminComponent,
  MessageTypeListAdminComponent,
  MessageTypeViewAdminComponent,
  MessageTypeEditAdminComponent,
  AnomalieCreateAdminComponent,
  AnomalieListAdminComponent,
  AnomalieViewAdminComponent,
  AnomalieEditAdminComponent,
  ],
  entryComponents: [],
})
export class EvenementAdminModule { }