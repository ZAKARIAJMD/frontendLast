import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {MessageTypeService} from 'src/app/controller/service/MessageType.service';
import {MessageTypeDto} from 'src/app/controller/model/MessageType.model';
import {MessageTypeCriteria} from 'src/app/controller/criteria/MessageTypeCriteria.model';

@Component({
  selector: 'app-message-type-view-admin',
  templateUrl: './message-type-view-admin.component.html'
})
export class MessageTypeViewAdminComponent extends AbstractViewController<MessageTypeDto, MessageTypeCriteria, MessageTypeService> implements OnInit {


    constructor(private messageTypeService: MessageTypeService){
        super(messageTypeService);
    }

    ngOnInit(): void {
    }




}
