import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {TypeEquipementService} from 'src/app/controller/service/TypeEquipement.service';
import {TypeEquipementDto} from 'src/app/controller/model/TypeEquipement.model';
import {TypeEquipementCriteria} from 'src/app/controller/criteria/TypeEquipementCriteria.model';

@Component({
  selector: 'app-type-equipement-view-admin',
  templateUrl: './type-equipement-view-admin.component.html'
})
export class TypeEquipementViewAdminComponent extends AbstractViewController<TypeEquipementDto, TypeEquipementCriteria, TypeEquipementService> implements OnInit {


    constructor(private typeEquipementService: TypeEquipementService){
        super(typeEquipementService);
    }

    ngOnInit(): void {
    }




}
