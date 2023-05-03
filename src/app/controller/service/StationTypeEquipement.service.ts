import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {StationTypeEquipementDto} from '../model/StationTypeEquipement.model';
import {StationTypeEquipementCriteria} from '../criteria/StationTypeEquipementCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {StationDto} from '../model/Station.model';
import {TypeEquipementDto} from '../model/TypeEquipement.model';

@Injectable({
  providedIn: 'root'
})
export class StationTypeEquipementService extends AbstractService<StationTypeEquipementDto, StationTypeEquipementCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/stationTypeEquipement/');
    }

    public constrcutDto(): StationTypeEquipementDto {
        return new StationTypeEquipementDto();
    }

    public constrcutCriteria(): StationTypeEquipementCriteria {
        return new StationTypeEquipementCriteria();
    }
}
