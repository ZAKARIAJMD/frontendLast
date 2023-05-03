import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {TypeEquipementService} from 'src/app/controller/service/TypeEquipement.service';
import {TypeEquipementDto} from 'src/app/controller/model/TypeEquipement.model';
import {TypeEquipementCriteria} from 'src/app/controller/criteria/TypeEquipementCriteria.model';
@Component({
  selector: 'app-type-equipement-create-admin',
  templateUrl: './type-equipement-create-admin.component.html'
})
export class TypeEquipementCreateAdminComponent extends AbstractCreateController<TypeEquipementDto, TypeEquipementCriteria, TypeEquipementService>  implements OnInit {



   private _validTypeEquipementCode = true;
   private _validTypeEquipementLibelle = true;

    constructor( private typeEquipementService: TypeEquipementService ) {
        super(typeEquipementService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
        this.validTypeEquipementCode = value;
        this.validTypeEquipementLibelle = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateTypeEquipementCode();
        this.validateTypeEquipementLibelle();
    }

    public validateTypeEquipementCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validTypeEquipementCode = false;
        } else {
            this.validTypeEquipementCode = true;
        }
    }
    public validateTypeEquipementLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validTypeEquipementLibelle = false;
        } else {
            this.validTypeEquipementLibelle = true;
        }
    }






    get validTypeEquipementCode(): boolean {
        return this._validTypeEquipementCode;
    }

    set validTypeEquipementCode(value: boolean) {
         this._validTypeEquipementCode = value;
    }
    get validTypeEquipementLibelle(): boolean {
        return this._validTypeEquipementLibelle;
    }

    set validTypeEquipementLibelle(value: boolean) {
         this._validTypeEquipementLibelle = value;
    }



}
