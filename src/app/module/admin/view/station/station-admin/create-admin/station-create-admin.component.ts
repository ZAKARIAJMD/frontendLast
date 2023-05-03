import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {StationService} from 'src/app/controller/service/Station.service';
import {StationDto} from 'src/app/controller/model/Station.model';
import {StationCriteria} from 'src/app/controller/criteria/StationCriteria.model';
import {VoieDto} from 'src/app/controller/model/Voie.model';
import {VoieService} from 'src/app/controller/service/Voie.service';
import {TelePeayageDto} from 'src/app/controller/model/TelePeayage.model';
import {TelePeayageService} from 'src/app/controller/service/TelePeayage.service';
import {StationTypeEquipementDto} from 'src/app/controller/model/StationTypeEquipement.model';
import {StationTypeEquipementService} from 'src/app/controller/service/StationTypeEquipement.service';
import {TypeVoieDto} from 'src/app/controller/model/TypeVoie.model';
import {TypeVoieService} from 'src/app/controller/service/TypeVoie.service';
import {TypeEquipementDto} from 'src/app/controller/model/TypeEquipement.model';
import {TypeEquipementService} from 'src/app/controller/service/TypeEquipement.service';
@Component({
  selector: 'app-station-create-admin',
  templateUrl: './station-create-admin.component.html'
})
export class StationCreateAdminComponent extends AbstractCreateController<StationDto, StationCriteria, StationService>  implements OnInit {

    private _voiesElement = new VoieDto();
    private _stationTypeEquipementsElement = new StationTypeEquipementDto();


   private _validStationLibelle = true;
    private _validVoiesLibelle = true;
    private _validVoiesCode = true;
    private _stationTypeEquipements: Array<StationTypeEquipementDto> = [];

    constructor( private stationService: StationService , private voieService: VoieService, private telePeayageService: TelePeayageService, private stationTypeEquipementService: StationTypeEquipementService, private typeVoieService: TypeVoieService, private typeEquipementService: TypeEquipementService) {
        super(stationService);
    }

    ngOnInit(): void {
        this.voiesElement.typeVoie = new TypeVoieDto();
        this.typeVoieService.findAll().subscribe((data) => this.typeVoies = data);
        this.voiesElement.telePeayage = new TelePeayageDto();
        this.telePeayageService.findAll().subscribe((data) => this.telePeayages = data);
        this.typeEquipementService.findAll().subscribe(data => this.prepareStationTypeEquipements(data));
        this.stationTypeEquipementsElement.typeEquipement = new TypeEquipementDto();
        this.typeEquipementService.findAll().subscribe((data) => this.typeEquipements = data);
}


     prepareStationTypeEquipements(typeEquipements: Array<TypeEquipementDto>): void{
        if( typeEquipements != null){
                typeEquipements.forEach(e => {
                const stationTypeEquipement = new StationTypeEquipementDto();
                stationTypeEquipement.typeEquipement = e;
                this.stationTypeEquipements.push(stationTypeEquipement);
            });
        }
    }

    validateVoies(){
        this.errorMessages = new Array();
        this.validateVoiesLibelle();
        this.validateVoiesCode();
    }


    public setValidation(value: boolean){
        this.validStationLibelle = value;
        this.validVoiesLibelle = value;
        this.validVoiesCode = value;
    }

    public addVoies() {
        if( this.item.voies == null )
            this.item.voies = new Array<VoieDto>();
       this.validateVoies();
       if (this.errorMessages.length === 0) {
              this.item.voies.push({... this.voiesElement});
              this.voiesElement = new VoieDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs',detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
       }
    }


    public deleteVoie(p: VoieDto) {
        this.item.voies.forEach((element, index) => {
            if (element === p) { this.item.voies.splice(index, 1); }
        });
    }

    public editVoie(p: VoieDto) {
        this.voiesElement = {... p};
        this.activeTab = 0;
    }


    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateStationLibelle();
    }

    public validateStationLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validStationLibelle = false;
        } else {
            this.validStationLibelle = true;
        }
    }

    public validateVoiesLibelle(){
        if (this.voiesElement.libelle == null) {
            this.errorMessages.push('Libelle de la voie est  invalide');
            this.validVoiesLibelle = false;
        } else {
            this.validVoiesLibelle = true;
        }
    }
    public validateVoiesCode(){
        if (this.voiesElement.code == null) {
            this.errorMessages.push('Code de la voie est  invalide');
            this.validVoiesCode = false;
        } else {
            this.validVoiesCode = true;
        }
    }

    public async openCreateTelePeayage(telePeayage: string) {
    const isPermistted = await this.roleService.isPermitted('TelePeayage', 'add');
    if(isPermistted) {
         this.telePeayage = new TelePeayageDto();
         this.createTelePeayageDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }
    public async openCreateTypeEquipement(typeEquipement: string) {
    const isPermistted = await this.roleService.isPermitted('TypeEquipement', 'add');
    if(isPermistted) {
         this.typeEquipement = new TypeEquipementDto();
         this.createTypeEquipementDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }
    public async openCreateTypeVoie(typeVoie: string) {
    const isPermistted = await this.roleService.isPermitted('TypeVoie', 'add');
    if(isPermistted) {
         this.typeVoie = new TypeVoieDto();
         this.createTypeVoieDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }

    get telePeayage(): TelePeayageDto {
        return this.telePeayageService.item;
    }
    set telePeayage(value: TelePeayageDto) {
        this.telePeayageService.item = value;
    }
    get telePeayages(): Array<TelePeayageDto> {
        return this.telePeayageService.items;
    }
    set telePeayages(value: Array<TelePeayageDto>) {
        this.telePeayageService.items = value;
    }
    get createTelePeayageDialog(): boolean {
       return this.telePeayageService.createDialog;
    }
    set createTelePeayageDialog(value: boolean) {
        this.telePeayageService.createDialog= value;
    }
    get typeEquipement(): TypeEquipementDto {
        return this.typeEquipementService.item;
    }
    set typeEquipement(value: TypeEquipementDto) {
        this.typeEquipementService.item = value;
    }
    get typeEquipements(): Array<TypeEquipementDto> {
        return this.typeEquipementService.items;
    }
    set typeEquipements(value: Array<TypeEquipementDto>) {
        this.typeEquipementService.items = value;
    }
    get createTypeEquipementDialog(): boolean {
       return this.typeEquipementService.createDialog;
    }
    set createTypeEquipementDialog(value: boolean) {
        this.typeEquipementService.createDialog= value;
    }
    get typeVoie(): TypeVoieDto {
        return this.typeVoieService.item;
    }
    set typeVoie(value: TypeVoieDto) {
        this.typeVoieService.item = value;
    }
    get typeVoies(): Array<TypeVoieDto> {
        return this.typeVoieService.items;
    }
    set typeVoies(value: Array<TypeVoieDto>) {
        this.typeVoieService.items = value;
    }
    get createTypeVoieDialog(): boolean {
       return this.typeVoieService.createDialog;
    }
    set createTypeVoieDialog(value: boolean) {
        this.typeVoieService.createDialog= value;
    }

    get stationTypeEquipements(): Array<StationTypeEquipementDto> {
        if( this._stationTypeEquipements == null )
            this._stationTypeEquipements = new Array();
        return this._stationTypeEquipements;
    }

    set stationTypeEquipements(value: Array<StationTypeEquipementDto>) {
        this._stationTypeEquipements = value;
    }


    get validStationLibelle(): boolean {
        return this._validStationLibelle;
    }

    set validStationLibelle(value: boolean) {
         this._validStationLibelle = value;
    }

    get validVoiesLibelle(): boolean {
        return this._validVoiesLibelle;
    }
    set validVoiesLibelle(value: boolean) {
        this._validVoiesLibelle = value;
    }
    get validVoiesCode(): boolean {
        return this._validVoiesCode;
    }
    set validVoiesCode(value: boolean) {
        this._validVoiesCode = value;
    }

    get voiesElement(): VoieDto {
        if( this._voiesElement == null )
            this._voiesElement = new VoieDto();
        return this._voiesElement;
    }

    set voiesElement(value: VoieDto) {
        this._voiesElement = value;
    }
    get stationTypeEquipementsElement(): StationTypeEquipementDto {
        if( this._stationTypeEquipementsElement == null )
            this._stationTypeEquipementsElement = new StationTypeEquipementDto();
        return this._stationTypeEquipementsElement;
    }

    set stationTypeEquipementsElement(value: StationTypeEquipementDto) {
        this._stationTypeEquipementsElement = value;
    }

}
