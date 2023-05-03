import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {TypeVoieService} from 'src/app/controller/service/TypeVoie.service';
import {TypeVoieDto} from 'src/app/controller/model/TypeVoie.model';
import {TypeVoieCriteria} from 'src/app/controller/criteria/TypeVoieCriteria.model';



@Component({
  selector: 'app-type-voie-edit-admin',
  templateUrl: './type-voie-edit-admin.component.html'
})
export class TypeVoieEditAdminComponent extends AbstractEditController<TypeVoieDto, TypeVoieCriteria, TypeVoieService>   implements OnInit {


    private _validTypeVoieCode = true;
    private _validTypeVoieLibelle = true;




    constructor( private typeVoieService: TypeVoieService ) {
        super(typeVoieService);
    }

    ngOnInit(): void {
}


    public setValidation(value : boolean){
        this.validTypeVoieCode = value;
        this.validTypeVoieLibelle = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateTypeVoieCode();
        this.validateTypeVoieLibelle();
    }
    public validateTypeVoieCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validTypeVoieCode = false;
        } else {
            this.validTypeVoieCode = true;
        }
    }
    public validateTypeVoieLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validTypeVoieLibelle = false;
        } else {
            this.validTypeVoieLibelle = true;
        }
    }






    get validTypeVoieCode(): boolean {
        return this._validTypeVoieCode;
    }
    set validTypeVoieCode(value: boolean) {
        this._validTypeVoieCode = value;
    }
    get validTypeVoieLibelle(): boolean {
        return this._validTypeVoieLibelle;
    }
    set validTypeVoieLibelle(value: boolean) {
        this._validTypeVoieLibelle = value;
    }

}
