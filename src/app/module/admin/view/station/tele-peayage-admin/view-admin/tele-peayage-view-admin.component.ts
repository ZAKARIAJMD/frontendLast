import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {TelePeayageService} from 'src/app/controller/service/TelePeayage.service';
import {TelePeayageDto} from 'src/app/controller/model/TelePeayage.model';
import {TelePeayageCriteria} from 'src/app/controller/criteria/TelePeayageCriteria.model';

@Component({
  selector: 'app-tele-peayage-view-admin',
  templateUrl: './tele-peayage-view-admin.component.html'
})
export class TelePeayageViewAdminComponent extends AbstractViewController<TelePeayageDto, TelePeayageCriteria, TelePeayageService> implements OnInit {


    constructor(private telePeayageService: TelePeayageService){
        super(telePeayageService);
    }

    ngOnInit(): void {
    }




}
