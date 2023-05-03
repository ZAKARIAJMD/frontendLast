import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {EventTypeDto} from '../model/EventType.model';
import {EventTypeCriteria} from '../criteria/EventTypeCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class EventTypeService extends AbstractService<EventTypeDto, EventTypeCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/eventType/');
    }

    public constrcutDto(): EventTypeDto {
        return new EventTypeDto();
    }

    public constrcutCriteria(): EventTypeCriteria {
        return new EventTypeCriteria();
    }
}
