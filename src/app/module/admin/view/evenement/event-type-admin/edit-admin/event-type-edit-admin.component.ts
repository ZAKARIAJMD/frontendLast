import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {EventTypeService} from 'src/app/controller/service/EventType.service';
import {EventTypeDto} from 'src/app/controller/model/EventType.model';
import {EventTypeCriteria} from 'src/app/controller/criteria/EventTypeCriteria.model';



@Component({
  selector: 'app-event-type-edit-admin',
  templateUrl: './event-type-edit-admin.component.html'
})
export class EventTypeEditAdminComponent extends AbstractEditController<EventTypeDto, EventTypeCriteria, EventTypeService>   implements OnInit {


    private _validEventTypeCode = true;
    private _validEventTypeLibelle = true;




    constructor( private eventTypeService: EventTypeService ) {
        super(eventTypeService);
    }

    ngOnInit(): void {
}


    public setValidation(value : boolean){
        this.validEventTypeCode = value;
        this.validEventTypeLibelle = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateEventTypeCode();
        this.validateEventTypeLibelle();
    }
    public validateEventTypeCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validEventTypeCode = false;
        } else {
            this.validEventTypeCode = true;
        }
    }
    public validateEventTypeLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validEventTypeLibelle = false;
        } else {
            this.validEventTypeLibelle = true;
        }
    }






    get validEventTypeCode(): boolean {
        return this._validEventTypeCode;
    }
    set validEventTypeCode(value: boolean) {
        this._validEventTypeCode = value;
    }
    get validEventTypeLibelle(): boolean {
        return this._validEventTypeLibelle;
    }
    set validEventTypeLibelle(value: boolean) {
        this._validEventTypeLibelle = value;
    }

}
