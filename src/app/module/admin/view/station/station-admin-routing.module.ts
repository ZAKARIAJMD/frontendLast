
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { StationListAdminComponent } from './station-admin/list-admin/station-list-admin.component';
import { TypeEquipementListAdminComponent } from './type-equipement-admin/list-admin/type-equipement-list-admin.component';
import { TypeVoieListAdminComponent } from './type-voie-admin/list-admin/type-voie-list-admin.component';
import { VoieListAdminComponent } from './voie-admin/list-admin/voie-list-admin.component';
import { TelePeayageListAdminComponent } from './tele-peayage-admin/list-admin/tele-peayage-list-admin.component';
@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


                        {

                            path: 'station',
                            children: [
                                {
                                    path: 'list',
                                    component: StationListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'type-equipement',
                            children: [
                                {
                                    path: 'list',
                                    component: TypeEquipementListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'type-voie',
                            children: [
                                {
                                    path: 'list',
                                    component: TypeVoieListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'voie',
                            children: [
                                {
                                    path: 'list',
                                    component: VoieListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'tele-peayage',
                            children: [
                                {
                                    path: 'list',
                                    component: TelePeayageListAdminComponent ,
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
export class StationAdminRoutingModule { }
