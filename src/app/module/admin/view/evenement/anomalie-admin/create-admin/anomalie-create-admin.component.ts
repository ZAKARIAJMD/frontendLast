import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {AnomalieService} from 'src/app/controller/service/Anomalie.service';
import {AnomalieDto} from 'src/app/controller/model/Anomalie.model';
import {AnomalieCriteria} from 'src/app/controller/criteria/AnomalieCriteria.model';
@Component({
  selector: 'app-anomalie-create-admin',
  templateUrl: './anomalie-create-admin.component.html'
})
export class AnomalieCreateAdminComponent extends AbstractCreateController<AnomalieDto, AnomalieCriteria, AnomalieService>  implements OnInit {



   private _validAnomalieCode = true;
   private _validAnomalieLibelle = true;

    constructor( private anomalieService: AnomalieService ) {
        super(anomalieService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
        this.validAnomalieCode = value;
        this.validAnomalieLibelle = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateAnomalieCode();
        this.validateAnomalieLibelle();
    }

    public validateAnomalieCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validAnomalieCode = false;
        } else {
            this.validAnomalieCode = true;
        }
    }
    public validateAnomalieLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validAnomalieLibelle = false;
        } else {
            this.validAnomalieLibelle = true;
        }
    }






    get validAnomalieCode(): boolean {
        return this._validAnomalieCode;
    }

    set validAnomalieCode(value: boolean) {
         this._validAnomalieCode = value;
    }
    get validAnomalieLibelle(): boolean {
        return this._validAnomalieLibelle;
    }

    set validAnomalieLibelle(value: boolean) {
         this._validAnomalieLibelle = value;
    }



}
