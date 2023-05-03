import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {TelePeayageService} from 'src/app/controller/service/TelePeayage.service';
import {TelePeayageDto} from 'src/app/controller/model/TelePeayage.model';
import {TelePeayageCriteria} from 'src/app/controller/criteria/TelePeayageCriteria.model';



@Component({
  selector: 'app-tele-peayage-edit-admin',
  templateUrl: './tele-peayage-edit-admin.component.html'
})
export class TelePeayageEditAdminComponent extends AbstractEditController<TelePeayageDto, TelePeayageCriteria, TelePeayageService>   implements OnInit {


    private _validTelePeayageCode = true;
    private _validTelePeayageLibelle = true;




    constructor( private telePeayageService: TelePeayageService ) {
        super(telePeayageService);
    }

    ngOnInit(): void {
}


    public setValidation(value : boolean){
        this.validTelePeayageCode = value;
        this.validTelePeayageLibelle = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateTelePeayageCode();
        this.validateTelePeayageLibelle();
    }
    public validateTelePeayageCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validTelePeayageCode = false;
        } else {
            this.validTelePeayageCode = true;
        }
    }
    public validateTelePeayageLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validTelePeayageLibelle = false;
        } else {
            this.validTelePeayageLibelle = true;
        }
    }






    get validTelePeayageCode(): boolean {
        return this._validTelePeayageCode;
    }
    set validTelePeayageCode(value: boolean) {
        this._validTelePeayageCode = value;
    }
    get validTelePeayageLibelle(): boolean {
        return this._validTelePeayageLibelle;
    }
    set validTelePeayageLibelle(value: boolean) {
        this._validTelePeayageLibelle = value;
    }

}
