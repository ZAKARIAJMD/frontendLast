import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {MessageTypeService} from 'src/app/controller/service/MessageType.service';
import {MessageTypeDto} from 'src/app/controller/model/MessageType.model';
import {MessageTypeCriteria} from 'src/app/controller/criteria/MessageTypeCriteria.model';
@Component({
  selector: 'app-message-type-create-admin',
  templateUrl: './message-type-create-admin.component.html'
})
export class MessageTypeCreateAdminComponent extends AbstractCreateController<MessageTypeDto, MessageTypeCriteria, MessageTypeService>  implements OnInit {



   private _validMessageTypeCode = true;
   private _validMessageTypeLibelle = true;

    constructor( private messageTypeService: MessageTypeService ) {
        super(messageTypeService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
        this.validMessageTypeCode = value;
        this.validMessageTypeLibelle = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateMessageTypeCode();
        this.validateMessageTypeLibelle();
    }

    public validateMessageTypeCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validMessageTypeCode = false;
        } else {
            this.validMessageTypeCode = true;
        }
    }
    public validateMessageTypeLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validMessageTypeLibelle = false;
        } else {
            this.validMessageTypeLibelle = true;
        }
    }






    get validMessageTypeCode(): boolean {
        return this._validMessageTypeCode;
    }

    set validMessageTypeCode(value: boolean) {
         this._validMessageTypeCode = value;
    }
    get validMessageTypeLibelle(): boolean {
        return this._validMessageTypeLibelle;
    }

    set validMessageTypeLibelle(value: boolean) {
         this._validMessageTypeLibelle = value;
    }



}
