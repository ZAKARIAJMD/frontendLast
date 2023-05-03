import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {MessageTypeDto} from '../model/MessageType.model';
import {MessageTypeCriteria} from '../criteria/MessageTypeCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class MessageTypeService extends AbstractService<MessageTypeDto, MessageTypeCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/messageType/');
    }

    public constrcutDto(): MessageTypeDto {
        return new MessageTypeDto();
    }

    public constrcutCriteria(): MessageTypeCriteria {
        return new MessageTypeCriteria();
    }
}
