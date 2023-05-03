
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { EventTypeListAdminComponent } from './event-type-admin/list-admin/event-type-list-admin.component';
import { EvenementListAdminComponent } from './evenement-admin/list-admin/evenement-list-admin.component';
import { MessageTypeListAdminComponent } from './message-type-admin/list-admin/message-type-list-admin.component';
import { AnomalieListAdminComponent } from './anomalie-admin/list-admin/anomalie-list-admin.component';
@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


                        {

                            path: 'event-type',
                            children: [
                                {
                                    path: 'list',
                                    component: EventTypeListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'evenement',
                            children: [
                                {
                                    path: 'list',
                                    component: EvenementListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'message-type',
                            children: [
                                {
                                    path: 'list',
                                    component: MessageTypeListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'anomalie',
                            children: [
                                {
                                    path: 'list',
                                    component: AnomalieListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                    ]
                },
            ]
        ),
    ],
    exports: [RouterModule],
})
export class EvenementAdminRoutingModule { }
