import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {AnomalieService} from 'src/app/controller/service/Anomalie.service';
import {AnomalieDto} from 'src/app/controller/model/Anomalie.model';
import {AnomalieCriteria} from 'src/app/controller/criteria/AnomalieCriteria.model';

@Component({
  selector: 'app-anomalie-view-admin',
  templateUrl: './anomalie-view-admin.component.html'
})
export class AnomalieViewAdminComponent extends AbstractViewController<AnomalieDto, AnomalieCriteria, AnomalieService> implements OnInit {


    constructor(private anomalieService: AnomalieService){
        super(anomalieService);
    }

    ngOnInit(): void {
    }




}
