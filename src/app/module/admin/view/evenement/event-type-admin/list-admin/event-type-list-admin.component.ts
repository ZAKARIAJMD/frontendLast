import {Component, OnInit} from '@angular/core';
import {EventTypeService} from 'src/app/controller/service/EventType.service';
import {EventTypeDto} from 'src/app/controller/model/EventType.model';
import {EventTypeCriteria} from 'src/app/controller/criteria/EventTypeCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';




@Component({
  selector: 'app-event-type-list-admin',
  templateUrl: './event-type-list-admin.component.html'
})
export class EventTypeListAdminComponent extends AbstractListController<EventTypeDto, EventTypeCriteria, EventTypeService>  implements OnInit {

    fileName = 'EventType';

  
    constructor(eventTypeService: EventTypeService) {
        super(eventTypeService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadEventTypes(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('EventType', 'list');
        isPermistted ? this.service.findAll().subscribe(eventTypes => this.items = eventTypes,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'libelle', header: 'Libelle'},
        ];
    }



	public initDuplicate(res: EventTypeDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Code': e.code ,
                 'Libelle': e.libelle ,
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
        }];
      }
}
