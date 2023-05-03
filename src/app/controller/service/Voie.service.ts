import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {VoieDto} from '../model/Voie.model';
import {VoieCriteria} from '../criteria/VoieCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {TelePeayageDto} from '../model/TelePeayage.model';
import {TypeVoieDto} from '../model/TypeVoie.model';
import {StationDto} from '../model/Station.model';

@Injectable({
  providedIn: 'root'
})
export class VoieService extends AbstractService<VoieDto, VoieCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/voie/');
    }

    public constrcutDto(): VoieDto {
        return new VoieDto();
    }

    public constrcutCriteria(): VoieCriteria {
        return new VoieCriteria();
    }
}
