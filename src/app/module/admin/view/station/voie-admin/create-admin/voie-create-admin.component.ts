import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {VoieService} from 'src/app/controller/service/Voie.service';
import {VoieDto} from 'src/app/controller/model/Voie.model';
import {VoieCriteria} from 'src/app/controller/criteria/VoieCriteria.model';
import {StationDto} from 'src/app/controller/model/Station.model';
import {StationService} from 'src/app/controller/service/Station.service';
import {TelePeayageDto} from 'src/app/controller/model/TelePeayage.model';
import {TelePeayageService} from 'src/app/controller/service/TelePeayage.service';
import {TypeVoieDto} from 'src/app/controller/model/TypeVoie.model';
import {TypeVoieService} from 'src/app/controller/service/TypeVoie.service';
@Component({
  selector: 'app-voie-create-admin',
  templateUrl: './voie-create-admin.component.html'
})
export class VoieCreateAdminComponent extends AbstractCreateController<VoieDto, VoieCriteria, VoieService>  implements OnInit {



   private _validVoieLibelle = true;
   private _validVoieCode = true;
    private _validTypeVoieCode = true;
    private _validTypeVoieLibelle = true;
    private _validTelePeayageCode = true;
    private _validTelePeayageLibelle = true;
    private _validStationLibelle = true;

    constructor( private voieService: VoieService , private stationService: StationService, private telePeayageService: TelePeayageService, private typeVoieService: TypeVoieService) {
        super(voieService);
    }

    ngOnInit(): void {
    this.typeVoie = new TypeVoieDto();
    this.typeVoieService.findAll().subscribe((data) => this.typeVoies = data);
    this.telePeayage = new TelePeayageDto();
    this.telePeayageService.findAll().subscribe((data) => this.telePeayages = data);
    this.station = new StationDto();
    this.stationService.findAll().subscribe((data) => this.stations = data);
}





    public setValidation(value: boolean){
        this.validVoieLibelle = value;
        this.validVoieCode = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateVoieLibelle();
        this.validateVoieCode();
    }

    public validateVoieLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validVoieLibelle = false;
        } else {
            this.validVoieLibelle = true;
        }
    }
    public validateVoieCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validVoieCode = false;
        } else {
            this.validVoieCode = true;
        }
    }


    public async openCreateStation(station: string) {
    const isPermistted = await this.roleService.isPermitted('Station', 'add');
    if(isPermistted) {
         this.station = new StationDto();
         this.createStationDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
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

    get station(): StationDto {
        return this.stationService.item;
    }
    set station(value: StationDto) {
        this.stationService.item = value;
    }
    get stations(): Array<StationDto> {
        return this.stationService.items;
    }
    set stations(value: Array<StationDto>) {
        this.stationService.items = value;
    }
    get createStationDialog(): boolean {
       return this.stationService.createDialog;
    }
    set createStationDialog(value: boolean) {
        this.stationService.createDialog= value;
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



    get validVoieLibelle(): boolean {
        return this._validVoieLibelle;
    }

    set validVoieLibelle(value: boolean) {
         this._validVoieLibelle = value;
    }
    get validVoieCode(): boolean {
        return this._validVoieCode;
    }

    set validVoieCode(value: boolean) {
         this._validVoieCode = value;
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
    get validStationLibelle(): boolean {
        return this._validStationLibelle;
    }
    set validStationLibelle(value: boolean) {
        this._validStationLibelle = value;
    }


}
