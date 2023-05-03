import {Component, OnInit} from '@angular/core';
import {MessageTypeService} from 'src/app/controller/service/MessageType.service';
import {MessageTypeDto} from 'src/app/controller/model/MessageType.model';
import {MessageTypeCriteria} from 'src/app/controller/criteria/MessageTypeCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';




@Component({
  selector: 'app-message-type-list-admin',
  templateUrl: './message-type-list-admin.component.html'
})
export class MessageTypeListAdminComponent extends AbstractListController<MessageTypeDto, MessageTypeCriteria, MessageTypeService>  implements OnInit {

    fileName = 'MessageType';

  
    constructor(messageTypeService: MessageTypeService) {
        super(messageTypeService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadMessageTypes(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('MessageType', 'list');
        isPermistted ? this.service.findAll().subscribe(messageTypes => this.items = messageTypes,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'libelle', header: 'Libelle'},
        ];
    }



	public initDuplicate(res: MessageTypeDto) {
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
