import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {EventTypeService} from 'src/app/controller/service/EventType.service';
import {EventTypeDto} from 'src/app/controller/model/EventType.model';
import {EventTypeCriteria} from 'src/app/controller/criteria/EventTypeCriteria.model';

@Component({
  selector: 'app-event-type-view-admin',
  templateUrl: './event-type-view-admin.component.html'
})
export class EventTypeViewAdminComponent extends AbstractViewController<EventTypeDto, EventTypeCriteria, EventTypeService> implements OnInit {


    constructor(private eventTypeService: EventTypeService){
        super(eventTypeService);
    }

    ngOnInit(): void {
    }




}
