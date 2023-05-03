import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {TypeVoieService} from 'src/app/controller/service/TypeVoie.service';
import {TypeVoieDto} from 'src/app/controller/model/TypeVoie.model';
import {TypeVoieCriteria} from 'src/app/controller/criteria/TypeVoieCriteria.model';

@Component({
  selector: 'app-type-voie-view-admin',
  templateUrl: './type-voie-view-admin.component.html'
})
export class TypeVoieViewAdminComponent extends AbstractViewController<TypeVoieDto, TypeVoieCriteria, TypeVoieService> implements OnInit {


    constructor(private typeVoieService: TypeVoieService){
        super(typeVoieService);
    }

    ngOnInit(): void {
    }




}
